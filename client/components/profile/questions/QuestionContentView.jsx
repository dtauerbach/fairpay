var React = require('react');
var Router = require('react-router');

module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.func.isRequired
  },

  render: function() {
    return (
      <div id="profile-content-view">
          <div> This is the question content view. Question number is: {this.context.router.getCurrentParams().id} </div>
      </div>
    );
  }
});
