import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:3000/api';

export const setAppointment = createAsyncThunk('setAppointment', async (credentials, { rejectWithValue }) => {
    try {
        const { data } = await axios.post('/appointment', credentials);
        return data;
    } catch (error) {
        return rejectWithValue(error.response.status);
    }
});

export const getCurrentUserAppointments = createAsyncThunk(
    'getCurrentUserAppointment',
    async (credentials, { rejectWithValue }) => {
        try {
            const { data } = await axios.get('/appointment', credentials);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.status);
        }
    }
);

export const getAppointmentById = createAsyncThunk('getAppointmentById', async (id, { rejectWithValue }) => {
    try {
        const { data } = await axios.get(`/appointment/${id}`);
        return data;
    } catch (error) {
        return rejectWithValue(error.response.status);
    }
});