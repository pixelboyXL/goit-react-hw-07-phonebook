// Код для редюсера на Redux Toolkit + createSlice👇

import { createSlice } from "@reduxjs/toolkit";
import {
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
    addNewContactRequest,
    addNewContactSuccess,
    addNewContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
} from 'redux/actions';

const forRequest = (state) => {
    state.isLoading = true;
};

const forSuccess = (state, action) => {
    state.isLoading = false;
    state.error = null;
};

const forError = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const phonebookSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
        filter: '',
    },
    reducers: {
        addNewContact(state, action) { 
            state.items.splice(0, 0, action.payload);
        },
        deleteContact(state, action) {
            state.items = state.items.filter(contact => contact.id !== action.payload);
        },
        setFilter(state, action) {
            state.filter = action.payload;
        },
    },
    extraReducers: {
        [fetchContactsRequest](state) {
            forRequest(state);
        },
        [fetchContactsSuccess](state, action) {
            state.items = action.payload;
            forSuccess(state, action);
        },
        [fetchContactsError](state, action) {
            forError(state, action);
        },
        [addNewContactRequest](state) {
            forRequest(state);
        },
        [addNewContactSuccess](state, action) {
            state.items.push(action.payload);
            forSuccess(state, action);
        },
        [addNewContactError](state, action) {
            forError(state, action);
        },
        [deleteContactRequest](state) {
            forRequest(state);
        },
        [deleteContactSuccess](state, action) {
            const idx = state.items.findIndex(item => item.id === action.payload);
            state.items.splice(idx, 1);
            forSuccess(state, action);
        },
        [deleteContactError](state, action) {
            forError(state, action);
        },
    },
});

export const { addNewContact, deleteContact, setFilter } = phonebookSlice.actions;
export const phonebookReducer = phonebookSlice.reducer;

// Код для редюсера на Redux Toolkit + createReducer + createAction👇

// import { addNewContact, deleteContact, setFilter } from "./actions";
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const initialState = {
//     contacts: {
//         items: [
//             { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//             { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//             { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//             { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//         ],
//         filter: '',
//     }
// };

// const phonebookReducer = createReducer(initialState, {
//     [addNewContact](state, action) {
//         state.contacts.items.splice(0, 0, action.payload);
//     },
//     [deleteContact](state, action) {
//         state.contacts.items = state.contacts.items.filter(contact => contact.id !== action.payload);
//     },
//     [setFilter](state, action) {
//         state.contacts.filter = action.payload;
//     },
// });

// const persistConfig = {
//     key: 'contacts',
//     storage,
// };

// export const persistedReducer = persistReducer(persistConfig, phonebookReducer);



//                                  *************************                                       //



// Код для редюсера на чистому Redux👇

// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const initialState = {
//     contacts: {
//         items: [
//             { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//             { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//             { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//             { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//         ],
//         filter: '',
//     },
// };

// const phonebookReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "contact/addNewContact":
//             return {
//                 contacts: {
//                     ...state.contacts,
//                     items: [action.payload, ...state.contacts.items],
//                 }
//             };
//         case "contact/deleteContact":
//             return {
//                 contacts: {
//                     ...state.contacts,
//                     items: state.contacts.items.filter(contact => contact.id !== action.payload)
//                 }
//             };
//         case "filter/setFilter":
//             return {
//                 contacts: {
//                     ...state.contacts,
//                     filter: action.payload,
//                 }
//             };
//         default:
//             return state;
//     };
// };

// const persistConfig = {
//     key: 'contacts',
//     storage,
// };

// export const persistedReducer = persistReducer(persistConfig, phonebookReducer);