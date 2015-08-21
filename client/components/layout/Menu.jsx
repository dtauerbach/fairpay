var React = require('react');
var Router = require('react-router');
var ReactBootstrap = require('react-bootstrap');
var ReactRouterBootstrap = require('react-router-bootstrap');
var Link = Router.Link;
var Navbar = ReactBootstrap.Navbar;
var Nav = ReactBootstrap.Nav;
var NavItem = ReactBootstrap.NavItem;
var DropdownButton = ReactBootstrap.DropdownButton;
var MenuItem = ReactBootstrap.MenuItem;
var Button = ReactBootstrap.Button;
var NavItemLink = ReactRouterBootstrap.NavItemLink;

module.exports = React.createClass({
  handleSignOutLink: function() {
    sessionStorage.setItem('jwt','');
    location = '/';
  },

  render: function() {
    console.log(this.props.origin);
    if (this.props.signedIn) {
      var signingLink = <li><span onClick={this.handleSignOutLink}>Sign Out</span></li>;
    }
    else {
      var signingLink = <li><a href={this.props.origin + '/request_token'}>Sign In</a></li>;
    }
    return (
      <Navbar brand='FairPay' fixedTop>
        <Nav bsStyle='pills' pullRight>
          <NavItemLink to="about"> About </NavItemLink>
          <NavItemLink to="profile"> My Profile </NavItemLink>
          <NavItemLink to="data"> Market Data </NavItemLink>
          {signingLink}
        </Nav>
      </Navbar>
    );
  }
});
