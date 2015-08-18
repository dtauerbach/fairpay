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
  render: function() {
    return (
      <Navbar brand='FairPay' fixedTop>
        <Nav bsStyle='pills' pullRight>
          <NavItemLink to="about"> About </NavItemLink>
          <NavItemLink to="profile"> My Profile </NavItemLink>
          <NavItemLink to="data"> Market Data </NavItemLink>
          <NavItem eventKey={1} href='#'>Sign Up</NavItem>
          <NavItem eventKey={2} href='#'>Log In</NavItem>
        </Nav>
      </Navbar>
    );
  }
});
