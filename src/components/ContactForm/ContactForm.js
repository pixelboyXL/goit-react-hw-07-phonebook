import React, { useState } from "react";
import { ContactFormStyle, LabelForm, InputForm, ButtonForAdd } from "components/ContactForm/ContactForm.styled";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "redux/selector";
import { addNewContact } from "redux/operations";
import { nanoid } from "@reduxjs/toolkit";

export const ContactForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    
    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();
    
    const onSubmitForm = (event) => {
        event.preventDefault();
        const checkContact = contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());
        if (checkContact === true) {
            reset();
            return toast.warn(`${name} is already in contacts`, { theme: "colored", });
        };
        const newContact = {
            name,
            number,
            id: nanoid(),
        };
        dispatch(addNewContact(newContact));
        reset();
    };
    const reset = () => {
        setName('');
        setNumber('');
    };
    
    return (
        <ContactFormStyle onSubmit={onSubmitForm}>
            <LabelForm>Name
                <InputForm
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                />
            </LabelForm>
            <LabelForm>Number
                <InputForm
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={number}
                onChange={(event) => setNumber(event.target.value)}
                />
            </LabelForm>
            <ButtonForAdd type="submit">Add contact</ButtonForAdd>
        </ContactFormStyle>
    );
};

// ContactForm.propTypes = {
//     addNewContact: PropTypes.func.isRequired,
// };