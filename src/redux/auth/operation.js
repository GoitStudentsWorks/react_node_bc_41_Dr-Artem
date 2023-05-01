import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Access ${token}`;
    },

    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

export const register = createAsyncThunk('/auth/register', async (credentials, { rejectWithValue }) => {
    try {
        const { data } = await axios.post('/auth/register', credentials);
        token.set(data.verificationToken);
        return data;
    } catch (error) {
        return rejectWithValue(error.response.status);
    }
});

export const login = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
    try {
        const { data } = await axios.post('/auth/login', credentials);
        token.set(data.verificationToken);
        return data;
    } catch (error) {
        return rejectWithValue(error.response.status);
    }
});

export const logout = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
    try {
        const { data } = await axios.get('/auth/logout');
        token.unset();
        return data;
    } catch (error) {
        return rejectWithValue(error.response.status);
    }
});
