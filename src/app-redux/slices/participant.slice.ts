import { createSlice } from "@reduxjs/toolkit";

export interface IParticipant {
    id?: number | null | undefined,
    username: string;
    email: string;
    address: string;
};

interface IState {
    participantList: boolean,
    page: number,
    noPages: boolean,
    allParticipants: IParticipant[],
};

const initialState: IState = {
    participantList: false,
    page: 0,
    noPages: false,
    allParticipants: [],
};

const participantSlice = createSlice({
    name: 'participant',
    initialState,
    reducers: {
        openList: (state) => {
            state.participantList = true;
        },
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

export const { addParticipantList, nextPageHandler, openList } = participantSlice.actions;

export default participantSlice.reducer;