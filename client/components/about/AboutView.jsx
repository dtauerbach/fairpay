var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Jumbotron = ReactBootstrap.Jumbotron;
var Button = ReactBootstrap.Button;

module.exports = React.createClass({
  render: function() {
    var payGapUrl = this.props.origin + '/images/pay-gap-background-4.png';
    var introStyle = {
      background: 'url(' + payGapUrl + ') no-repeat bottom center scroll',
      backgroundSize: 'cover'
    };

    return (
      <div>
        <div className="row">
          <Jumbotron className="intro-body" style={introStyle}>
            <div className="fp-container">
              <h1>What are you worth?</h1>
                <Button href="#about" className="btn btn-circle page-scroll">
                  <img src={this.props.origin + '/images/double-down.png'} height='20px'/>
                </Button>
            </div>
          </Jumbotron>
        </div>
        <div className="row">
          <section className="about-section">
            <div>
              <h2>About FairPay</h2>
              <p>
            </div>
          </section>
        </div>
      </div>
    );
  }
});
