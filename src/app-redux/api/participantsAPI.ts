import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface IParticipant {
    id: number,
    username: string,
    email: string,
    address: string,
};

interface IParticipants {
    meta: {
        currentPage: number,
        perPage: number,
        totalPages: number
    },
    items: IParticipant[]
};

export const participantsApi = createApi({
    reducerPath: 'participantsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://new-backend.unistory.app/api/' }),
    endpoints: (builder) => ({
        getParticipants: builder.query<IParticipants, number | void>({
            query: (page) => `/data?page=${page}&perPage=20`
        }),
    }),
});

export const { useGetParticipantsQuery } = participantsApi;