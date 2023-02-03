import { Helmet } from "react-helmet";

import { ContactForm } from "components/ContactForm/ContactsForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import { Loader } from "components/loader/Loader";


import { Box } from "Box";
import { ContactFormWrapper,ContactsListWrapper } from "./Phonebook.styled";

import { getIsLoading } from "redux/contactsSlice";
import { getError } from "redux/contactsSlice";
import { useSelector } from "react-redux";


const PhoneBook = () => {
    
    const error = useSelector(getError);
    const isLoading = useSelector(getIsLoading);


    return (
        <Box >
            <Helmet>
                <title>Contacts</title>
            </Helmet>

            {isLoading && !error && <Loader />}

            <Box display='flex'>
                <ContactFormWrapper>
                    <Box
                        as="h2" 
                        pt="16px"
                        display="flex"
                        justifyContent='center'
                            >Add contact:</Box>
                    <ContactForm />
                </ContactFormWrapper>
                
                <ContactsListWrapper>
                    <div>
                        <Box as="h2" pt="16px" display="flex" >Contacts:</Box>
                        <ContactList />
                    </div>
                    
                    <div>
                        <Filter />
                    </div>
                </ContactsListWrapper>

                 
            </Box>
        </Box>
        
    );
};

export default PhoneBook;
