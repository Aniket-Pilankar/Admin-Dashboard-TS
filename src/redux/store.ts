import { configureStore } from '@reduxjs/toolkit';

import userReducer from './userProfileSlice';

const reducer = {
  user: userReducer,
};

const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
