import { createSlice } from '@reduxjs/toolkit'
import { setItem } from '../components/helpers/persistance-storage';

const initialState = {
    user: null,
    access_token: null,
    refresh_token: null,
    loggedIn: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

        // Login
        loginUserStart: (state) => {
            state.isLoading = true
        },
        loginUserSuccess: (state, action) => {
            state.loggedIn = true;
            state.isLoading = false;
            state.user = action.payload;
            state.error = null;
            setItem("token", action.payload.token)
        },                    
        loginuserFailure: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },

        // Register
        registerUserStart: (state) => {
            state.isLoading = true
        },
        registerUserSuccess: (state) => {
            state.loggedIn = true
            state.isLoading = false
        },
        registerUserFailure: (state) => {
            state.isLoading = false
            state.error = 'error'
        },
    },
})

export const {loginUserStart, registerUserStart, loginUserSuccess, loginuserFailure, registerUserSuccess, registerUserFailure} = authSlice.actions
export default authSlice.reducer