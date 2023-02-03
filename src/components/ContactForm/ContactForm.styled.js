import styled from "styled-components";

export const Form = styled.form`
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    & button{
        font-weight: 700;
        margin: 0 auto;
        max-width: 150px;
        background-color: ${props => props.theme.colors.white};
        border: ${props => props.theme.borders.card};
        border-radius: ${props => props.theme.radii.md};
        &:hover{
            background-color: ${props => props.theme.colors.secondary};
            color: ${props => props.theme.colors.white};
        }
    }
`;

export const FormItem = styled.label`
    display: flex;
    justify-content: space-between;
    & input{
        width: 380px;
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: ${props => props.theme.borders.card};
        outline: none;
    }
`;