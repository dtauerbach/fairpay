var React = require('react');
var QuestionsView = require('./questions/QuestionsView.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div id="profile-panel-div">
          <QuestionsView origin={this.props.origin} readFromAPI={this.props.readFromAPI} />
      </div>
    );
  }
});
