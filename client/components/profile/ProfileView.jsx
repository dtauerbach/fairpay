var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var ProfilePanel = require('./ProfilePanel.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {form_values: {},
            question_data: [],
            };
  },

  componentDidMount: function() {
    this.readQuestionsFromAPI();
  },

  readQuestionsFromAPI: function() {
    this.props.readFromAPI(this.props.origin + '/questions', function(questions) {
      tmp_dict = {}
      for (var i = 0; i < questions.length; i++)
        tmp_dict[questions[i].order_id] = questions[i];
      this.setState({question_data: tmp_dict})
    }.bind(this));
  },

  getCurrentQuestion: function() {
    if (!('1' in this.props.question_results))
      return 1;
    // TODO move this hardcoded sanity check limit elsewhere
    for (var i=1; i < 500; i++) {
      if (!(i.toString() in this.props.question_results)) {
        return i;
      }
    }
    return -1;
  },

  generateDevelopmentDebuggingViewport: function() {
    if (process.env.NODE_ENV === 'development') {
      question_settings = [];
      for (prop in this.props.question_results) {
        question_settings.push(<div>{prop}:{this.props.question_results[prop]}</div>);
      }
    return  <div className='development-debug row'>
              <center><p>Sharing settings: {this.props.sharing_setting}</p><p>Question settings: {question_settings}</p></center>
      </div>;
    }
    else {
      return <div></div>;
    }
  },

  render: function() {
    return (
      <div className='profile-view'>
        <div className='row'>
          <ProfilePanel question_data={this.state.question_data} current_question={this.getCurrentQuestion()} question_results={this.props.question_results} />
          <RouteHandler origin={this.props.origin} saveValues={this.props.saveValues} sharing_setting={this.props.sharing_setting} question_data={this.state.question_data} question_results={this.props.question_results} current_question={this.getCurrentQuestion()} />
        </div>
        {this.generateDevelopmentDebuggingViewport()}
      </div>
    );
  }
});
