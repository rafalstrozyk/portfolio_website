import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationItem.css';
import {
	StyledLink,
	StyledNavigationItem,
} from './NavigationItem.style';

const navigationItem = (props) => (
	<StyledNavigationItem>
			<StyledLink	
				to={props.link}
				exact={props.exact}	
			>
				{props.children}
			</StyledLink>
	</StyledNavigationItem>
);

export default navigationItem;
