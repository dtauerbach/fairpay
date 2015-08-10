var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var QuestionsList = require('./QuestionList.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="questions-view">
        <Link to="/profile/questions/1">Questions</Link>
        <QuestionsList question_data={this.props.question_data} />
      </div>
    );
  }
});
