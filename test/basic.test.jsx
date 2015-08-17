var TestUtils = require('react/lib/ReactTestUtils');
var TestContext = require('./TestContext.jsx');
var App = require('../client/components/layout/App.jsx');
var app = TestContext.getRouterComponent(App);

describe("Application", function() {
  it("has a nav bar", function() {
    var nav = TestUtils.findRenderedDOMComponentWithTag(app, 'nav');
    expect(nav).toBeDefined();
  });
});
