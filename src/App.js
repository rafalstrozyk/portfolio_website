import React, { Suspense } from 'react';
import './App.css';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

import Home from './containers/Home/Home';
import Layout from './hoc/Layout/Layout';

const Me = React.lazy(() => {
	return import('./containers/Me/Me');
});
const Skills = React.lazy(() => {
	return import('./containers/Skills/Skills');
});
const Projects = React.lazy(() => {
	return import('./containers/Projects/Projects');
});

const app = (props) => {
	return (
		<div className='App'>
			<Layout>
				<Suspense fallback={<p>Loading...</p>}>
					<Switch>
						<Route path='/me' render={(props) => <Me />} />
						<Route path='/skills' render={(props) => <Skills />} />
						<Route path='/projects' render={(props) => <Projects />} />
						<Route path='/' exact component={Home} />
						<Redirect to='/' />
					</Switch>
				</Suspense>
			</Layout>
		</div>
	);
};

export default withRouter(app);
