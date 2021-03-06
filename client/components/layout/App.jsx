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
      var fairpayState = JSON.parse(localStorage.getItem('fairpay'));
      var question_results = {};
      var sharing_setting = 'Restricted';
      if (fairpayState) {
        question_results = fairpayState['question_results'] || {};
        sharing_setting = fairpayState['sharing_setting'] || 'Restricted';
      }
      return {
          showMenu: false,
          signedIn: false,
          currentUser: {
              handle: ''
          },
          question_results: question_results,
          sharing_setting: sharing_setting,
          companyTotal: 0
      };
  },

  resetValues: function() {
    localStorage.setItem('fairpay', JSON.stringify({}));
  },

  saveValues: function(dictionary) {
    this.setState(dictionary, function (){
      localStorage.setItem('fairpay', JSON.stringify(this.state));
      if (this.state.signedIn) {
        this.writeDatapointToAPI();
      }
    });
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
      this.setState({
          signedIn: true,
          currentUser: user.uid,
          companyTotal: user.company_total
      });
      this.writeDatapointToAPI();
      console.log("current user is " + user.uid);
      console.log("company total is " + user.company_total);
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
        sessionStorage.setItem('jwt','');
        location = '/';
      }
    });
  },

  writeDatapointToAPI: function() {
    this.writeToAPI('post', this.props.origin + '/datapoints', JSON.stringify(this.state), function() {
      // TODO figure out how to handle this
      console.log("wrote to api");
    });
  },

  writeToAPI: function(method, url, data, successFunction) {
    Reqwest({
      url: url,
      data: data,
      type: 'json',
      method: method,
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
    var menu = this.state.showMenu ? 'show-menu' : 'hide-menu';

    return (
      <div>
        <Menu origin={this.props.origin} sendMenuClick={this.handleMenuClick} signedIn={this.state.signedIn} resetValues={this.resetValues} />
        <div className="content">
          <RouteHandler origin={this.props.origin} readFromAPI={this.readFromAPI} saveValues={this.saveValues} question_results={this.state.question_results} sharing_setting={this.state.sharing_setting} signedIn={this.state.signedIn} companyTotal={this.state.companyTotal} />
        </div>
      </div>
    );
  }
});
