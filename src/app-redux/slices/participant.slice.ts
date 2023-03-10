import { createSlice } from "@reduxjs/toolkit";

export interface IParticipant {
    id?: number | null | undefined,
    username: string;
    email: string;
    address: string;
};

interface IState {
    userIn: boolean,
    participantList: boolean,
    page: number,
    noPages: boolean,
    allParticipants: IParticipant[],
};

const initialState: IState = {
    // registration response imitation - true (completed) / false (no-completed) based on 'current(Object)' complete fields;
    userIn: false,
    participantList: false,
    page: 0,
    noPages: false,
    allParticipants: [],
};

const participantSlice = createSlice({
    name: 'participant',
    initialState,
    reducers: {
        // Add name and password to the current user;
        addUser: (state, { payload }) => {
            // Add user into list;
            state.allParticipants.unshift(payload);
            // User singed in;
            state.userIn = true;
            // Open List;
            state.participantList = true;
        },
        // Remove user from the list
        removeUser: (state) => {
            // We know that our current user is in the 1st position in the list, so we can just do Array.shift() and remove 1st item;
            state.allParticipants.shift();

            // User singed out;
            state.userIn = false;
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
    }
});

export const { addUser, addParticipantList, nextPageHandler, removeUser } = participantSlice.actions;

export default participantSlice.reducer;