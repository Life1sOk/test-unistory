import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import extentionReducer from './slices/extention.slice';
import participantReducer from './slices/participant.slice';
import userReducer from './slices/user.slice';
import { participantsApi } from './api/participantsAPI';

const store = configureStore({
    reducer: {
        extention: extentionReducer,
        participant: participantReducer,
        user: userReducer,
        [participantsApi.reducerPath]: participantsApi.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({}).concat([participantsApi.middleware]),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

export default store