var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {sharing_setting: 'private'};
  },

  handleChange: function(event) {
    this.setState({sharing_setting: event.target.value});
    this.props.saveValues({sharing_setting: event.target.value});
  },

  render: function() {
    return (
      <div id="profile-sharing-view">
          <input type="radio" className="radio sharing-settings-radio" name="sharing_setting_radio_selection" value="private" onChange={this.handleChange}> Private </input>
          <input type="radio" className="radio sharing-settings-radio" name="sharing_setting_radio_selection" value="full" onChange={this.handleChange}> Full </input>
          <div> Your sharing is set to {this.state.sharing_setting} </div>
      </div>
    );
  }
});
