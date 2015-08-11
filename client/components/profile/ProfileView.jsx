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
    var divstyle = {
        backgroundColor: 'cyan',
        padding: '50px',
        margin: '100px'
    };
    return (
      <div>
      <div id="profile-view" className="col-md-12">
          <ProfilePanel question_data={this.state.question_data} />
          <RouteHandler saveValues={this.saveValues} sharing_setting={this.state.sharing_setting} question_data={this.state.question_data} />
      </div>
      <div className="col-md-12" style={divstyle}><center>Your settings are: {this.state.sharing_setting}</center></div>
      </div>
    );
  }
});
