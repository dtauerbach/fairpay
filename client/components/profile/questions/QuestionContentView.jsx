var React = require('react');
var Router = require('react-router');

module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.func.isRequired
  },

  getInitialState: function() {
    return {
      current_value: ''
    }
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
    // awful hack
    if (event.target.value == 'None of the above')
      this.context.router.transitionTo('/faq#company');
    else {
      this.updateQuestionResults(event.target.value);
      this.context.router.transitionTo('/profile');
    }
  },

  unmaskValue: function(maskedValue) {
    return maskedValue.replace(/,/g, '');
  },

  maskValue: function(unmaskedValue) {
    return unmaskedValue.replace(/(\d)(?=(\d{3})+$)/g, '$1,');
  },

  handleMoneyInputChange: function(event) {
    var unmaskedValue = this.unmaskValue(event.target.value);
    if (this.validatePositiveInteger(unmaskedValue)) {
      this.setState({
        current_value: unmaskedValue
      });
      event.target.value = this.maskValue(unmaskedValue);
    }
    else {
      // raise error
      console.log('Form input error');
      event.target.value = this.maskValue(this.state.current_value);
    }
  },

  handleTextInputChange: function(event) {
    this.setState({
      current_value: event.target.value
    });
  },

  validatePositiveInteger: function(str) {
    var n = ~~Number(str);
    return String(n) === str && n >= 0;
  },

  handleNumericInputChange: function(event) {
    if (this.validatePositiveInteger(event.target.value)) {
      this.setState({
        current_value: event.target.value
      });
    }
    else {
      // raise error
      console.log('Form input error');
    }
  },

  handleTextBoxSubmit: function(event) {
    this.updateQuestionResults(this.state.current_value);
    this.context.router.transitionTo('/profile');
  },

  constructTextBoxAnswer: function(default_text, onChangeFunction) {
    var question_name = 'question_' + this.getQuestionId() + '_textbox';
    return (
      <div>
        <input type='text' name={question_name} className='question-textbox' placeholder={default_text} onChange={onChangeFunction} />
        <input type='submit' value='Submit' onClick={this.handleTextBoxSubmit} />
      </div>
    );
  },

  getCheckedStatus: function(answer_text) {
    var current_answer = this.props.question_results[this.getQuestionId()];
    return (typeof(current_answer) !== 'undefined' && current_answer == answer_text);
  },

  constructRadioAnswer: function(answer_text) {
      var radio_name = 'question_' + this.getQuestionId() + '_radio';
      return (
          <div>
            <label className='question-button'>
              <input type='radio' name={radio_name} className='question-radio' value={answer_text} onChange={this.handleRadioChange} checked={this.getCheckedStatus(answer_text)} /> {answer_text}
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
      case 'textbox':
        var answer_div = this.constructTextBoxAnswer(answer.default_text, this.handleTextInputChange);
        break;
      case 'moneytextbox':
        var answer_div = this.constructTextBoxAnswer(answer.default_text, this.handleMoneyInputChange);
        break;
      case 'numerictextbox':
        var answer_div = this.constructTextBoxAnswer(answer.default_text, this.handleNumericInputChange);
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
      var checkMarkUrl = this.props.origin + '/images/green-check.png';
      return <div className='completed-profile'>
               <img src={checkMarkUrl} width='30%'></img>
               <div>Profile Complete!</div>
             </div>;
    }
    var answers = question.answers;
    var answer_divs = [];
    for (var id in answers) {
        answer_divs.push(this.constructQuestionDiv(answers[id]));
    }
    return (
      <div id='profile-content-view' className='col-md-8 centered'>
                      <div className='question_title'> <h1>{question.question_title}</h1> </div>
          <div className='answer-group btn-group'>
              {answer_divs}
          </div>
      </div>
    );
  }
});
