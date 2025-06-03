import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUsers } from '../api';


export const fetchUsersAsync = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    const response = await fetchUsers();
    return response;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    removeUser: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsersAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsersAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;