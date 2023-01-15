import { ContactItem } from "components/ContactItem/ContactItem";

import { useSelector } from 'react-redux';

export const ContactList = () => {

    const contacts = useSelector(state => state.contacts.contacts);
    const filter = useSelector(state => state.filter);
    // console.log(contacts)
    const getFilteredContacts = () => {

        if (!filter) {
            return contacts;
        };

        return contacts.filter(({name}) => name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
    };

    const filteredContacts = getFilteredContacts();

    return (
        <ul>
            {filteredContacts.map(contact => 
                <ContactItem key={contact.id} contacts={contact}  />)}
        </ul>
    )
}



