var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
  render: function() {
    return (
      <div className="sharing-view">
          <Link to="sharing"><em><h2>Sharing</h2></em></Link>
      </div>
    );
  }
});
