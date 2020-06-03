import styled from 'styled-components';

export const StyledLayout = styled.div`
	display: flex;
	position: relative;
	height: 100vh;
	justify-content: center;
	background: ${({theme}) => theme.secondaryBlue};
`;
