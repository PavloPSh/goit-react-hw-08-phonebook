import { PhoneBook } from "./Phonebook/Phonebook";

import { ToastContainer } from "react-toastify";

import { GlobalStyle } from "./GlobalStyles";
import { Box } from "Box";


export const App = () => {
  return (
    <Box p='24px' display="flex" justifyContent='center'>
      <PhoneBook />
      <GlobalStyle />
      <ToastContainer autoClose={1500} position="top-center"/>
    </Box>
  );
};
