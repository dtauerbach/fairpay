var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
    render: function() {
        var questions = [];
        for (question_id in this.props.question_data) {
          var question = this.props.question_data[question_id];
            questions.push (
                <li key={question.order_id} className="question">
                  <Link to={"/profile/questions/" + question_id}>{question.sidebar_question_title}</Link>
                </li>
            );
        }
        return (
            <ul className="questions-list">
                { questions }
            </ul>
        );
    }
});
