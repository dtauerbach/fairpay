var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      sharing_options: {
        private_setting: {
          short_name: 'Private',
          description: 'Please share my data only in aggregated views',
          mouseover: 'By choosing this setting, you will only have access to coarse aggregated views. Also note that while it is unlikely that your data could be identified from such views and it is against our Terms of Use to attempt to identify data with particular individuals, it is *possible* that certain aspects of this data could be de-anonymized, and our service does not take responsibility in this case. For more information, please check out our privacy policy.',
          appearance: 'private_apperance.svg',
        },
        full_setting: {
          short_name: 'Full',
          description: 'Please share my data with other FairPay users',
          mouseover: 'By choosing this setting, you will have access to the raw compensation data points of other users. No personally identifying information (such as your email address, LinkedIn account details) will be included in the data set. While it is against our Terms of Use to attempt to identify aspects of data as belonging or likely belonging to particular invdividuals, it is possible the information you provide could be identifying. For example, if your title is "The One and Only Performance Ninja", that may allow others to identify your compensation details.',
          appearance: 'public_apperance.svg'
        }
      }
    };
  },

  handleChange: function(event) {
    this.props.saveValues({sharing_setting: event.target.value});
  },

  constructInputFields: function() {
    var inputs = [];
    for (var property in this.state.sharing_options) {
      var sharing_setting = this.state.sharing_options[property];
      var defaultChecked = this.props.sharing_setting == property;
      inputs.push(
          <div>
            <label className="sharing-settings-label">
              <input type="radio" className="sharing-settings-radio" name="sharing_setting_radio_selection" value={sharing_setting.short_name} onChange={this.handleChange} defaultChecked={defaultChecked}> {sharing_setting.short_name} </input>
            </label>
          </div>
      )
    }
    return inputs;
  },

  render: function() {
    return (
      <div className="profile-sharing-view" className="col-md-8">
          {this.constructInputFields()}
      </div>
    );
  }
});
