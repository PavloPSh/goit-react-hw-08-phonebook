import { Component } from "react";
import { ContactForm } from "components/ContactForm/ContactsForm";



export class PhoneBook extends Component {

    state = {
        contacts: [],
    }


    addContact = (contact) => {
        this.setState((prev) => {
            return {
                contacts: [...prev.contacts, contact]
            }
        })
    }


    render() {
        
        

        return (
            <div>
                <h2>Phonebook</h2>

                <ContactForm onSubmit={ this.addContact } />

                

                <h2>Contacts</h2>
                 
                

            </div>
        )
    }
}