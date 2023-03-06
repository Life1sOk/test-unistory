import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    extentionReady: true,
};

const extentionSlice = createSlice({
    name: 'extention',
    initialState,
    reducers: {
        extentionChangeHandler: (state, { payload }) => {
            state.extentionReady = payload
        },
    }
});

export const { extentionChangeHandler } = extentionSlice.actions;

export default extentionSlice.reducer;