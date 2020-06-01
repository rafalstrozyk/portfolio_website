import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
	<header>
		<div>Logo</div>
		<nav>
            <NavigationItems />
        </nav>
	</header>
);

export default toolbar;
