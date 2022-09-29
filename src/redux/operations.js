// Код для операцій на Redux Toolkit + createAsyncThunk👇

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://63330ab0a54a0e83d25eabab.mockapi.io';

export const fetchContacts = createAsyncThunk("contacts/fetchContacts",
    async (_, thunkApi) => {
    try {
        const contacts = await axios.get('/contacts');
        return contacts.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    };
})

export const addNewContact = createAsyncThunk("contacts/addNewContact",
    async ({ name, number, id }, thunkApi) => {
    try {
        const contacts = await axios.post('/contacts', { name, number, id });
        return contacts.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    };
})

export const deleteContact = createAsyncThunk("contacts/deleteContact",
    async (id, thunkApi) => {
    try {
        const contacts = await axios.delete(`/contacts/${id}`);
        return contacts.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    };
})

// Код для операцій на Redux Toolkit + createAction👇

// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
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

// axios.defaults.baseURL = 'https://63330ab0a54a0e83d25eabab.mockapi.io';

// export const fetchContacts = () => async dispatch => {
//     dispatch(fetchContactsRequest());
//     try {
//         const contacts = await axios.get('/contacts');
//         dispatch(fetchContactsSuccess(contacts.data));
//     } catch (error) {
//         fetchContactsError(error);
//     };
// };

// export const addNewContact = ({ name, number, id }) => async dispatch => {
//     dispatch(addNewContactRequest());
//     try {
//         const contacts = await axios.post('/contacts', { name, number, id });
//         dispatch(addNewContactSuccess(contacts.data));
//     } catch (error) {
//         addNewContactError(error);
//     };
// };

// export const deleteContact = id => async dispatch => {
//     dispatch(deleteContactRequest());
//     try {
//         const contacts = await axios.delete(`/contacts/${id}`);
//         dispatch(deleteContactSuccess(contacts.data));
//     } catch (error) {
//         deleteContactError(error);
//     };
// };