import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserDetailsState {
  selectedUserId: number | null;
}

const initialState: UserDetailsState = {
  selectedUserId: null,
};

const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    selectedUser(state, action: PayloadAction<number | null>) {
      state.selectedUserId = action.payload;
    },
    clearSelectedUser(state) {
      state.selectedUserId = null;
    },
  },
});

export const { selectedUser, clearSelectedUser } = userDetailsSlice.actions;
export default userDetailsSlice.reducer;