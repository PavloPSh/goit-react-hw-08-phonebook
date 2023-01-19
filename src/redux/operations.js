import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL= 'https://63c59c50f3a73b34785a5af9.mockapi.io'

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/contacts');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    });

export const addContacts = createAsyncThunk(
    'contacts/addContact',
    async ({ name, number }, thunkAPI) => {
        try {
            const response = await axios.post('/contacts', {name, number});
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    });

export const deleteContacts = createAsyncThunk(
    'contacts/deleteContact',
    async (id, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${id}` );
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    });