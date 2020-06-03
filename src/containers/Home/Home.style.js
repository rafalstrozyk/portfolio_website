import styled, { keyframes } from 'styled-components';

const circle = keyframes`
    0% { 
        top: 50%;
       left: -10%;
       background-position:75% 0%;
    }


    35% {
        left: 80%;
        top: -10%;
        background-color: #0c686b;
    }

    50% {
        background-position:26% 100%;
    }

    70% {
        left: -10%;
    }

    100% {
        background-color: #0c686b;
        top:-10%;
        background-position:25% 40%;  
    }
`;

const photo = keyframes`
    0% {background-position:0% 51%;}
    50% {background-position:100% 50%;}
    100% {background-position:0% 51%;}
`;

export const StyledHome = styled.header`
	margin-top: 4rem;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;

export const StyledTitle = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	width: 100%;
	height: 100%;
	z-index: 5;

	&::before {
		content: '';
		width: 10rem;
		height: 10rem;
        // background: ${({ theme }) => theme.greyLight_2};
        background: linear-gradient(49deg, #0c686b, #1d2938, #cccccc, #ffffff);
        background-size: 500% 500%;
		border-radius: 50%;
		position: absolute;
		z-index: -1;
		top: 60%;
		left: 0;
		animation: ${circle} 10s ease-in-out infinite;
		animation-direction: alternate;
	}

	& h1 {
		text-transform: uppercase;
		font-size: 6rem;
		font-weight: 100;
		text-align: center;
		// margin-right: 15rem;
	}

	& span {
		margin-top: 0.8rem;
		// margin-left: 15rem;
	}

	& span h1 {
		font-size: 3rem;
		font-weight: 300;
		color: ${({ theme }) => theme.primaryBlue};
	}
`;

export const StyleHeaderPhoto = styled.div`
	margin-left: 5rem;
	position: relative;
	width: 22rem;
	height: 22rem;
	z-index: 5;

	&::before {
		content: '';
		width: 22.5rem;
		height: 22.5rem;
		background: linear-gradient(93deg, #0c686b, #1d2938);
		background-size: 400% 400%;
		border-radius: 50%;
		position: absolute;
		z-index: -1;
		top: 50%;
		left: 50%;
        transform: translate(-50%, -50%);
        animation: ${photo} 5s ease-in-out infinite;
        box-shadow: 1rem 2.5rem 3.5rem  rgba(0,0,0,0.2);
		
		animation-direction: alternate;
	}

	& img {
		width: 22rem;
		box-sizing: content-box;
		border-radius: 50%;
	}
`;
