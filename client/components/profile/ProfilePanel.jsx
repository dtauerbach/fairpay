var React = require('react');
var QuestionsView = require('./questions/QuestionsView.jsx');
var SharingSettingsView = require('./sharing/SharingSettingsView.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div className='col-md-4 profile-panel'>
          <QuestionsView question_data={this.props.question_data} current_question={this.props.current_question} question_results={this.props.question_results} />
          <SharingSettingsView />
      </div>
    );
  }
});
