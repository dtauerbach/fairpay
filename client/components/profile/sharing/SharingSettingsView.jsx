var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
  render: function() {
    var display_text = this.props.sharing_setting;
    return (
      <div className='sharing-view'>
          <Link to='sharing'><h2>My Sharing Setting</h2></Link>
          <ul>
              <li className='question answered-question'>
                  <Link to='sharing'> {display_text} </Link>
              </li>
          </ul>
      </div>
    );
  }
});
