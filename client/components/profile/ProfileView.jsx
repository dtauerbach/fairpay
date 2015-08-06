var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var ProfilePanel = require('./ProfilePanel.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div id="profile-view">
          <h1>Profile View</h1>
          <ProfilePanel origin={this.props.origin} readFromAPI={this.props.readFromAPI} />
          <RouteHandler />
      </div>
    );
  }
});
