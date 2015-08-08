var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      current_sharing_setting: 'private_setting',
      sharing_options: {
        private_setting: 'Private',
        full_setting: 'Full'
      }
    };
  },

  handleChange: function(event) {
    this.setState({sharing_setting: event.target.value});
    this.props.saveValues({sharing_setting: event.target.value});
  },

  constructInputFields: function() {
    var inputs = [];
    for (var property in this.state.sharing_options) {
      if (this.state.sharing_options.hasOwnProperty(property)) {
        var defaultChecked = this.props.sharing_setting == property;
        inputs.push(<input type="radio" className="radio sharing-settings-radio" name="sharing_setting_radio_selection" value={property} onChange={this.handleChange} defaultChecked={defaultChecked}> {this.state.sharing_options[property]} </input>)
      }
    }
    return inputs;
  },

  render: function() {
    return (
      <div id="profile-sharing-view">
          {this.constructInputFields()}
          <div> Your sharing is set to {this.state.sharing_setting} </div>
      </div>
    );
  }
});
