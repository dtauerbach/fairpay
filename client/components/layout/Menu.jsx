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
    var linkedInSigninImage = this.props.origin + '/images/Sign-In-Small---Default.png';
    if (this.props.signedIn) {
      return <li><a href='#' onClick={this.handleSignOutLink}>Log Out</a></li>;
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
    var brandImage = <a href='/'>
                       <img src={brandImageSource} height='60px' alt='FairPay' />
                     </a>;
    return (
      <Navbar brand={brandImage} toggleNavKey={0} fixedTop>
        <CollapsibleNav eventKey={0}>
          <Nav bsStyle='pills' pullRight>
            <NavItem href='/#about'> About </NavItem>
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
