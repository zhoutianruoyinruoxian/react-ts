import React from 'react';
import { BrowserRouter, HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from '../App';

import Home from 'pages/Home/Home';
import Login from 'pages/Login/Login';
import Test from 'pages/Test/index';
import Test1 from 'pages/Test1/index';
import algorithm from 'pages/algorithm';
import TableX from 'pages/ComponentTest/TableX/TableX';
import SelectSearch from 'pages/ComponentTest/SelectSearch/SelectSearch';
import InputFormat from 'pages/ComponentTest/InputFormat/InputFormat';
import Step from 'pages/ComponentTest/Step/Step';

import ObserverMode from 'pages/DesignPatterns/ObserverMode';


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
          <Redirect exact path="/ComponentTest" to="/ComponentTest/TableX" />
          <Route exact path="/ComponentTest/TableX" component={TableX} />
          <Route exact path="/ComponentTest/SelectSearch" component={SelectSearch} />
          <Route exact path="/ComponentTest/InputFormat" component={InputFormat} />
          <Route exact path="/ComponentTest/Step" component={Step} />
          <Redirect exact path="/DesignPatterns" to="/DesignPatterns/ObserverMode" />
          <Route exact path="/DesignPatterns/ObserverMode" component={ObserverMode} />
          <Route component={() => (<div>not fond</div>)} />
        </Switch>
      </App>
    </BrowserRouter>
  );
};
