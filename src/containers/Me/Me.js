import React from 'react';

import { MeStyled, TitleStyle, CardsStyle, CardStyle } from './Me.style';
import { ReactComponent as PersonIcon } from '../../assets/images/SVG/user2.svg';
import { ReactComponent as AvatarIcon } from '../../assets/images/SVG/avatar.svg';
import { ReactComponent as CodeIcon } from '../../assets/images/SVG/code1.svg';
import { ReactComponent as MountainIcon } from '../../assets/images/SVG/mountain.svg';

const me = (props) => {
	return (
		<MeStyled>
			<TitleStyle>
				<PersonIcon />
				<h2>O mnie</h2>
			</TitleStyle>
			<CardsStyle>
				<CardStyle>
					<AvatarIcon />
					<div>
						<h3>Kim jestem?</h3>

						<p>
							Cześć! Nazywam się Rafał Stróżyk. W 2019 roku wybrałem co tak na
							prawdę chcę robić, zostać front-end developerem, tworzyć
							niesamowite strony które pomogą ludziom w pracy, szkole, w
							rozrywce. Początkowo zacząłem od wszelkich poradników w
							internecie. Jednak moje chęci do nauki popchnęły mnie w stronę
							kursów. Dlatego zacząłem uczyć się na Udemy, aktualnie przerobiłem
							wiele kursów, co najmniej 150 godzin samych wykładów. Dzięki nim
							uzyskałem niezbędną wiedzę umożliwiającą tworzenie nowoczesnych
							aplikacji internetowych, a także postawić swoje pierwsze kroki w
							świecie IT.
						</p>
					</div>
				</CardStyle>

				<CardStyle>
					<div>
						<h3>Dlaczego programowanie?</h3>
						<p>
							Zainteresowałem się programowaniem po skończeniu technikum,
							chciałem zrozumieć jak działa komputer, i wszystko co z nim
							związane. Zrozumiałem że lubię rozwiązywać problemy które
							napotkałem podczas nauki, widzieć to co można zrobić przy pomocy
							klawiatury i wiedzy. Dlatego wybrałem tę dziedzinę, by móc budować
							coś dużego co przyda się innym ludziom.
						</p>
					</div>
					<CodeIcon />
				</CardStyle>
				<CardStyle>
					<MountainIcon />

					<div>
						<h3>Czym się zajmuję aktualnie?</h3>
						<p>
							Aktualnie jestem na drugim roku studiowania informatyki
							stosowanej, szukam także pierwszej pracy jako Junior Front-end
							Developer. Tworzę kolejne projekty, uczę się kolejnych
							technologii, utrwalam to czego się nauczyłem. Przede wszystkim
							poszerzam wiedzę o Javascript i dobrze się bawię spotykając coraz
							to nowsze wyzwania.
						</p>
					</div>
				</CardStyle>
			</CardsStyle>
		</MeStyled>
	);
};

export default me;
