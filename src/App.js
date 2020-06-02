import React from 'react';
import './App.css';
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';

import Layout from './hoc/Layout/Layout';

const app = (props) => {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/' />
          <Route path='/me' />
          <Route path='/skills' />
          <Route path='/projects' />
          <Redirect to='/'/>
        </Switch>
      </Layout>
    </div>
  );
}

export default withRouter(app);
