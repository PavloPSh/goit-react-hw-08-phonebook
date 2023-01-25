import { NavLink } from "react-router-dom";


export const NavBar = () => {
    return (
        <nav>
            <NavLink to='/'>Contacts</NavLink>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/register'>Register</NavLink>
        </nav>
    )
}

