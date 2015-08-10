var React = require('react');
var Router = require('react-router');
var ReactBootstrap = require('react-bootstrap');
var Link = Router.Link;
var Navbar = ReactBootstrap.Navbar;
var Nav = ReactBootstrap.Nav;
var NavItem = ReactBootstrap.NavItem;
var DropdownButton = ReactBootstrap.DropdownButton;
var MenuItem = ReactBootstrap.MenuItem;
var Button = ReactBootstrap.Button;

module.exports = React.createClass({
  render: function() {
    var navbarInstance = (
      <Navbar brand='React-Bootstrap' className='fixedTop'>
        <Nav>
          <NavItem eventKey={1} href='#'>Link</NavItem>
          <NavItem eventKey={2} href='#'>Link</NavItem>
          <DropdownButton eventKey={3} title='Dropdown'>
            <MenuItem eventKey='1'>Action</MenuItem>
            <MenuItem eventKey='2'>Another action</MenuItem>
            <MenuItem eventKey='3'><Button>Button</Button></MenuItem>
            <MenuItem divider />
            <MenuItem eventKey='4'>Separated link</MenuItem>
          </DropdownButton>
        </Nav>
      </Navbar>
   );

    var oldmenu = (
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

    return navbarInstance;
  }
});
