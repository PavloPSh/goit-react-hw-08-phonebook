import { PhoneBook } from "./Phonebook/Phonebook";

import { GlobalStyle } from "./GlobalStyles";
import { Box } from "Box";


export const App = () => {
  return (
    <Box p='24px' display="flex" justifyContent='center'>
      <PhoneBook />
      <GlobalStyle />
    </Box>
  );
};
