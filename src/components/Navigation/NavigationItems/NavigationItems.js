import React from 'react';
import { ReactComponent as HomeLogo } from '../../../assets/images/SVG/home.svg';
import { ReactComponent as CogLogo } from '../../../assets/images/SVG/cog.svg';
import { ReactComponent as UserLogo } from '../../../assets/images/SVG/user.svg';
import { ReactComponent as FolderLogo } from '../../../assets/images/SVG/folder.svg';
import './NavigationItems.css';

import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => {
	let navigationItemList = (
		<ul className={'navigation'}>
			<NavigationItem link='/' exact>
				<HomeLogo className={'logo'} />
				<span>Home</span>
			</NavigationItem>
			<NavigationItem link='/me'>
				<UserLogo className={'logo'} /><span>O mnie</span>
			</NavigationItem>
			<NavigationItem link='/skills'>
				<CogLogo className={'logo'} />
				<span>Umiejętności</span>
			</NavigationItem>
			<NavigationItem link='/projects'>
				<FolderLogo className={'logo'} />
				<span>Projekty</span>
			</NavigationItem>
		</ul>
	);

	if (props.isHover) {
		navigationItemList = (
			<ul className={'navigation'}>
				<NavigationItem link='/' exact>
					<HomeLogo className={'logo'} />
				</NavigationItem>
				<NavigationItem link='/me'>
					<UserLogo className={'logo'} />
				</NavigationItem>
				<NavigationItem link='/skills'>
					<CogLogo className={'logo'} />
				</NavigationItem>
				<NavigationItem link='/projects'>
					<FolderLogo className={'logo'} />
				</NavigationItem>
			</ul>
		);
	}

	return <div>{navigationItemList}</div>;
};

export default NavigationItems;
