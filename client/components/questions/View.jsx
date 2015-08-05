var React = require('react');
var QuestionsList = require('./List.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.setState({data: [{id: 2, question_text: 'Some question'}, {id: 1, question_text: 'Another question'}]});
  },
  render: function() {
    return (
      <div className="questions-view">
        <QuestionsList data={this.state.data} />
      </div>
    );
  }
});
