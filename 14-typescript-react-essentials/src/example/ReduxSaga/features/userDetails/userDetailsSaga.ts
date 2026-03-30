import { put, takeEvery } from "redux-saga/effects";
import { selectedUser, clearSelectedUser } from "./userDetailsSlice";

// Worker Saga - Can handle side effects when user is selected
function* handleUserSelection(action: ReturnType<typeof selectedUser>): Generator<any, void, any> {
  // You can add side effects here:
  // - Log analytics
  // - Fetch user details from an API
  // - Validate user ID
  // - etc.
  console.log("User selected:", action.payload);
}

// Worker Saga - Handle when user is cleared
function* handleUserClear(): Generator<any, void, any> {
  console.log("User selection cleared");
}

// Watcher Saga - Listen for user selection/clear actions
export function* userDetailsSaga(): Generator<any, void, any> {
  yield takeEvery(selectedUser.type, handleUserSelection);
  yield takeEvery(clearSelectedUser.type, handleUserClear);
}
