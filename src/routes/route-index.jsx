import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from '../App';

import Home from 'pages/Home/Home';
import Test from 'pages/Test/index.tsx';


export default (store) => {
  return (
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/test" component={Test} />
        </Switch>
      </App>
    </BrowserRouter>
  );
};
