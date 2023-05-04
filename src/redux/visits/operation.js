import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://meddoc-backend.herokuapp.com/api/';
// axios.defaults.baseURL = 'http://localhost:3000/api';

export const getAllVisits = createAsyncThunk('/getAllVisits', async (_, { rejectWithValue }) => {
    try {
        const { data } = await axios.get('/visits');
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const addVisit = createAsyncThunk('/addVisit', async (information, { rejectWithValue }) => {
    try {
        const { data } = await axios.post('/visits', information);
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const updateVisit = createAsyncThunk('/updateVisit', async ({ id, ...updatedVisit }, { rejectWithValue }) => {
    try {
        const { data } = await axios.patch(`/visits/${id}`, updatedVisit);
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const uploadPDF = createAsyncThunk('/uploadPDF', async (id, information, { rejectWithValue }) => {
    try {
        const { data } = await axios.post(`/visits/${id}/upload-pdf`);
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});
export const deletePDF = createAsyncThunk('/deletePDF', async (id, information, { rejectWithValue }) => {
    try {
        const { data } = await axios.delete(`/visits/${id}/upload-pdf`);
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});
