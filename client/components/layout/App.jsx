var React = require('react');
var Reqwest = require('reqwest');
var Menu = require('./Menu.jsx');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

module.exports = React.createClass({
  getDefaultProps: function() {
      return {origin: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : ''};
  },

  getInitialState: function() {
      return {
          showMenu: false,
          question_results: {},
          sharing_setting: -1
      };
  },

  saveValues: function(dictionary) {
    this.setState(dictionary);
  },

  readFromAPI: function(url, successFunction) {
    Reqwest({
      url: url,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: successFunction,
      error: function(error) {
        console.error(url, error['response']);
        location = '/';
      }
    });
  },

  render: function () {
    var menu = this.state.showMenu ? 'show-menu' : 'hide-menu';

    return (
      <div>
        <Menu sendMenuClick={this.handleMenuClick} />
        <div id="content">
          <RouteHandler origin={this.props.origin} readFromAPI={this.readFromAPI} saveValues={this.saveValues} question_results={this.state.question_results} sharing_setting={this.state.sharing_setting} />
        </div>
      </div>
    );
  }
});
