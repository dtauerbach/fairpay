require('./assets/fairpay.less');

var React = require('react');
var Router = require('react-router');
var routes = require('./config/routes.jsx');
var BootstrapWebpack = require('bootstrap-webpack');

Router.run(routes, Router.HistoryLocation, function(Handler) {
  React.render(<Handler/>, document.body);
});
