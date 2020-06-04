import React, { useState, useRef } from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Burger from '../../components/Navigation/Burger/Burger';
import { StyledLayout } from './Layout.style';
import { useOnClickOutside } from '../../hooks/clickOutside';

const Layout = (props) => {
	const [open, setOpen] = useState(false);
	const node = useRef();
	useOnClickOutside(node, () => setOpen(false));

	return (
		<StyledLayout>
			<div ref={node}>
				<Burger open={open} setOpen={setOpen} />
				<Toolbar open={open} setOpen={setOpen} />
			</div>

			<div>{props.children}</div>
		</StyledLayout>
	);
};
export default Layout;
