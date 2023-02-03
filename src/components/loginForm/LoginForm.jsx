import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";

import { login } from "redux/auth/authOperations";

import { Form,FormItem } from "components/ContactForm/ContactForm.styled";
import { Box } from "Box";


export const LoginForm = () => {

    const dispatch = useDispatch();

    

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        console.log(form)
        dispatch(
            login({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    };

    const emailId = nanoid();
    const passwordId = nanoid();

    return (
        <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' pt='48px'>
            

            <Form onSubmit={handleSubmit}>
                <FormItem htmlFor={emailId}>Email:
                    <input
                        type="email"
                        name="email"
                        id={emailId}
                        />
                </FormItem>
                <FormItem htmlFor={passwordId}>Password:
                    <input
                        type="password"
                        name="password"
                        id={passwordId}
                        />
                </FormItem>
                <button type="submit">Login</button>
            </Form>
        </Box>
    )
};

