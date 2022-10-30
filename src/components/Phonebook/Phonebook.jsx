import { useState, useEffect } from "react";


import { ContactForm } from "components/ContactForm/ContactsForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";

import { nanoid } from "nanoid";

import { Box } from "Box";


export const PhoneBook = () => {

    const [contacts, setContacts] = useState(() => {
        return JSON.parse(localStorage.getItem('contacts')) ?? []
    });
    const [filter, setFilter] = useState('');

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);
    
    
    const addContact = (contact) => {
        if (isAlreadyAdd(contact.name)) {
            return alert(`${contact.name} is already add`)
        };
        
        setContacts((prev) => {
            const newContact = {
                id: nanoid(),
                ...contact
            };
            return [...prev, newContact]
        });
    };

    const handleChange = e => {
        const { value } = e.target;
        setFilter(value);
    };

    const removeContact = (id) => {
        setContacts((prev) => {
            const newContacts = prev.filter((contact) => contact.id !== id);
            return newContacts;
        });
    };

    const isAlreadyAdd = (name) => {
        const result = contacts.find((contact) => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase());
        return result;
    };

    const getFilteredContacts = () => {

        if (!filter) {
            return contacts;
        };

        return contacts.filter(({ name }) => name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
    };


    return (
        <div>
            <Box as="h2" p="16px" display="flex" justifyContent='center'>Phonebook</Box>

            <ContactForm onAddContact={addContact} />

            <Box as="h2" p="16px" display="flex" justifyContent='center'>Contacts</Box>

            <Filter value={filter} onChange={handleChange} />

            <ContactList contacts={getFilteredContacts()} removeContact={removeContact} />
        </div>
    );
};
