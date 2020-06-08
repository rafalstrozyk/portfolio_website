import styled from 'styled-components';
import { newSiteAnimation } from '../../style/animations';

export const MeStyled = styled.div`
	animation: ${newSiteAnimation} 0.3s linear;

	text-align: center;

	& p {
        font-size: 1.9rem;
        font-family: 'Roboto', sans-serif;
        
	}
`;

export const TitleStyle = styled.div `
    display: flex;
    justify-content: center;
    margin-top: 10rem;

    & h2 {
        font-size: 7rem;
        font-weight: 100;
    }
    
    & svg {
        width: 10rem;
        margin-right: 2rem;
        fill: ${({ theme }) => theme.greyLight_2};  
	}
` 

export const CardsStyle = styled.div`
    margin-top: 12rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
    align-items: center;
`;

export const CardStyle = styled.div`
transform: skewY(3deg);
	& > * {
		transform: skewY(-3deg);
    }
    
	width: 80%;
	background: ${({ theme }) => theme.primaryBlueDark};
	padding: 4.5rem;
	display: flex;
    align-items: center;
    box-shadow: 1rem 2rem 3rem rgba(17, 153, 158, 0.3);

    & h3 {
        margin-bottom: 3rem;
        font-size: 2.8rem;
        letter-spacing: .8rem;
        color: ${({theme}) => theme.secondaryBlueDark};
    }

	
	margin-bottom: 13rem;
    
    
    & div {
        width: 100%;
    }

	& svg {
		width: 20rem;
        height: auto;
        & path {
            fill: ${({theme}) => theme.greyDark} !important;
         }
        

        &:first-child,
        &:last-child {
            margin-right: 3rem;
        }
        &: nth-child(2) {
            margin-left: 3rem;
        }
	}

`;
