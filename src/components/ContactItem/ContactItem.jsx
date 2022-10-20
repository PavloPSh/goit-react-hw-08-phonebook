import PropTypes from 'prop-types';
    
export const ContactItem = ({ contacts, onClick }) => {
    const { id, name, number } = contacts;
    return (
        <li key={id}>
            <p>{name}: {number}</p>
            <button type="button" onClick={() => onClick(id)}>Delete</button>
        </li>
    )
}


ContactItem.propTypes = {
    contacts: PropTypes.objectOf(PropTypes.string.isRequired),
    onClick: PropTypes.func.isRequired,
}