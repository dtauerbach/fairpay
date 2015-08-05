var React = require('react');
var QuestionsView = require('../questions/View.jsx');

module.exports = React.createClass({
  render: function () {
    return (
      <div id="content">
        <QuestionsView />
      </div>
    );
  }
});
