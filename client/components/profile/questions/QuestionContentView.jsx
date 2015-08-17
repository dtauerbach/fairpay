var React = require('react');
var Router = require('react-router');

module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.func.isRequired
  },

  handleChange: function(event) {
    var question_dict = {
        question_results: {}
    };
    question_dict['question_results'] = this.props.current_question_results;
    question_dict['question_results'][this.getQuestionId()] = event.target.value;
    this.props.saveValues(question_dict);
  },

  constructRadioAnswer: function(answer_text) {
      var radio_name = "question_" + this.getQuestionId() + "_radio";
      return (
          <div><input type="radio" name={radio_name} className="question_radio" value={answer_text} onChange={this.handleChange} /> {answer_text}</div>
      );
  },

  getQuestionId: function() {
    return this.context.router.getCurrentParams().id-1;
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
    var question = this.props.question_data[this.getQuestionId()];
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
