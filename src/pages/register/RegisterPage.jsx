import { nanoid } from "nanoid"
import { useDispatch } from "react-redux";
import { Helmet } from 'react-helmet';


import { register } from "redux/auth/authOperations";

import { Form, FormItem } from "components/ContactForm/ContactForm.styled";
import { Box } from "Box";


const RegisterPage = () => {

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            register({
                name: form.elements.userName.value,
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    }

    const userNameId = nanoid();
    const passwordId = nanoid();
    const emailId = nanoid();
    
    return (
        <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' pt='48px'>
            <Helmet>
                <title>Register</title>
            </Helmet>
            <Form onSubmit={handleSubmit}>
                <FormItem htmlFor={userNameId}>Username:
                    <input
                        id={userNameId}
                        name='userName'
                        type="text" />
                </FormItem>
                <FormItem htmlFor={emailId}>Email:
                    <input
                        id={emailId}
                        name='email'
                        type="email" />
                </FormItem>
                <FormItem htmlFor={passwordId}>Password:
                    <input
                        id={passwordId}
                        name='password'
                        type="password"
                        minLength='7' />
                </FormItem>
                <button type="submit">Register</button>
            </Form>
        </Box>
    )
}

export default RegisterPage;