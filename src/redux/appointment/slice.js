import { createSlice } from '@reduxjs/toolkit';
import { getCurrentUserAppointments, getAppointmentById } from './operation';

const initialState = {
    appointments: null,
    appointment: null,
};

const appointmentSlice = createSlice({
    name: 'appointment',
    initialState,
    extraReducers: {
        [getCurrentUserAppointments.fulfilled](state, action) {
            state.appointments = action.payload;
        },
        [getAppointmentById.fulfilled](state, action) {
            state.appointment = action.payload;
        },
    },
});

export const appointmentReducer = appointmentSlice.reducer;
