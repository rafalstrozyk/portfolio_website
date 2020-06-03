import styled from 'styled-components';
import {NavLink} from 'react-router-dom'

export const StyledNavigationItem = styled.li`
	position: relative;
	&::before {
		z-index: 1;
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 2px;
		background-color: #11999e;
		transform: scaleY(0);
		transition: transform 0.2s, width 0.4s cubic-bezier(1, 0, 0, 1) 0.2s,
			background-color 0.1s;
	}

	&:hover::before {
		transform: scaleY(1);
		width: 100%;
	}
`;
const activeClassName = 'nav-item-active'
export const StyledLink = styled(NavLink).attrs({activeClassName})`
	&:link,
	&:visited {
		z-index: 10;
		font-size: 1.5rem;
		display: flex;
		align-items: center;
		align-content: center;
		-webkit-text-decoration: none;
		text-decoration: none;
		text-align: center;
		text-transform: uppercase;
		color: #fff;
		padding: 1rem 0.8rem;
		position: relative;
	}

	&.${activeClassName} {
		transform: scaleY(1);
	width: 100%;
	background-color: #11999e;
	transition: all 0.2s;
	}
`;
