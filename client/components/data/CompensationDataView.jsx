var React = require('react');

module.exports = React.createClass({
  render: function() {
    var notEnoughDataText = "Unfortunately, we don't yet have enough data to generate useful information for you :/ Please share with your friends.";
    var connectFirst = "Please connect via LinkedIn in order to view market data.";
    if (this.props.signedIn) {
      var mainContentDiv = <div> {notEnoughDataText} </div>;
    }
    else {
      var mainContentDiv = <div> {connectFirst} </div>
    }
    return (

      <div id="compensation-data-view">
        {mainContentDiv}
      </div>
    );
  }
});
