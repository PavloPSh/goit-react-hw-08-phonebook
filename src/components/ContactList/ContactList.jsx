import { ContactItem } from "components/ContactItem/ContactItem"

export const ContactList = ({ contacts, removeContact }) => {
    return (
        <ul>
            {contacts.map(contact => 
                <ContactItem key={contact.id} contacts={contact} onClick={removeContact} />)}
        </ul>
    )
}