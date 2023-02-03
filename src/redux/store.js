import { configureStore } from "@reduxjs/toolkit";
import { contactsSlice } from "./contactsSlice";
import { filterSlice } from "./filterSlice";
import { authReducer } from "./auth/slice";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ["token"],
};

// const redusers = combineReducers({
//     auth: authReducer,
//     contacts: contactsSlice.reducer,
//     filter: filterSlice.reducer,

// })


export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),   
        contacts: contactsSlice.reducer,
        filter: filterSlice.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

export const persistor = persistStore(store);


