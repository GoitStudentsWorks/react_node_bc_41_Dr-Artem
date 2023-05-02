import { createSlice } from '@reduxjs/toolkit';
import { getUserInfo, getUserInfoById } from './operation';

const initialState = {
    currentUserInfo: null,
    userInfoById: null,
};

const infoSlice = createSlice({
    name: 'info',
    initialState,
    extraReducers: {
        [getUserInfo.fulfilled](state, action) {
            console.log(action.payload);
            state.currentUserInfo = action.payload;
        },
        [getUserInfo.rejected](state, action) {
            console.log(action.payload);
        },
        [getUserInfoById.fulfilled](state, action) {
            state.userInfoById = action.payload;
        },
    },
});

export const infoReducer = infoSlice.reducer;
