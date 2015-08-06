var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
  render: function() {
    return (
      <div id="sharing-view">
        <Link to="sharing"><h2>Sharing</h2></Link>
      </div>
    );
  }
});
