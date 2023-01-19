import { ContactItem } from "components/ContactItem/ContactItem";
import { useEffect } from "react";

import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from "redux/contactsSlice";
import { fetchContacts } from "redux/operations";

export const ContactList = () => {

    const contacts = useSelector(getContacts);
    const filter = useSelector(state => state.filter);

    const dispatch = useDispatch();
   

    useEffect(() => {
        dispatch(fetchContacts())
    },[dispatch])

    const getFilteredContacts = () => {

        if (!filter) {
            return contacts;
        };

        return contacts.filter(({ name }) => name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
    };

    const filteredContacts = getFilteredContacts();
    
    return (
        <ul>
            {filteredContacts.map(contact => 
                <ContactItem key={contact.id} contacts={contact}  />)}
        </ul>
    )
}



