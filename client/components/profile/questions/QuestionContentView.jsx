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

  constructTextBoxAnswer: function(default_text) {
    var question_name = "question_" + this.getQuestionId() + "_textbox";
    return (
      <div>
        <input type="text" name={question_name} className="question_textbox" placeholder={default_text} onChange={this.handleChange} />
      </div>
    );
  },

  constructRadioAnswer: function(answer_text) {
      var radio_name = "question_" + this.getQuestionId() + "_radio";
      return (
          <div><input type="radio" name={radio_name} className="question_radio" value={answer_text} onChange={this.handleChange} /> {answer_text}</div>
      );
  },

  getQuestionId: function() {
    var id = this.context.router.getCurrentParams().id-1;
    return isNaN(id) ? this.props.current_question-1 : id;
  },

  constructQuestionDiv: function(answer) {
    var answer_type = answer.answer_type;
    var answer_div = '';
    switch (answer_type) {
      case 'Radio':
        var answer_div = this.constructRadioAnswer(answer.answer_text);
        break;
      case 'titletextbox':
        var answer_div = this.constructTextBoxAnswer(answer.default_text);
        break;
      case 'moneytextbox':
        var answer_div = this.constructTextBoxAnswer(answer.default_text);
        break;
      case 'numerictextbox':
        var answer_div = this.constructTextBoxAnswer(answer.default_text);
        break;
      default:
        var answer_div = <div className={answer_type}> {answer.answer_text} </div>
      }
      return answer_div;
  },

  render: function() {
    if (this.props.question_data.length == 0) {
      return <div>Loading...</div>;
    }
    var question_id = this.getQuestionId();
    if (!(question_id in this.props.question_data)) {
      return <div> Submit Your Data </div>;
    }
    var question = this.props.question_data[question_id];
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
