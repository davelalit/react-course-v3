import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: number;
  name: string;
  // Add other user properties as needed
}

interface UserListState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UserListState = {
  users: [],
  loading: false,
  error: null,
};

const userListSlice = createSlice({
  name: "userList",
  initialState,
  reducers: {
    fetchUsersRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchUsersSuccess(state, action: PayloadAction<User[]>) {
      state.loading = false;
      state.users = action.payload;
    },
    fetchUsersFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addUser(state, action: PayloadAction<User>) {
      state.users.push(action.payload);
    },
    deleteUser(state, action: PayloadAction<number>) {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

const userListReducer = userListSlice.reducer;

export default userListReducer;
export const { fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure, addUser, deleteUser } = userListSlice.actions;