var React = require('react');
var Router = require('react-router');
var ReactBootstrap = require('react-bootstrap');
var ReactSocial = require('react-social');
var ProgressBar = ReactBootstrap.ProgressBar;
var FacebookButton = ReactSocial.FacebookButton;
var TwitterButton = ReactSocial.TwitterButton;
var Link = Router.Link;

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
             <FacebookButton url='www.myfairpay.org'><img src={facebookIconLink} alt='Share on Facebook'></img></FacebookButton>
             <TwitterButton url='www.myfairpay.org'><img src={twitterIconLink} alt='Share on Twitter'></img></TwitterButton>
           </div>;
  },

  constructNotEnoughDataDiv: function() {
    var notEnoughDataText = "Unfortunately, we don't yet have enough data for your company to generate useful information for you :/ We are getting closer though:";
    var shareText = 'Please share this site with coworkers so that we can begin sharing data.';
    var progressBar = this.constructProgressBar();
    var shareLinks = this.constructShareLinks();
    return <div>
             <p> {notEnoughDataText} </p>
             {progressBar}
             <p> {shareText} </p>
             {shareLinks}
           </div>;
  },

  constructNeedToSignInDiv: function() {
    var linkedInSigninImage = this.props.origin + '/images/Sign-In-Small---Default.png';
    var connectFirstText = 'Please connect via LinkedIn in order to view market data.';
    return <div>
             {connectFirstText}
             <div className='row signin-internal'>
               <a href={this.props.origin + '/request_token'}>
                 <img src={linkedInSigninImage} alt='Sign in'></img>
               </a>
             </div>
             <div className='row linkedin-explanation'>
               <Link to='/faq#why-linked-in'> Why do I have to connect via LinkedIn? </Link>
             </div>
           </div>
  },

  render: function() {
    if (this.props.signedIn) {
      var mainContentDiv = this.constructNotEnoughDataDiv();
    }
    else {
      var mainContentDiv = this.constructNeedToSignInDiv();
    }
    return (
      <div className='row'>
        <div className='compensation-data-view'>
          {mainContentDiv}
        </div>
      </div>
    );
  }
});
