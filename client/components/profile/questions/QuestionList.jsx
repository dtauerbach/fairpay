var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
    isAnsweredQuestion: function(question_id) {
      return question_id in this.props.question_results;
    },

    render: function() {
        var questions = [];
        for (question_id in this.props.question_data) {
          var answered = this.isAnsweredQuestion(question_id);
          var question = this.props.question_data[question_id];
          var display_text =  answered ? question.sidebar_question_title + ': ' + this.props.question_results[question_id] : question.sidebar_question_title;
          var className = answered ? 'question answered-question' : 'question'
          questions.push (
              <li key={question.order_id} className={className}>
                <Link to={'/profile/questions/' + question_id}>{display_text}</Link>
              </li>
          );
        }
        return (
            <ul className='questions-list'>
                { questions }
            </ul>
        );
    }
});
