import React from 'react';
import { Router, Route, IndexRoute } from 'react-router'

import Main from '../components/Main';
import Home from '../components/Home';
import Cart from '../components/Cart';
import Shop from '../components/Shop';

module.exports = (
  <Route path="/" component={Main}>
    <IndexRoute component={Home} />
    <Route path="cart" component={Cart} />
    <Route path="store" component={Shop} />
    <Route path="store/:type" component={Shop} />
  </Route>
);
