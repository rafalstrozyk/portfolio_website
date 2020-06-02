import React from 'react';

import Aux from '../Auxing/Auxing';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.css';

const layout = (props) => {
	return (
		<div className={classes.Layout}>
			<Toolbar  />
			<main className={classes.test}>
				<h1>Main lol</h1>
			</main>
		</div>
	);
};
export default layout;
