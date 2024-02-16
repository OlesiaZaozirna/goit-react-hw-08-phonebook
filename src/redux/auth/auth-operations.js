import { createAsyncThunk } from '@reduxjs/toolkit';

import { signupRequest } from 'components/API/authAPI';

export const signup = createAsyncThunk(
  'auth/signup',
  async (body, { rejectWithValue }) => {
    try {
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
