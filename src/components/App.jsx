import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { ToastContainer } from "react-toastify";

import { Layout } from "./layout/Layout";
// import PhoneBook from "./Phonebook/Phonebook";
// import LoginPage from "pages/login/LoginPage";
// import RegisterPage from "pages/register/RegisterPage";



import { RestrictedRoute } from "routes/RestrictedRoute";
import { PrivatRoute } from "routes/PrivateRoute";

import { useAuth } from "hooks";

import { GlobalStyle } from "./GlobalStyles";
import { Box } from "Box";
import { useEffect } from "react";
import { refreshUser } from "redux/auth/authOperations";
import { lazy } from "react";

const HomePage = lazy(() => import('pages/home/HomePage'));
const RegisterPage = lazy(() => import('pages/register/RegisterPage'));
const LoginPage = lazy(() => import('pages/login/LoginPage'));
const PhoneBook = lazy(() => import('./Phonebook/Phonebook'));



export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  return (
    isRefreshing ? <p> loading...</p> : 
    <Box p='24px'>
      <Routes>
        <Route path="/" element={<Layout />}>
          
          <Route index element={<HomePage /> } />
          <Route path="contacts" element={<PrivatRoute component={PhoneBook} redirectTo={'/login'} />} />  
          <Route path="login" element={<RestrictedRoute component={LoginPage} redirectTo={'/contacts'} />} />
          <Route path="register" element={<RestrictedRoute component={RegisterPage} redirectTo={'/contacts'} />} />
        </Route>  
      </Routes>
      <GlobalStyle />
      <ToastContainer autoClose={1500} position="top-center"/>
    </Box>
  );
};
