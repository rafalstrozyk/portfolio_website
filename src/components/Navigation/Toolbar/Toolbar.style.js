import styled from 'styled-components';

export const StyledToolbar = styled.div`
	height: 100vh;
	background-color: ${({theme}) => theme.greyDark};
	flex-direction: column;
	justify-content: center;
	padding: 1rem;
	display: flex;
	text-align: left;
	position: absolute;
	transform: ${({open}) => open? 'translateX(0)' : 'translateX(-100%)'};
	top: 0;
	left: 0;
	transition: transform 0.3s ease-in-out;
`;
