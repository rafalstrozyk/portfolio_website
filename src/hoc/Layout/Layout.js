import React, { useState, useRef } from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Burger from '../../components/Navigation/Burger/Burger';
import { StyledLayout, NavigationStyle} from './Layout.style';
import { useOnClickOutside } from '../../hooks/clickOutside';
import Aux from '../Auxing/Auxing';

const Layout = (props) => {
	const [open, setOpen] = useState(false);
	const node = useRef();
	useOnClickOutside(node, () => setOpen(false));

	return (
		<StyledLayout>
			<NavigationStyle ref={node}>
				<Burger open={open} setOpen={setOpen} />
				<Toolbar open={open} setOpen={setOpen} />
			</NavigationStyle>

			<Aux>{props.children}</Aux>
		</StyledLayout>
	);
};
export default Layout;
