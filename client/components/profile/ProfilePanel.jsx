var React = require('react');
var QuestionsView = require('./questions/QuestionsView.jsx');
var SharingSettingsView = require('./sharing/SharingSettingsView.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div id="profile-panel-div">
          <h2>Profile</h2>
          <QuestionsView question_data={this.props.question_data} />
          <SharingSettingsView />
      </div>
    );
  }
});
