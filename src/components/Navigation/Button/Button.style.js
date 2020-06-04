import styled from 'styled-components';

export const ButtonStyle = styled.button `
    &,
    &:link,
    &:visited {
        text-transform: uppercase;
        text-decoration: none;
        padding: 1.5rem;
        display: inline-block;
        font-size: 1.9rem;
        border: none;
        cursor: pointer;
        background: ${({theme}) => theme.primaryBlue};
        color: ${({theme}) => theme.greyLight};
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        border-radius: 10px;
        transition: all .3s;
    }

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
    }

    &:active,
    &:focus {
        outline: none;
        transform: translateY(-1px);
        box-shadow: 0 0.5rem 1rem rgba($color-black, 0.2);
    }
`