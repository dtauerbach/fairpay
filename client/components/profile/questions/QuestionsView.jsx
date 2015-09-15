var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var QuestionList = require('./QuestionList.jsx');

module.exports = React.createClass({
  render: function() {
    var link_location = "/profile/questions/" + this.props.current_question;
    return (
      <div className="questions-view">
          <Link to={link_location}><h2>Profile</h2></Link>
          <QuestionList question_data={this.props.question_data} question_results={this.props.question_results} />
      </div>
    );
  }
});
