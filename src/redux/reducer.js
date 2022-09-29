// Код для редюсера на Redux Toolkit + createSlice + createAsyncThunk + builder👇

import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts, addNewContact, deleteContact } from "./operations";

const handleFetchContacts = (state, action) => {
    state.items = action.payload;
};

const handleAddNewContact = (state, action) => {
    state.items.push(action.payload);
};

const handleDeleteContact = (state, action) => {
    const idx = state.items.findIndex(item => item.id === action.payload.id);
    state.items.splice(idx, 1);
};

const actions = [fetchContacts, addNewContact, deleteContact];

const phonebookSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
        filter: '',
    },
    reducers: {
        setFilter(state, action) {
            state.filter = action.payload;
        },
    },

    extraReducers: builder =>
        builder
            .addCase(fetchContacts.fulfilled, handleFetchContacts)
            .addCase(addNewContact.fulfilled, handleAddNewContact)
            .addCase(deleteContact.fulfilled, handleDeleteContact)
            .addMatcher(
                isAnyOf(...actions.map(action => action.fulfilled)),
                    state => {
                    state.isLoading = false;
                    state.error = null;
                }
            )
            .addMatcher(isAnyOf(...actions.map(action => action.pending)),
                state => {
                state.isLoading = true;
            })
            .addMatcher(
                isAnyOf(...actions.map(action => action.rejected)),
                    (state, action) => {
                    state.isLoading = false;
                    state.error = action.payload;
                }
            ),
    });

export const { setFilter } = phonebookSlice.actions;
export const phonebookReducer = phonebookSlice.reducer;

// Код для редюсера на Redux Toolkit + createSlice + createAsyncThunk👇

// import { createSlice } from "@reduxjs/toolkit";
// import { fetchContacts, addNewContact, deleteContact } from "./operations";

// const handleRequest = (state) => {
//     state.isLoading = true;
// };

// const handleSuccess = (state) => {
//     state.isLoading = false;
//     state.error = null;
// };

// const handleError = (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload;
// };

// const phonebookSlice = createSlice({
//     name: "contacts",
//     initialState: {
//         items: [],
//         isLoading: false,
//         error: null,
//         filter: '',
//     },
//     reducers: {
//         setFilter(state, action) {
//             state.filter = action.payload;
//         },
//     },

//     extraReducers: {
//         [fetchContacts.pending](state) {
//             handleRequest(state);
//         },
//         [fetchContacts.fulfilled](state, action) {
//             state.items = action.payload;
//             handleSuccess(state, action);
//         },
//         [fetchContacts.rejected](state, action) {
//             handleError(state, action);
//         },
//         [addNewContact.pending](state) {
//             handleRequest(state);
//         },
//         [addNewContact.fulfilled](state, action) {
//             state.items.push(action.payload);
//             handleSuccess(state, action);
//         },
//         [addNewContact.rejected](state, action) {
//             handleError(state, action);
//         },
//         [deleteContact.pending](state) {
//             handleRequest(state);
//         },
//         [deleteContact.fulfilled](state, action) {
//             const idx = state.items.findIndex(item => item.id === action.payload);
//             state.items.splice(idx, 1);
//             handleSuccess(state, action);
//         },
//         [deleteContact.rejected](state, action) {
//             handleError(state, action);
//         },
//     },
// });

// export const { setFilter } = phonebookSlice.actions;
// export const phonebookReducer = phonebookSlice.reducer;



//                                  *************************                                       //



// Код для редюсера на Redux Toolkit + createSlice + createAction + операції👇

// import { createSlice } from "@reduxjs/toolkit";
// import {
//     fetchContactsRequest,
//     fetchContactsSuccess,
//     fetchContactsError,
//     addNewContactRequest,
//     addNewContactSuccess,
//     addNewContactError,
//     deleteContactRequest,
//     deleteContactSuccess,
//     deleteContactError,
// } from 'redux/actions';
// import { fetchContacts } from "./operations";

// const handleRequest = (state) => {
//     state.isLoading = true;
// };

// const handleSuccess = (state) => {
//     state.isLoading = false;
//     state.error = null;
// };

// const handleError = (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload;
// };

// const phonebookSlice = createSlice({
//     name: "contacts",
//     initialState: {
//         items: [],
//         isLoading: false,
//         error: null,
//         filter: '',
//     },
//     reducers: {
//         setFilter(state, action) {
//             state.filter = action.payload;
//         },
//     },
//     extraReducers: {
//         [fetchContactsRequest](state) {
//             handleRequest(state);
//         },
//         [fetchContactsSuccess](state, action) {
//             state.items = action.payload;
//             handleSuccess(state, action);
//         },
//         [fetchContactsError](state, action) {
//             handleError(state, action);
//         },
//         [addNewContactRequest](state) {
//             handleRequest(state);
//         },
//         [addNewContactSuccess](state, action) {
//             state.items.push(action.payload);
//             handleSuccess(state, action);
//         },
//         [addNewContactError](state, action) {
//             handleError(state, action);
//         },
//         [deleteContactRequest](state) {
//             handleRequest(state);
//         },
//         [deleteContactSuccess](state, action) {
//             const idx = state.items.findIndex(item => item.id === action.payload);
//             state.items.splice(idx, 1);
//             handleSuccess(state, action);
//         },
//         [deleteContactError](state, action) {
//             handleError(state, action);
//         },
//     },
// });

// export const { addNewContact, deleteContact, setFilter } = phonebookSlice.actions;
// export const phonebookReducer = phonebookSlice.reducer;