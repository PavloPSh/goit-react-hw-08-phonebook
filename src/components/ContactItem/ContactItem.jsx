import PropTypes from "prop-types";

import { useDispatch } from 'react-redux';
import { deleteContacts } from "redux/operations";

import { Item } from './ContactItem.styled';

   
export const ContactItem = ({ contacts }) => {
    
    const { id, name, number } = contacts;
    const dispatch = useDispatch();
    
    const handleDelete = () => dispatch(deleteContacts(id));

    return (
        <Item key={id}>
            <p>{name}: {number}</p>
            <button type="button" onClick={handleDelete}>Delete</button>
        </Item>
    );
};


ContactItem.propTypes = {
    contacts: PropTypes.objectOf(PropTypes.string.isRequired),
};