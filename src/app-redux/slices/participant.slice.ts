import { createSlice } from "@reduxjs/toolkit";

export interface IParticipant {
    id?: number | null,
    username: string;
    email: string;
    address: string;
};

interface IState {
    userIn: boolean,
    participantList: boolean,
    current: {
        username: string,
        email: string,
        address: string,
    },
    page: number,
    noPages: boolean,
    allParticipants: IParticipant[],
};

const initialState: IState = {
    // registration response imitation - true (completed) / false (no-completed) based on 'current(Object)' complete fields;
    userIn: false,
    participantList: false,
    current: {
        username: '',
        email: '',
        address: '',
    },
    page: 0,
    noPages: false,
    allParticipants: [],
};

const participantSlice = createSlice({
    name: 'participant',
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

            // Check if all fields passed
            if (!(state.current.address.length > 0)) return alert('pls connect your metamask wallet - Top-Right corner button');
            if (!(state.current.email.length > 0)) return;
            if (!(state.current.username.length > 0)) return;

            // Add user into list;
            const currentUser = state.current;
            state.allParticipants.unshift(currentUser);

            // User singed in;
            state.userIn = true;
            // Open List;
            state.participantList = true;
        },

        // ------------------------------------ //
        // Merge lists of items
        addParticipantList: (state, { payload }) => {
            // const currentUser = state.current;
            const lists = payload.items;

            // If more then total stop ;
            if (state.page > payload.meta.totalPage) {
                state.noPages = true;
                return;
            };

            // That check if new items are already in the list - 
            // On react-router link its re-add new items even if they already in so we need to check this;
            if (!state.allParticipants.find(element => element.id === lists[0]?.id)) {
                state.allParticipants = [...state.allParticipants, ...lists];
            };
        },
        // Change page state
        nextPageHandler: (state) => {
            state.page = state.page + 1;
        },
        // Remove user from the list
        removeUser: (state) => {
            // We know that our current user is in the 1st position in the list, so we can just do Array.shift() and remove 1st item;
            state.allParticipants.shift();

            // User singed out;
            state.userIn = false;
        },
    }
});

export const { addCurrentAddress, addCurrentNameAndEmail, addParticipantList, nextPageHandler, removeUser } = participantSlice.actions;

export default participantSlice.reducer;