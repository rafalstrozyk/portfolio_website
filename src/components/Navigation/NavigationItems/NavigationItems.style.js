import styled from 'styled-components';

export const StyledNavigationItems = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-content: space-around;
	height: 30rem;
`;

export const StyledLogo = styled.svg`
	fill: ${({theme}) => theme.greyLight};
	width: 2rem;
	height: 100%;
	margin-right: 1rem;
`;
