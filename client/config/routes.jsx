var React = require('react');
var Router = require('react-router');
var App = require('../components/layout/App.jsx');
var ProfileView = require('../components/profile/ProfileView.jsx');
var QuestionContentView = require('../components/profile/questions/QuestionContentView.jsx');
var SharingContentView = require('../components/profile/sharing/SharingContentView.jsx');
var CompensationDataView = require('../components/data/CompensationDataView.jsx');
var AboutView = require('../components/about/AboutView.jsx');

var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

module.exports = (
  <Route name="app" path="/" handler={App}>
    <Route name="data" handler={CompensationDataView} />
    <Route name="profile" handler={ProfileView}>
      <Route name="questions" path="/profile/questions/:id" handler={QuestionContentView} />
      <Route name="sharing" handler={SharingContentView} />
      <DefaultRoute name="defaultquestion" handler={QuestionContentView} />
    </Route>
    <Route name="about" handler={AboutView} />
  </Route>
);
