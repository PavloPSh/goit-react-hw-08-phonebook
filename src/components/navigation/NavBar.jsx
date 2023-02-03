import { AuthBar } from "components/authBar/AuthBar";
import { UserMenu } from "components/userMenu/UserMenu";
// import { NavLink } from "react-router-dom";
import { useAuth } from "hooks";
import { Box } from "Box";

import { NavBarBox, StyledNavLink } from "./NavBar.styled";
// import { HomePage } from "pages/home/HomePage";

export const NavBar = () => {

    const { isLoggedIn } = useAuth();

    return (
        <NavBarBox>

            <Box display='flex' gridColumnGap='24px' >

                <StyledNavLink to={'/'}>Home</StyledNavLink>

                {isLoggedIn && <StyledNavLink to='contacts'>Contacts</StyledNavLink>}
                
            </Box>

            {isLoggedIn ? <UserMenu /> : <AuthBar />}
            
        </NavBarBox>
    )
}

