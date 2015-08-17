var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var ProfilePanel = require('./ProfilePanel.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {form_values: {},
            question_data: [],
            question_results: {}};
  },

  componentDidMount: function() {
    this.readQuestionsFromAPI();
  },

  readQuestionsFromAPI: function() {
    this.props.readFromAPI(this.props.origin + '/questions', function(questions) {
      this.setState({question_data: questions})
    }.bind(this));
  },

  getCurrentQuestion: function() {
    if (!("1" in this.props.question_results))
      return 1;
    // TODO move this hardcoded sanity check limit elsewhere
    for (var i=0; i < 500; i+=1) {
      if (!(i.toString() in this.props.question_results)) {
        return i+1;
      }
    }
    return -1;
  },

  render: function() {
    var divstyle = {
        backgroundColor: 'cyan',
        padding: '50px',
        margin: '100px'
    };
    question_settings = [];
    for (prop in this.props.question_results) {
        question_settings.push(<div>{prop}:{this.props.question_results[prop]}</div>);
    }
    return (
      <div>
      <div id="profile-view" className="col-md-12">
          <ProfilePanel question_data={this.state.question_data} current_question={this.getCurrentQuestion()} />
          <RouteHandler saveValues={this.props.saveValues} sharing_setting={this.props.sharing_setting} question_data={this.state.question_data} current_question_results={this.props.question_results} />
      </div>
      <div className="col-md-12" style={divstyle}>
          <center><p>Sharing settings: {this.props.sharing_setting}</p><p>Question settings: {question_settings}</p></center>
      </div>
      </div>
    );
  }
});
