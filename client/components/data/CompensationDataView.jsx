var React = require('react');

module.exports = React.createClass({
  render: function() {
    var notEnoughDataText = "Unfortunately, we don't yet have enough data to generate useful information for you :/ Please share with your friends.";
    var connectFirst = "Please connect via LinkedIn in order to view market data.";
    if (this.props.signedIn) {
      var mainContentDiv = <div> {notEnoughDataText} </div>;
    }
    else {
      var mainContentDiv = <div>
                             {connectFirst}
                             <div className="row signin-internal">
                               <a href={this.props.origin + '/request_token'}>Sign In</a>
                             </div>
                             <div className="row linkedin-explanation">
                                 <a href='#'> Why do I have to connect via LinkedIn? </a>
                             </div>
                           </div>
    }
    return (
      <div className="row">
        <div className="compensation-data-view">
          {mainContentDiv}
        </div>
      </div>
    );
  }
});
