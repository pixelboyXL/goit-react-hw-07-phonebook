import { ContactItemEntrails } from 'components/ContactList/ContactListItem';
import { ContactListStyle, ContactItem } from "components/ContactList/ContactList.styled";
import { selectFilteredContacts } from 'redux/selector';
import { useSelector } from 'react-redux';

export const ContactList = () => {
    const filteredContacts = useSelector(selectFilteredContacts);

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