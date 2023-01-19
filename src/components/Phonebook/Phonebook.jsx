
import { ContactForm } from "components/ContactForm/ContactsForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";


import { Box } from "Box";

import { getIsLoading } from "redux/contactsSlice";
import { getError } from "redux/contactsSlice";
import { useSelector } from "react-redux";


export const PhoneBook = () => {

    const error = useSelector(getError);
    const isLoading = useSelector(getIsLoading)

    return (
        <div>
            <Box as="h2" p="16px" display="flex" justifyContent='center'>Phonebook</Box>

            <ContactForm />

            {isLoading && !error && <p>Loading ...</p>}
            
            <Box as="h2" p="16px" display="flex" justifyContent='center'>Contacts</Box>

            <Filter />

            <ContactList />
        </div>
    );
};
