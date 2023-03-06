import { createSlice } from "@reduxjs/toolkit";

interface IParticipant {
    id?: number,
    username: string;
    email: string;
    address: string;
};

interface IState {
    regRespImitation: boolean,
    current: {
        username: string,
        email: string,
        address: string,
    },
    page: number,
    allParticipants: IParticipant[],
};

const initialState: IState = {
    // registration response imitation - true (completed) / false (no-completed) based on 'current(Object)' complete fields;
    regRespImitation: false,
    current: {
        username: '',
        email: '',
        address: '',
    },
    page: 0,
    allParticipants: [],
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // Add address to the current user;
        addCurrentAddress: (state, { payload }) => {
            state.current.address = payload;
        },
        // Add name and password to the current user;
        addCurrentNameAndEmail: (state, { payload }) => {
            state.current.username = payload.username;
            state.current.email = payload.email;
        },
        // Completed user's fields;
        completedUser: (state) => {
            // Check if all fields passed
            if (!(state.current.address.length > 0)) return alert('pls connect your metamask wallet - Top-Right corner button');
            if (!(state.current.email.length > 0)) return;
            if (!(state.current.username.length > 0)) return;
            // Yes, It is
            state.regRespImitation = true;
        },
        addParticipantList: (state, { payload }) => {
            const currentUser = state.current;
            const lists = payload.items;

            // if current page and to add page not match - stop;
            if (state.page !== payload.meta.currentPage) return;

            // If our user not in array - we add it as 1st object 
            // If exist just add new items
            if (state.allParticipants[0]?.address !== currentUser.address) {
                state.allParticipants = [currentUser, ...state.allParticipants, ...lists];
            } else {
                state.allParticipants = [...state.allParticipants, ...lists];
            }
        },
        nextPageHandler: (state) => {
            state.page = state.page + 1;
        },
    }
});

export const { addCurrentAddress, addCurrentNameAndEmail, completedUser, addParticipantList, nextPageHandler } = userSlice.actions;

export default userSlice.reducer;