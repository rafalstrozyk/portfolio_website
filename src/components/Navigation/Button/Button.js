import React from 'react';
import { Link } from 'react-router-dom';

import { ButtonStyle } from './Button.style';

const button = (props) => (
	<Link to={props.link}>
		<ButtonStyle>{props.children}</ButtonStyle>
	</Link>
);

export default button;
