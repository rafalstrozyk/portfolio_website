import React, { useState } from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import './Toolbar.css';

const Toolbar = (props) => {

	const [isHover, setIsHover] = useState(true);

	return (
		<div
			className={'Toolbar'}
			onMouseEnter={() => setIsHover(false)}
			onMouseLeave={() => setIsHover(true)}
		>
			<nav>
				<NavigationItems isHover={isHover} />
			</nav>
		</div>
	);
};

export default Toolbar;
