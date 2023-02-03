import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavBarBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 8px;
    border-bottom: 1px solid gray;
`;

export const StyledNavLink = styled(NavLink)`
    color: ${p => p.theme.colors.black};
    &.active{
        color: ${p => p.theme.colors.primary};
    }
    &:hover{
        text-shadow: ${p => p.theme.shadows.slim};
        color: ${p => p.theme.colors.primary};
        
    }
    text-decoration: none;
    font-weight: 700;
    font-size: 20px;
`



