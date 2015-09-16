var React = require('react');
var Router = require('react-router');
var ReactBootstrap = require('react-bootstrap');
var ReactRouterBootstrap = require('react-router-bootstrap');
var Link = Router.Link;
var Navbar = ReactBootstrap.Navbar;
var Nav = ReactBootstrap.Nav;
var NavItem = ReactBootstrap.NavItem;
var CollapsibleNav = ReactBootstrap.CollapsibleNav;
var DropdownButton = ReactBootstrap.DropdownButton;
var MenuItem = ReactBootstrap.MenuItem;
var Button = ReactBootstrap.Button;
var NavItemLink = ReactRouterBootstrap.NavItemLink;

module.exports = React.createClass({
  handleSignOutLink: function() {
    sessionStorage.setItem('jwt','');
    this.props.resetValues();
    location = '/';
  },

  generateSigningLink: function() {
    if (this.props.signedIn) {
      return <li><a href='#' onClick={this.handleSignOutLink}>Log Out</a></li>;
    }
    else {
      return <li>
               <a href={this.props.origin + '/request_token'}>
                 Sign in with LinkedIn
               </a>
             </li>;
    }
  },

  render: function() {
    var brandImageSource = this.props.origin + '/images/fairpay-logo-beta.png';
    var brandImage = <NavItemLink to='about'>
                       <img src={brandImageSource} height='60px' alt='FairPay' />
                     </NavItemLink>;
    return (
      <Navbar brand={brandImage} toggleNavKey={0} fixedTop>
        <CollapsibleNav eventKey={0}>
          <Nav navbar right>
            <NavItemLink to='about'> About </NavItemLink>
            <NavItemLink to='profile'> My Profile </NavItemLink>
            <NavItemLink to='data'> Market Data </NavItemLink>
            <NavItemLink to='faq'> FAQ </NavItemLink>
            <NavItemLink to='privacy'> Privacy </NavItemLink>
            {this.generateSigningLink()}
          </Nav>
        </CollapsibleNav>
      </Navbar>
    );
  }
});
