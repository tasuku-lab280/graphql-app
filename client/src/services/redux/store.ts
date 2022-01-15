// Import
import { configureStore } from '@reduxjs/toolkit';
import { useSelector as rawUseSelector, TypedUseSelectorHook } from 'react-redux';

// Custom Import
import { currentUserSlice } from './slice/currentUser';

// Type
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Const
export const store = configureStore({
  reducer: {
    currentUser: currentUserSlice.reducer,
  },
});

export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
