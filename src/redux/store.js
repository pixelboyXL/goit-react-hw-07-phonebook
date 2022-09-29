// Код для стора на Redux Toolkit + createSlice👇

import { configureStore } from "@reduxjs/toolkit";
import { phonebookReducer } from "./reducer";

export const store = configureStore({
    reducer: {
        contacts: phonebookReducer,
    },
});