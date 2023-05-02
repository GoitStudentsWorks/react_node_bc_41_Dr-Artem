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
        return rejectWithValue(error.message);
    }
});

export const getAllUsersForRole = createAsyncThunk('/getAllUsersForRole', async (role, { rejectWithValue }) => {
    try {
        const { data } = await axios.get(`/info/all/${role}`);
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const updateUserInfo = createAsyncThunk('/updateUserInfo', async (information, { rejectWithValue }) => {
    try {
        const { data } = await axios.patch('/info/update');
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const updateUserRating = createAsyncThunk('/updateUserRating', async (id, { rejectWithValue }) => {
    try {
        const { data } = await axios.patch(`/info/update/rating/${id}`);
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const addUserExperience = createAsyncThunk('/addUserExperience', async (information, { rejectWithValue }) => {
    try {
        const { data } = await axios.post('/info/experience');
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const updateUserExperience = createAsyncThunk(
    '/updateUserExperience',
    async (id, updatedExperience, { rejectWithValue }) => {
        try {
            const { data } = await axios.patch(`/info/experience/${id}`);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const deleteUserExperience = createAsyncThunk('/deleteUserExperience', async (id, { rejectWithValue }) => {
    try {
        const { data } = await axios.delete(`/info/experience/${id}`);
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});
