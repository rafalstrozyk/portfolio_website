import React from 'react';

import { StyleHeaderPhoto, StyledHeader, StyledTitle } from './Header.style';
import headerImage from '../../../assets/images/header1.png';

const header = () => (
	<StyledHeader>
		<StyledTitle>
			<h1>
				<span>&lt;</span> Rafał Stróżyk <span>/ &gt;</span>
			</h1>
			<span>
				<h1>
					<span>&lt;</span> Front-end Developer <span>/ &gt;</span>
				</h1>
			</span>
		</StyledTitle>
		<StyleHeaderPhoto>
			<img src={headerImage} alt='Rafał Stróżyk' />
		</StyleHeaderPhoto>
	</StyledHeader>
);

export default header;
