import { ContactItemEntrails } from 'components/ContactList/ContactListItem';
import { ContactListStyle, ContactItem } from "components/ContactList/ContactList.styled";
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selector';

export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter).toLowerCase();

    const doFiltering = () => contacts.filter(contact => contact.name.toLowerCase().includes(filter));
    const filteredContacts = doFiltering();

    return (
        <ContactListStyle>
            {filteredContacts.map(({id, name, number}) => {
                return (
                    <ContactItem key={id}>
                        <ContactItemEntrails id={id} name={name} number={number} />
                    </ContactItem>
                );
            })}
        </ContactListStyle>
    );
};