import { configureStore } from "@reduxjs/toolkit";
import userDetailsReducer from "./features/userDetails/userDetailsSlice";
import userListReducer from "./features/usersList/userListSlice";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    userList: userListReducer,
    userDetails: userDetailsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware),
});

// Register and run the root saga
console.log("Starting sagaMiddleware.run(rootSaga)");
sagaMiddleware.run(rootSaga);
console.log("sagaMiddleware.run completed");

export default store;