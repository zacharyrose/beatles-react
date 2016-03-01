import React from 'react';
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from './config/routes';

//import { createHistory } from 'history';
//import createHistory from 'history/lib/createBrowserHistory'

//const history = createHistory();

ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
  //<Router history={history} routes={routes} />,
  document.getElementById('app')
)
