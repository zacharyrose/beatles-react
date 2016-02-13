var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var Cart = require('../components/Cart');
var StoreComponent = require('../components/StoreComponent');
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;

module.exports = (
  <Route path="/" component={Main}>
    <IndexRoute component={Home} />
    <Route path="cart" component={Cart} />
    <Route path="store" component={StoreComponent} />
    <Route path="store/:type" component={StoreComponent} />
  </Route>
);
