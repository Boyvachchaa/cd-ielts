import { createSlice } from '@reduxjs/toolkit';
import { getItem, removeItem, setItem, } from '../components/helpers/persistance-storage';

const token = localStorage.getItem('token');
const user = {
  username: getItem('username'),
  is_student: getItem('is_student') === 'true',
  is_staff: getItem('is_staff') === 'true',
  id: getItem('user_id'),
};

const initialState = {
  user: token ? user : null,
  access_token: token || null,
  isLoggedIn: !!token,
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

      setItem('token', token);
      setItem('username', user.username);
      console.log(localStorage.getItem('username', user.username))
      setItem('is_student', user.is_student);
      setItem('is_staff', user.is_staff);
      setItem('user_id', user.id);
    },
    loginUserFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      state.access_token = null;
      removeItem('token');
      removeItem('username');
      removeItem('is_student');
      removeItem('is_staff');
      removeItem('user_id');
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
