
import { ContactForm } from "components/ContactForm/ContactsForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";


import { Box } from "Box";


export const PhoneBook = () => {

    return (
        <div>
            <Box as="h2" p="16px" display="flex" justifyContent='center'>Phonebook</Box>

            <ContactForm />

            <Box as="h2" p="16px" display="flex" justifyContent='center'>Contacts</Box>

            <Filter />

            <ContactList />
        </div>
    );
};
