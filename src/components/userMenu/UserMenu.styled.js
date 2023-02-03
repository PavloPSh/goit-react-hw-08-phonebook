import styled from "styled-components";

export const LogoutButton = styled.button`
    font-weight: 700;
    background-color: ${props => props.theme.colors.white};
    border: ${props => props.theme.borders.card};
    border-radius: ${props => props.theme.radii.md};
    &:hover{
        background-color: ${props => props.theme.colors.secondary};
        color: ${props => props.theme.colors.white};
    }
`