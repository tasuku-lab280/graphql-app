// Import
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Type
export type UserType = {
  id: number;
  email: string | null;
  nickname: string | null;
};

// InitialState
const initialState = {
  id: parseInt(''),
  nickname: '',
  email: '',
};

// Slice
export const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    setCurrentUser(state, action: PayloadAction<{ user: UserType }>) {
      const { id, nickname, email } = action.payload.user;
      state.id = id;
      state.nickname = nickname ?? '';
      state.email = email ?? '';
    },
    resetCurrentUser(state) {
      state = initialState;
    },
  },
});

export const { setCurrentUser, resetCurrentUser } = currentUserSlice.actions;

export default currentUserSlice.reducer;
