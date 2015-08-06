var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <li className="question">
        <span className="question-text">{this.props.question_text}</span>
      </li>
    );
  }
});
