var React = require('react');
var Reqwest = require('reqwest');
var Menu = require('./Menu.jsx');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Uri = require('jsuri');

module.exports = React.createClass({
  getDefaultProps: function() {
      return {
          origin: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : ''
      };
  },

  getInitialState: function() {
      return {
          showMenu: false,
          signedIn: false,
          currentUser: {
              handle: ''
          },
          question_results: {},
          sharing_setting: 'Private'
      };
  },

  saveValues: function(dictionary) {
    this.setState(dictionary);
  },

  componentWillMount: function() {
    var jwt = new Uri(location.search).getQueryParamValue('jwt');
    if (!!jwt) {
      sessionStorage.setItem('jwt', jwt);
    }
  },

  componentDidMount: function() {
    if (!!sessionStorage.getItem('jwt')) {
      this.currentUserFromAPI();
    }
  },

  currentUserFromAPI: function() {
    this.readFromAPI(this.props.origin + '/current_user', function(user) {
      this.setState({signedIn: true, currentUser: user});
    }.bind(this));
  },

  readFromAPI: function(url, successFunction) {
    Reqwest({
      url: url,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      headers: {
          'Authorization': sessionStorage.getItem('jwt')
      },
      success: successFunction,
      error: function(error) {
        console.error(url, error['response']);
        location = '/';
      }
    });
  },

  render: function () {
    console.log("origin is " + this.props.origin);
    var menu = this.state.showMenu ? 'show-menu' : 'hide-menu';

    return (
      <div>
        <Menu origin={this.props.origin} sendMenuClick={this.handleMenuClick} />
        <div id="content">
          <RouteHandler origin={this.props.origin} readFromAPI={this.readFromAPI} saveValues={this.saveValues} question_results={this.state.question_results} sharing_setting={this.state.sharing_setting} />
        </div>
      </div>
    );
  }
});
