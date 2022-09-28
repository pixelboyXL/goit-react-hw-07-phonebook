import { createAction } from "@reduxjs/toolkit";

export const fetchContactsRequest = createAction("contact/fetchContactsRequest");
export const fetchContactsSuccess = createAction("contact/fetchContactsSuccess");
export const fetchContactsError = createAction("contact/fetchContactsError");

export const addNewContactRequest = createAction("contact/addNewContactRequest");
export const addNewContactSuccess = createAction("contact/addNewContactSuccess");
export const addNewContactError = createAction("contact/addNewContactError");

export const deleteContactRequest = createAction("contact/deleteContactRequest");
export const deleteContactSuccess = createAction("contact/deleteContactSuccess");
export const deleteContactError = createAction("contact/deleteContactError");

// Код для екшенів на Redux Toolkit + createReducer + createAction👇

// import { createAction } from "@reduxjs/toolkit";

// export const addNewContact = createAction("contact/addNewContact");
// export const deleteContact = createAction("contact/deleteContact");
// export const setFilter = createAction("filter/setFilter");



//                                  *************************                                       //



// Код для екшенів на чистому Redux👇

// export const addNewContact = newContact => {
//     return {
//         type: "contact/addNewContact",
//         payload: newContact,
//     };
// };

// export const deleteContact = contactId => {
//     return {
//         type: "contact/deleteContact",
//         payload: contactId,
//     };
// };

// export const setFilter = value => {
//     return {
//         type: "filter/setFilter",
//         payload: value,
//     };
// };