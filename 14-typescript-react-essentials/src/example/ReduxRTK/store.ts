import { configureStore } from "@reduxjs/toolkit";
import userDetailsReducer from "./features/userDetails/userDetailsSlice";
import userListReducer from "./features/usersList/userListSlice";


const store = configureStore({
  reducer: {
    userList: userListReducer,
    userDetails: userDetailsReducer,
  },
});

export default store;