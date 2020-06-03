import React from 'react';
import headerImage from '../../assets/images/header1.png';

import { StyledHome, StyledTitle, StyleHeaderPhoto } from './Home.style';

const home = (props) => {
	return (
		<StyledHome>
			<StyledTitle>
				<h1>Rafał Stróżyk</h1>
				<span>
					<h1>Front-end Developer</h1>
				</span>
			</StyledTitle>
			<StyleHeaderPhoto>
				<img src={headerImage} alt='Rafał Stróżyk' />
			</StyleHeaderPhoto>
		</StyledHome>
	);
};

export default home;
