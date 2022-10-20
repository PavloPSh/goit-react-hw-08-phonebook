import styled from "styled-components";

export const Item = styled.li`
    margin-top: ${props => props.theme.space[3]}px;
    display: flex;
    gap: ${props => props.theme.space[5]}px;
    & button{
        background-color: ${props => props.theme.colors.white};
        border: ${props => props.theme.borders.card};
        border-radius: ${props => props.theme.radii.md};
        &:hover{
            background-color: ${props => props.theme.colors.secondary};
            color: ${props => props.theme.colors.white};
        }
    }
`;