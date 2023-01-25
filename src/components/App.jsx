import { Routes, Route } from "react-router-dom";

import { Layout } from "./layout/Layout";
import { PhoneBook } from "./Phonebook/Phonebook";
import { LoginPage } from "pages/login/LoginPage";
import { RegisterPage } from "pages/register/RegisterPage";

import { ToastContainer } from "react-toastify";

import { GlobalStyle } from "./GlobalStyles";
import { Box } from "Box";


export const App = () => {
  return (
    <Box p='24px' display="flex" justifyContent='center'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PhoneBook />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>  
      </Routes>
      <GlobalStyle />
      <ToastContainer autoClose={1500} position="top-center"/>
    </Box>
  );
};
