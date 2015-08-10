var React = require('react');
var Router = require('react-router');

module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.func.isRequired
  },

  render: function() {
    var question = this.props.question_data[this.context.router.getCurrentParams().id-1];
    var question_answers = question.answers;
    return (
      <div id="profile-content-view">
          <div className="question_title"> {question.question_title} </div>
          <div className="question_answers"> {question_answers} </div>
      </div>
    );
  }
});
