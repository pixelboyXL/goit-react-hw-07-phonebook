// Код для стора на Redux Toolkit + createSlice👇

import { configureStore } from "@reduxjs/toolkit";
import { phonebookReducer } from "./reducer";

export const store = configureStore({
    reducer: {
        contacts: phonebookReducer,
    },
});

// Код для стора на Redux Toolkit + createReducer + createAction👇

// import { configureStore } from "@reduxjs/toolkit";
// import {
//     persistStore,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from 'redux-persist';
// import { persistedReducer } from "./reducer";

// export const store = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//             serializableCheck: {
//             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//         },
//     }),
// });

// export const persistor = persistStore(store);



//                                  *************************                                       //



// Код для стора на чистому Redux👇

// import { createStore } from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";
// import { persistStore } from 'redux-persist';
// import { persistedReducer } from "./reducer";

// const enhancer = devToolsEnhancer();

// export const store = createStore(persistedReducer, enhancer);

// export const persistor = persistStore(store);