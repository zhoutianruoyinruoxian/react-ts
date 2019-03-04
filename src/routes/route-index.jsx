import React from 'react';
import { BrowserRouter, HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from '../App';

import Home from 'pages/Home/Home';
import Login from 'pages/Login/Login';
import Test from 'pages/Test/index.tsx';
import Test1 from 'pages/Test1/index';

import algorithm from 'pages/algorithm/index.tsx';

const supportsHistory = 'pushState' in window.history;
export default (store) => {
  return (
    <BrowserRouter forceRefresh={!supportsHistory}>
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/test" component={Test} />
          <Route path="/algorithm" component={algorithm} />
          <Route exact path="/test1" component={Test1} />
          <Route component={() => (<div>not fond</div>)} />
        </Switch>
      </App>
    </BrowserRouter>
  );
};
