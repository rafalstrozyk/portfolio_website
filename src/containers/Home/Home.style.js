import styled from 'styled-components';
import image from '../../assets/images/home.jpg';

export const Content = styled.div`
	padding: 5rem;
	background-image: linear-gradient(
		to right,
		rgba(51, 51, 51, 0.8),
		rgba(51, 51, 51, 0.9)
	),
		url(${image});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	box-shadow: 1rem 2rem 3rem rgba(17, 153, 158, .3);

	transform: skewY(4deg);
	& > * {
		transform: skewY(-4deg);
	}

	margin-top: 6rem;
	margin-bottom: 5rem;

	& a {
		display:block;
	}

	& h2 {
		font-size: 3.2rem;
		font-weight: 300;
		margin-bottom: 3rem;
		text-align: center;
	}



	& p {
		
		font-size: 1.9rem;
		
	}
`;
