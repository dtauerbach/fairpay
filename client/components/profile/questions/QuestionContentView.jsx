var React = require('react');
var Router = require('react-router');

module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.func.isRequired
  },

  getInitialState: function() {
    return {current_value: ''}
  },

  updateQuestionResults: function(text) {
    if (!(text))
      return;
    var question_dict = {
        question_results: {}
    };
    question_dict['question_results'] = this.props.question_results;
    question_dict['question_results'][this.getQuestionId()] = text;
    this.props.saveValues(question_dict);
  },

  handleRadioChange: function(event) {
    this.updateQuestionResults(event.target.value);
    this.context.router.transitionTo('/profile');
  },

  handleTextInputChange: function(event) {
    this.setState({current_value: event.target.value});
  },

  handleTextBoxSubmit: function(event) {
    this.updateQuestionResults(this.state.current_value);
    this.context.router.transitionTo('/profile');
  },

  constructTextBoxAnswer: function(default_text) {
    var question_name = "question_" + this.getQuestionId() + "_textbox";
    return (
      <div>
        <input type="text" name={question_name} className="question_textbox" placeholder={default_text} onChange={this.handleTextInputChange} />
        <input type="submit" value="Submit" onClick={this.handleTextBoxSubmit} />
      </div>
    );
  },

  getCheckedStatus: function(answer_text) {
    var current_answer = this.props.question_results[this.getQuestionId()];
    return (typeof(current_answer) !== 'undefined' && current_answer == answer_text);
  },

  constructRadioAnswer: function(answer_text) {
      var radio_name = "question_" + this.getQuestionId() + "_radio";
      return (
          <div>
            <label className="btn btn-default">
              <input type="radio" name={radio_name} className="question_radio" value={answer_text} onChange={this.handleRadioChange} checked={this.getCheckedStatus(answer_text)} /> {answer_text}
            </label>
          </div>
      );
  },

  getQuestionId: function() {
    var id = this.context.router.getCurrentParams().id;
    return isNaN(id) ? this.props.current_question : id;
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

  getQuestion: function() {
    var question_id = this.getQuestionId();
    if (!(question_id in this.props.question_data)) {
      return null;
    }
    return this.props.question_data[question_id];
  },

  render: function() {
    if (this.props.question_data.length == 0) {
      return <div>Loading...</div>;
    }
    var question = this.getQuestion();
    if (question === null) {
      return <div> Submit Your Data </div>;
    }
    var answers = question.answers;
    var answer_divs = [];
    for (var id in answers) {
        answer_divs.push(this.constructQuestionDiv(answers[id]));
    }
    return (
      <div id="profile-content-view" className="col-md-8">
          <div className="question_title"> <h1>{question.question_title}</h1> </div>
          <div className="answer_div btn-group">
              {answer_divs}
          </div>
      </div>
    );
  }
});
