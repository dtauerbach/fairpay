var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var ReactSocial = require('react-social');
var ProgressBar = ReactBootstrap.ProgressBar;
var FacebookButton = ReactSocial.FacebookButton;
var TwitterButton = ReactSocial.TwitterButton;

module.exports = React.createClass({
  getPercentageReporting: function() {
    return this.props.companyTotal;
  },

  constructProgressBar: function() {
    return <div className='progress-bar-container'>
             <ProgressBar active now={this.getPercentageReporting()} />
           </div>;
  },

  constructShareLinks: function() {
    var facebookIconLink = this.props.origin + '/images/facebook-share.png';
    var twitterIconLink = this.props.origin + '/images/twitter-share.png';
    return <div className='sharelinks-container'>
             <FacebookButton url="www.fairpay.org"><img src={facebookIconLink} alt="Share on Facebook"></img></FacebookButton>
             <TwitterButton url="www.fairpay.org"><img src={twitterIconLink} alt="Share on Twitter"></img></TwitterButton>
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
