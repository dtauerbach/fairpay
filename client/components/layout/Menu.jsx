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
    var brandImageSource = this.props.origin + '/images/fairpay-logo-beta.png';
    var brandImage = <a href="#">
                       <img src={brandImageSource} height="60px" alt="FairPay" />
                     </a>;
    if (this.props.signedIn) {
      var signingLink = <li><a href="#" onClick={this.handleSignOutLink}>Sign Out</a></li>;
    }
    else {
      var signingLink = <li><a href={this.props.origin + '/request_token'}>Sign In</a></li>;
    }
    return (
      <Navbar brand={brandImage} fixedTop>
        <Nav bsStyle='pills' pullRight>
          <NavItemLink to='about'> About </NavItemLink>
          <NavItemLink to='profile'> My Profile </NavItemLink>
          <NavItemLink to='data'> Market Data </NavItemLink>
          {signingLink}
        </Nav>
      </Navbar>
    );
  }
});
