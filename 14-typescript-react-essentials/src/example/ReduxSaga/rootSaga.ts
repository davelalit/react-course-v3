import { fork } from "redux-saga/effects";
import { userListSaga } from "./features/usersList/userListSaga";
import { userDetailsSaga } from "./features/userDetails/userDetailsSaga";

export function* rootSaga(): Generator<any, void, any> {
  console.log("ROOT SAGA STARTED - Forking child sagas");
  yield fork(userListSaga);
  yield fork(userDetailsSaga);
  console.log("All sagas forked");
}
