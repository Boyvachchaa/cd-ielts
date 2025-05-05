import { createSlice } from '@reduxjs/toolkit';
import { setItem } from '../components/helpers/persistance-storage';

const initialState = {
  user: null,
  access_token: null,
  refresh_token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUserStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginUserSuccess: (state, action) => {
      const { token, user } = action.payload;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.user = user;
      state.access_token = token;
      state.error = null;

      // Persist some data in localStorage
      setItem('token', token);
      setItem('username', user.username);
      setItem('is_student', user.is_student);
      setItem('is_staff', user.is_staff);
      setItem('user_id', user.id);
      setItem('isLoggedIn', true);
    },
    loginUserFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      state.access_token = null;
      state.refresh_token = null;
      localStorage.clear();
    },
    registerUserStart: (state) => {
      state.isLoading = true;
    },
    registerUserSuccess: (state) => {
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    registerUserFailure: (state) => {
      state.isLoading = false;
      state.error = 'Registration failed';
    },
  },
});

export const {
  loginUserStart,
  loginUserSuccess,
  loginUserFailure,
  logoutUser,
  registerUserStart,
  registerUserSuccess,
  registerUserFailure,
} = authSlice.actions;

export default authSlice.reducer;
