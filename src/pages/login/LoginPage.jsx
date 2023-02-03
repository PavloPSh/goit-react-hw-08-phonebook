import { Helmet } from 'react-helmet';
import { LoginForm } from "components/loginForm/LoginForm"

const LoginPage = () => {
    return (
        <>
            <Helmet>
                <title>Login page</title>
            </Helmet>
            <LoginForm />
        </>
    )
};

export default LoginPage;
