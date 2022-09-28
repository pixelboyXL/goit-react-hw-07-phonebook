import PropTypes from 'prop-types';
import { ButtonForDelete } from "components/ContactList/ContactList.styled";
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const ContactItemEntrails = ({ id, name, number }) => {
    const dispatch = useDispatch();

    return (
        <>
            <p>{name}: {number}</p>
            <ButtonForDelete type="button" onClick={() => dispatch(deleteContact(id))}>Delete</ButtonForDelete>
        </>
    );
};

ContactItemEntrails.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};