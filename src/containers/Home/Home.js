import React from 'react';

import Aux from '../../hoc/Auxing/Auxing';
import Header from '../../components/Headers/Home/Header'; 
import { Content } from './Home.style';
import ButtonLink from '../../components/Navigation/Button/Button';
import {NavLink} from 'react-router-dom';


const home = (props) => {
	return (
		<Aux>
			<Header />
			<Content>
				<h2>Cześć jestem Rafał. Miło mi Cię poznać</h2>
				<p>Chcesz sie czegoś dowiedzieć o mnie?</p>
				<NavLink to='/me'>Test</NavLink>
				<p>Jeśli chcesz wiedzieć więcej o moich umiejętnościach to zapraszam</p>
				<ButtonLink link='/skills'>Test2</ButtonLink>
				<p>Zachęcam Cię też do zobaczenia moich projektów</p>
				<a href='/'>Coś</a>

			</Content>
		</Aux>
	);
};

export default home;
