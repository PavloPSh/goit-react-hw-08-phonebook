import { Box } from "Box";
import { useAuth } from "hooks";
import { useDispatch } from "react-redux";
import { logout } from "redux/auth/authOperations";

import { LogoutButton } from "./UserMenu.styled";

export const UserMenu = () => {
    const { user } = useAuth();
    const dispatch = useDispatch();

    const handleLogOut = () => dispatch(logout());
    
   

    return (
        <Box display='flex' gridColumnGap='24px'>
            <Box as='h4'>Welcome, {user.name}</Box>
            <LogoutButton type="button" onClick={handleLogOut} >Logout</LogoutButton>
        </Box>
    )
};
