import styled from "styled-components";

export const FilterItem = styled.label`
    display: flex;
    flex-direction: column;
    & input{
        width: 200px;
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: ${props => props.theme.borders.card};
        outline: none;
    }
`;