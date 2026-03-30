import { call, put, takeEvery } from "redux-saga/effects";
import { fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure } from "./userListSlice";

interface User {
  id: number;
  name: string;
}

// Worker Saga - Handles the actual API call
function* fetchUsersSaga(action: ReturnType<typeof fetchUsersRequest>): Generator<any, void, any> {
  try {
    console.log("fetchUsersSaga triggered");
    const res: Response = yield call(
      fetch,
      "https://jsonplaceholder.typicode.com/users"
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch users: ${res.status}`);
    }

    const users: User[] = yield call(() => res.json());
    console.log("Users fetched:", users);
    yield put(fetchUsersSuccess(users));
  } catch (error) {
    console.error("Fetch error:", error);
    const errorMessage = error instanceof Error ? error.message : "Failed to fetch users";
    yield put(fetchUsersFailure(errorMessage));
  }
}

// Watcher Saga - Listens for the fetchUsersRequest action
export function* userListSaga(): Generator<any, void, any> {
  console.log("userListSaga registered, watching fetchUsersRequest");
  yield takeEvery(fetchUsersRequest.type, fetchUsersSaga);
}
