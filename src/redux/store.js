import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contactsSlice } from "./contactsSlice";
import { filterSlice } from "./filterSlice";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'contacts',
    storage,
    blacklist:['filter'],
};

const reducers = combineReducers({
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
})

const persistedContactsReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: {
        contacts: persistedContactsReducer,
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