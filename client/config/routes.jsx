var React = require('react');
var Router = require('react-router');
var App = require('../components/layout/App.jsx');
var QuestionsView = require('../components/questions/View.jsx');
var SharingSettingsView = require('../components/sharing/SharingSettingsView.jsx');
var ProfileView = require('../components/profile/ProfileView.jsx');
var CompensationDataView = require('../components/data/CompensationDataView.jsx');
var AboutView = require('../components/about/AboutView.jsx');

var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

module.exports = (
  <Route name="app" path="/" handler={App}>
    <Route name="data" handler={CompensationDataView} />
    <Route name="profile" handler={ProfileView} />
    <Route name="about" handler={AboutView} />
  </Route>
);
