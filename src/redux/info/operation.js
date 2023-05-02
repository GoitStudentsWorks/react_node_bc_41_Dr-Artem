import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://meddoc-backend.herokuapp.com/api/';

export const getUserInfo = createAsyncThunk('/getUserInfo', async (_, { rejectWithValue }) => {
    try {
        const { data } = await axios.get('/info');
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const getUserInfoById = createAsyncThunk('/getUserInfoById', async (id, { rejectWithValue }) => {
    try {
        const { data } = await axios.get(`/info/${id}`);
        return data;
    } catch (error) {
        return rejectWithValue(error.massage);
    }
});
