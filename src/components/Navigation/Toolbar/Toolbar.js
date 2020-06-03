import React, { useState } from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import { StyledToolbar } from './Toolbar.style';

const Toolbar = (props) => {
	return (
		<StyledToolbar open={props.open}>
			<nav>
				<NavigationItems />
			</nav>
		</StyledToolbar>
	);
};

export default Toolbar;
