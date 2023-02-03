import { Box } from "Box";
import { useAuth } from "hooks";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";


const HomePage = () => {
    const { isLoggedIn } = useAuth();
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' pt='48px'>
                <h1>
                    Welcome to your personal Phonebook
                </h1>
                {isLoggedIn ?
                    <p>Thank you for using our application!</p>:
                    
                    <p><Link to='/login'>Login</Link> or <Link to='/register'>Register</Link> for start</p>}
            </Box>
        </>
    )
};

export default HomePage;