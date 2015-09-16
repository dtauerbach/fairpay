var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Router = require('react-router');
var Jumbotron = ReactBootstrap.Jumbotron;
var Button = ReactBootstrap.Button;
var Link = Router.Link;

module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.func.isRequired
  },

  handleButtonClick: function(event) {
    this.context.router.transitionTo('/profile');
  },

  render: function() {
    var fairPayAboutTextOne = 'FairPay is an experiment in compensation sharing. By encouraging transparency and informed sharing, we hope to help ensure companies compensate employees fairly, regardless of gender, ethnicity, start date, or region of the world. Currently, we only support a few large tech companies, as we want to keep our questions as targeted as possible. The privacy philosophy of FairPay is to verify the data coming in as best we can, but not keep track of individuals beyond that verification step. Though we try our best to sanity check information, we cannot police every detail or item of information that has been offered, so please be honest with the information you provide to this service.';
    var fairPayAboutTextTwo = 'We believe strongly in user control, and as such we allow for different sharing options, and generally what you give is what you get: if you share a certain piece of information such as your level, then you will have access to the levels of other FairPay users who have shared that piece of information. On the other hand, if you choose not to share a particular field, then you will not have access to data related to that field.';
      var privacyPolicyAndFAQ = <div>Check out our <Link to='/faq'>FAQ</Link> and <Link to='/privacy'>Terms of Service/Privacy Policy</Link> for more information.</div>;
    var introStyle = {
      background: 'black',
      backgroundSize: 'cover'
    };

    return (
      <div>
        <div className='row'>
          <Jumbotron className='intro-body' style={introStyle}>
            <div className='fp-container'>
              <h1>What are you worth?</h1>
                <Button onClick={this.handleButtonClick} className='btn btn-circle page-scroll'>
                  <img src={this.props.origin + '/images/double-arrow-right-128.png'} height='22px'/>
                </Button>
            </div>
          </Jumbotron>
        </div>
        <div className='row'>
          <section id='about' className='about-section'>
            <div>
              <h2>About FairPay</h2>
              <p> {fairPayAboutTextOne} </p>
              <p> {fairPayAboutTextTwo} </p>
              <p> {privacyPolicyAndFAQ} </p>
            </div>
          </section>
        </div>
      </div>
    );
  }
});
