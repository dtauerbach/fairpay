var React = require('react');
var Router = require('react-router');

module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.func.isRequired
  },

  constructRadioAnswer: function(answer_text) {
      return (
          <div><input type="radio" name="question_radio" className="question_radio"> {answer_text} </input></div>
      );
  },

  constructQuestionDiv: function(answer) {
    var answer_type = answer.answer_type;
    var answer_div = '';
    switch (answer_type) {
      case 'Radio':
        var answer_div = this.constructRadioAnswer(answer.answer_text);
        break;
      default:
        var answer_div = <div className={answer_type}> {answer.answer_text} </div>
      }
      return answer_div;
  },

  render: function() {
    var question = this.props.question_data[this.context.router.getCurrentParams().id-1];
    var answers = question.answers;
    var answer_divs = [];
    for (var id in answers) {
        answer_divs.push(this.constructQuestionDiv(answers[id]));
    }
    return (
      <div id="profile-content-view" className="col-md-8">
          <div className="question_title"> <h1>{question.question_title}</h1> </div>
          <div className="answer_div">
              {answer_divs}
          </div>
      </div>
    );
  }
});
