import React from 'react';

import Header from '../../components/Headers/Home/Header'; 
import { Content, HomeStyle} from './Home.style';
import ButtonLink from '../../components/Navigation/Button/Button';



const home = (props) => {
	return (
		<HomeStyle>
			<Header />
			<Content>
				<h2>Cześć, jestem Rafał. Miło mi Cię poznać.</h2>
				<p>Chcesz sie czegoś dowiedzieć o mnie?</p>
				<ButtonLink link='/me'>O mnie</ButtonLink>
				<p>Jeśli chcesz wiedzieć więcej o moich umiejętnościach to zapraszam</p>
				<ButtonLink link='/skills'>Umiejętności</ButtonLink>
				<p>Zachęcam Cię też do zobaczenia moich projektów</p>
				<ButtonLink link='/projects'>Projekty</ButtonLink>

			</Content>
		</HomeStyle>
	);
};

export default home;
