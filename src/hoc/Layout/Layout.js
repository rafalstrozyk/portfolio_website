import React, {useState} from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Burger from '../../components/Navigation/Burger/Burger';
import {StyledLayout} from './Layout.style';

const Layout = (props) => {

	const [open, setOpen] = useState(false);

	return (
		<StyledLayout>
			<Burger open={open} setOpen={setOpen}/>
			<Toolbar open={open} setOpen={setOpen} />
			<main className={'test'}>
				{props.children}
			</main>
		</StyledLayout>
	);
};
export default Layout;
