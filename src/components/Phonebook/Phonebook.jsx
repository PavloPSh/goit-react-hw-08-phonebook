import { Component } from "react";
import { ContactForm } from "components/ContactForm/ContactsForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";

import { nanoid } from "nanoid";



export class PhoneBook extends Component {

    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
    }


    addContact = (contact) => {
        if (this.isAlreadyAdd(contact)) {
            return alert(`${contact.name} is already add`)
        }
        const newContact = {
            id: nanoid(),
            ...contact
        }
        this.setState((prev) => {
            return {
                contacts: [...prev.contacts, newContact]
            }
        })
    }

    removeContact = (id) => {
        this.setState((prev) => {
            const newContacts = prev.contacts.filter((contact) => contact.id !== id);
            return {
                contacts: newContacts,
            }
        })

    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        })
    }

    getFilteredContacts() {
        const { contacts, filter } = this.state;
        if (!filter) {
            return contacts;
        }

        const normalizedFilter = filter.toLocaleLowerCase();
        const filteredContacts = contacts.filter(({ name }) => {
            const normalizedName = name.toLocaleLowerCase();
            return (
                normalizedName.includes(normalizedFilter)
            )
        })
        return filteredContacts;
    }

    isAlreadyAdd ({name,number}) {
        const { contacts } = this.state;
        const result = contacts.find((contact) => contact.name === name && contact.number === number);
        return result;
    }


    render() {
        
        const { handleChange, addContact, removeContact } = this;
        const { filter } = this.state;
        const contacts = this.getFilteredContacts();

        return (
            <div>
                <h2>Phonebook</h2>

                <ContactForm onAddContact={ addContact } />

                <h2>Contacts</h2>

                <Filter value={filter} onChange={ handleChange } />

                <ContactList contacts={contacts} removeContact={ removeContact } />
            </div>
        )
    }
}