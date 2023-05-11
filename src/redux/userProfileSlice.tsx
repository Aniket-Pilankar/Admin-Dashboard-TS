import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import axios from 'axios';

import { AccessLevel } from '../components/form/types';
import { ITeam } from '../types';

interface UserProfile {
  id: number | string;
  name: string;
  email: string;
  age: number;
  contact: string;
  accessLevel: AccessLevel | '';
}

interface UserProfileState {
  loading: boolean;
  user: ITeam[];
  error: string;
}

const initialState = {
  loading: false,
  user: [],
  error: '',
} as UserProfileState;

export const createUser = createAsyncThunk('users/create', async (user: UserProfile, thunkAPI) => {
  try {
    const response = await axios.post(`http://localhost:3004/user`, {
      ...user,
      id: 12,
    });
    return response.data;
  } catch (err) {
    console.log('err:', err);
  }
});

export const fetchUser = createAsyncThunk('users/fetch', async () => {
  const response = await axios.get<UserProfile[]>('http://localhost:3004/user');
  return response.data;
});

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createUser.fulfilled, (state, action: PayloadAction<ITeam>) => {
      state.loading = false;
      state.user.push(action.payload);
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export default userProfileSlice.reducer;
