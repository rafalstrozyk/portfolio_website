import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Toolbar.css'

const toolbar = (props) => (
	<div className={classes.Toolbar}>
		<div>Logo</div>
		<nav>
            <NavigationItems />
        </nav>
	</div>
);

export default toolbar;
