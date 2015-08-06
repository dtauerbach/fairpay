var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var QuestionsList = require('./QuestionList.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.readQuestionsFromAPI();
  },
  readQuestionsFromAPI: function() {
    this.props.readFromAPI(this.props.origin + '/questions', function(questions) {
      this.setState({data: questions})
    }.bind(this));
  },
  render: function() {
    return (
      <div className="questions-view">
        <Link to="questions">Questions</Link>
        <QuestionsList data={this.state.data} />
      </div>
    );
  }
});
