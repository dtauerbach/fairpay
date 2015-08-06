var React = require('react');
var ProfilePanel = require('./ProfilePanel.jsx');
var ProfileContentView = require('./ProfileContentView.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div id="profile-view">
          <h1>Profile View</h1>
          <ProfilePanel origin={this.props.origin} readFromAPI={this.props.readFromAPI} />
          <ProfileContentView />
      </div>
    );
  }
});
