import { Box } from "Box";
import { NavLink } from "react-router-dom";

import { StyledNavLink } from "components/navigation/NavBar.styled";

export const AuthBar = () => {
    return (
        <Box display='flex' gridColumnGap='24px'>
            <StyledNavLink to='/login'>Login</StyledNavLink>
            <StyledNavLink to='/register'>Register</StyledNavLink>
        </Box>
    )
}
