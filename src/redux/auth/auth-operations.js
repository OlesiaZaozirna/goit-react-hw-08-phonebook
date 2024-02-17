import { createAsyncThunk } from '@reduxjs/toolkit';

import { signupRequest, loginRequest } from '../../components/API/authAPI';

export const signup = createAsyncThunk(
  'auth/signup',
  async (body, { rejectWithValue }) => {
    try {
      const data = await signupRequest(body);
      console.log('signup data:', data);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue }) => {
    try {
      const data = await loginRequest(body);
      console.log('signup data:', data);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
