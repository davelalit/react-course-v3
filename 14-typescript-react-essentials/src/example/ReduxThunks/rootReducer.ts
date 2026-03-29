import { combineReducers } from "redux";
import userDetailReducer from "./features/userDetails/userDetailSlice";
import userListReducer from "./features/usersList/userListSlice";


// interface RootState {
//   userData: ReturnType<typeof userListReducer>;
//   userDetail: ReturnType<typeof userDetailReducer>;
// }

const rootReducer = combineReducers({
  userData: userListReducer,
  userDetail: userDetailReducer,
});

// type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;