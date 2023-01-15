import PropTypes from "prop-types";

import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';

import { Item } from './ContactItem.styled';

   
export const ContactItem = ({ contacts }) => {

    const { id, name, number } = contacts;
    const dispatch = useDispatch();

    return (
        <Item key={id}>
            <p>{name}: {number}</p>
            <button type="button" onClick={() => dispatch(removeContact(id))}>Delete</button>
        </Item>
    );
};


ContactItem.propTypes = {
    contacts: PropTypes.objectOf(PropTypes.string.isRequired),
};