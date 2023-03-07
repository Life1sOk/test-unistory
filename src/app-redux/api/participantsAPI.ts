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
    tagTypes: ['Participants'],
    baseQuery: fetchBaseQuery({ baseUrl: 'https://new-backend.unistory.app/api/' }),
    endpoints: (builder) => ({
        getParticipants: builder.query<IParticipants, number | void>({
            query: (page) => `/data?page=${page}&perPage=20`,
            providesTags: (result) =>
                result
                    ? [...result.items.map(({ id }) => ({ type: 'Participants' as const, id })), 'Participants']
                    : ['Participants'],
        }),
    }),
});

export const { useGetParticipantsQuery } = participantsApi;