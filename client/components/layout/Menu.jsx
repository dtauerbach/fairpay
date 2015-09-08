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

  generateSigningLink: function() {
    var linkedInSigninImage = this.props.origin + '/images/Sign-In-Small---Default.png';
    if (this.props.signedIn) {
      return <li><a href='#about' onClick={this.handleSignOutLink}>Log Out</a></li>;
    }
    else {
      return <li>
               <a href={this.props.origin + '/request_token'}>
                 <img src={linkedInSigninImage} height='28px' alt='Sign in'></img>
               </a>
             </li>;
    }
  },

  render: function() {
    var brandImageSource = this.props.origin + '/images/fairpay-logo-beta.png';
    var brandImage = <a href='#about'>
                       <img src={brandImageSource} height='60px' alt='FairPay' />
                     </a>;
    return (
      <Navbar brand={brandImage} fixedTop>
        <Nav bsStyle='pills' pullRight>
           <li><a href='/#about'> About </a></li>
          <NavItemLink to='profile'> My Profile </NavItemLink>
          <NavItemLink to='data'> Market Data </NavItemLink>
          {this.generateSigningLink()}
        </Nav>
      </Navbar>
    );
  }
});
