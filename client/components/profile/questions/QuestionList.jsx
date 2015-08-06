var React = require('react');
var Question = require('./Question.jsx');

module.exports = React.createClass({
    render: function() {
        var questions = this.props.data.map(function(question) {
            return (
                <Question key={question.id} question_text={question.question_text} />
            );
        });
        return (
            <ul className="questions-list">
                { questions }
            </ul>
        );
    }
});
