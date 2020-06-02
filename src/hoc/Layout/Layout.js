import React from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import './Layout.css';

const layout = (props) => {
	return (
		<div className={'Layout'}>
			<Toolbar  />
			<main className={'test'}>
				{props.children}
			</main>
		</div>
	);
};
export default layout;
