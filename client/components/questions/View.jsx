var React = require('react');
var QuestionsList = require('./List.jsx');

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
        <QuestionsList data={this.state.data} />
      </div>
    );
  }
});
