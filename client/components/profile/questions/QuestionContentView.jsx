var React = require('react');
var Router = require('react-router');

module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.func.isRequired
  },

  render: function() {
    var question = this.props.question_data[this.context.router.getCurrentParams().id-1];
    var answers = question.answers;
    var answer_divs = [];
    for (var id in answers) {
        answer_divs.push(<div className="answer"> {answers[id].answer_text} </div>);
    }
    return (
      <div id="profile-content-view">
          <div className="question_title"> {question.question_title} </div>
          <div className="answer_div">
              {answer_divs}
          </div>
      </div>
    );
  }
});
