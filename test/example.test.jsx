var React = require('react');
var Router = require('react-router');
var routes = require('../client/config/routes.jsx');
var TestUtils = require('react/lib/ReactTestUtils');
var Main = require('../client/main.jsx');
var ProfileView = require('../client/components/profile/ProfileView.jsx');

describe("Application", function() {
  it("should be trivial", function() {
    expect(1).toBe(1);
  });

  it("renders into document", function() {
    var element = TestUtils.renderIntoDocument(<div />);
    expect(2).toBe(2);
  });

  it("should load", function() {
    Router.run(routes, Router.HistoryLocation, function(Handler) {
        TestUtils.renderIntoDocument(<Handler/>);
    });
    expect(find("nav").length).toBe(1);
  });

});
