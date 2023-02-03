import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout, refreshUser } from "./authOperations";

import { toast } from "react-toastify";


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: { name: null, email: null },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
    },
    extraReducers: builder => 
        builder
            .addCase(register.pending, (state, action) => { })
            .addCase(register.fulfilled, (state, action) => { 
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
                toast.success('Successfully');
             })
            .addCase(register.rejected, (state, action) => {
                toast.error('Something went wrong');
             })
            .addCase(login.pending, (state, action) => { })
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
                toast.success('Login is successful');

             })
            .addCase(login.rejected, (state, action) => {
                toast.error('Something went wrong, check your Email or Pasword');
             })
            .addCase(logout.pending, (state, action) => { })
            .addCase(logout.fulfilled, state => {
                state.user = { name: null, email: null };
                state.token = null;
                state.isLoggedIn = false;
                toast.success('You are logout');

            })
            .addCase(logout.rejected, (state, action) => { })
            .addCase(refreshUser.pending, (state, action) => { })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
            })
            .addCase(refreshUser.rejected, (state, action) => { })
        
});

export const authReducer = authSlice.reducer;
