import { createAsyncThunk } from "@reduxjs/toolkit";
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

export const fetchUsers = createAsyncThunk(
  "userList/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
      if (!res.ok) {
        return rejectWithValue({ status: res.status, message: "Failed to fetch users" });
      }
      return await res.json();
    } catch (error) {
      return rejectWithValue({ status: 500, message: "Failed to fetch users" });
    }
  }
);

const userListSlice = createSlice({
  name: "userList",
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<User>) {
      state.users.push(action.payload);
    },
    deleteUser(state, action: PayloadAction<number>) {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Unknown error';
    });
  },
});

const userListReducer = userListSlice.reducer;

export default userListReducer;
export const { addUser, deleteUser } = userListSlice.actions;