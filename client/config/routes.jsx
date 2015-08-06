var React = require('react');
var Router = require('react-router');
var App = require('../components/layout/App.jsx');
var QuestionsView = require('../components/questions/View.jsx');
var SharingSettingsView = require('../components/sharing/SharingSettingsView.jsx');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

module.exports = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute name="questions" handler={QuestionsView} />
    <Route name="sharing" handler={SharingSettingsView} />
  </Route>
);
