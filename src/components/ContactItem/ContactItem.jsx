import PropTypes from 'prop-types';
import { Item } from './ContactItem.styled';
    
export const ContactItem = ({ contacts, onClick }) => {
    const { id, name, number } = contacts;
    return (
        <Item key={id}>
            <p>{name}: {number}</p>
            <button type="button" onClick={() => onClick(id)}>Delete</button>
        </Item>
    )
}


ContactItem.propTypes = {
    contacts: PropTypes.objectOf(PropTypes.string.isRequired),
    onClick: PropTypes.func.isRequired,
}