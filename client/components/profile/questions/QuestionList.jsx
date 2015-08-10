var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
    render: function() {
        var questions = this.props.question_data.map(function(question) {
            return (
                <li key={question.order_id} className="question">
                  <Link to={"/profile/questions/" + question.id}>{question.sidebar_question_title}</Link>
                </li>
            );
        });
        return (
            <ul className="questions-list">
                { questions }
            </ul>
        );
    }
});
