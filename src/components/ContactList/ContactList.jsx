import PropTypes from 'prop-types';
import { ContactItem } from "components/ContactItem/ContactItem"

export const ContactList = ({ contacts, removeContact }) => {
    return (
        <ul>
            {contacts.map(contact => 
                <ContactItem key={contact.id} contacts={contact} onClick={removeContact} />)}
        </ul>
    )
}


ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired)),
    onClick: PropTypes.func,
}
