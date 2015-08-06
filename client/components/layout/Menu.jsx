var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
  render: function() {
    return (
      <div id="menu">
        <span id="menu-link" onClick={this.props.sendMenuClick}><span></span></span>
        <div id="menu-list">
          <div className="pure-menu pure-menu-open">
            <span className="pure-menu-heading">Menu Heading</span>
            <ul>
              <li><Link to="profile">My Profile</Link></li>
              <li><Link to="data">Compensation Data</Link></li>
              <li><Link to="about">About</Link></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});
