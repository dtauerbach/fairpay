var React = require('react');
var ReactBootstrap = require('react-bootstrap');
//var SocialIcon = require('react-social-icons');
var ProgressBar = ReactBootstrap.ProgressBar;

module.exports = React.createClass({
  getPercentageReporting: function() {
    return this.props.companyTotal;
  },

  constructProgressBar: function() {
    return <div className="progress-bar-container">
             <ProgressBar active now={this.getPercentageReporting()} />
      </div>;
  },

  constructShareLinks: function() {
    return <div className="sharelinks-container">
          Social icons here
    </div>;
  },

  constructNotEnoughDataDiv: function() {
    var notEnoughDataText = "Unfortunately, we don't yet have enough data for your company to generate useful information for you :/ We are getting closer though:";
    var shareText = "Please share with coworkers so that we can get this compensation-sharing party started.";
    var progressBar = this.constructProgressBar();
    var shareLinks = this.constructShareLinks();
    return <div>
             <p> {notEnoughDataText} </p>
             {progressBar}
             <p> {shareText} </p>
             {shareLinks}
           </div>;
  },

  render: function() {
    var connectFirst = "Please connect via LinkedIn in order to view market data.";
    if (this.props.signedIn) {
      var mainContentDiv = this.constructNotEnoughDataDiv();
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
