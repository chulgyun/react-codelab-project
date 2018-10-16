import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, indexRoute } from 'react-router';
import { App, Home, Login, Register } from 'containers';

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Router history =  {browserHistory}>
        <Route path="/" component = {App}>
            <indexRoute component = {Home}/>
            <Route path = "home" component = {Home}/>
            <Route path = "login" component = {Login}/>
            <Route path = "register" component = {Register}/>
        </Route>
    </Router> 
    , rootElement
);
