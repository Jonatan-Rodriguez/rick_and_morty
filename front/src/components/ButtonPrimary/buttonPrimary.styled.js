import styled from 'styled-components';

export const ButtonPrimaryStyled = styled.button`
    padding: 15px 25px;
    border-radius: 50px;
    cursor: pointer;
    border: 0;
    background-color: ${props => props.theme.colors.secondary};
    box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    font-size: 1.5em;
    transition: all 0.5s ease;
    font-weight: bold;
    color: ${props => props.theme.colors.primary};

    &:hover {
        letter-spacing: 2px;
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.secondary};
        box-shadow: ${props => props.theme.colors.primary} 0px 7px 29px 0px;
    }

    &:active {
        letter-spacing: 2px;
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.secondary};
        box-shadow: ${props => props.theme.colors.primary} 0px 0px 0px 0px;
        transform: translateY(10px);
        transition: 100ms;
    }
`