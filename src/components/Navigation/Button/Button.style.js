import styled from 'styled-components';

export const ButtonStyle = styled.button `
    &,
    &:link,
    &:visited {
        text-transform: uppercase;
        text-decoration: none;
        padding: 1.5rem 3rem;
        display: inline-block;
        font-size: 1.7rem;
        border: none;
        cursor: pointer;
        background: ${({theme}) => theme.primaryBlue};
        color: ${({theme}) => theme.greyLight};
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        border-radius: 50px;
        transition: all .3s;
    }

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 1rem 2rem rgba(17, 153, 158, .3);
    }

    &:active,
    &:focus {
        outline: none;
        transform: translateY(-1px);
        box-shadow: 0 0.5rem 1rem rgba(17, 153, 158, .2);
    }
`