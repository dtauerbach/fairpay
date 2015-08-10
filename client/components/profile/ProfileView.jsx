var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var ProfilePanel = require('./ProfilePanel.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {form_values: {},
            question_data: [] };
  },
  componentDidMount: function() {
    this.readQuestionsFromAPI();
  },
  readQuestionsFromAPI: function() {
    this.props.readFromAPI(this.props.origin + '/questions', function(questions) {
      this.setState({question_data: questions})
    }.bind(this));
  },

  saveValues: function(dictionary) {
    this.setState(dictionary);
  },

  render: function() {
    return (
      <div id="profile-view">
          <h1>Profile View</h1>
          <ProfilePanel question_data={this.state.question_data} />
          <RouteHandler saveValues={this.saveValues} sharing_setting={this.state.sharing_setting} question_data={this.state.question_data} />
          <div> Your settings are: {this.state.sharing_setting} </div>
      </div>
    );
  }
});
