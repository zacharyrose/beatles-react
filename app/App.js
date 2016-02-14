var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var routes = require('./config/routes');
import { browserHistory } from 'react-router';
//import { createHistory } from 'history';
//import createHistory from 'history/lib/createBrowserHistory'

//const history = createHistory();

ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
  //<Router history={history} routes={routes} />,
  document.getElementById('app')
)
