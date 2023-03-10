import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userIn: false,
    userData: {
        username: '',
        email: '',
        address: '',
    },
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // Add user into the 
        addUser: (state, { payload }) => {
            // Add user;
            state.userData = payload;
            // User singed in;
            state.userIn = true;
        },
        // Remove user from the list
        removeUser: (state) => {
            // Clear user fields;
            state.userData = {
                username: '',
                email: '',
                address: '',
            };

            // User singed out;
            state.userIn = false;
        },
    }
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;