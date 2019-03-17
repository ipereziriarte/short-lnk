import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';

class LinkPage extends React.Component {
  onLogout() {
    Accounts.logout();
  }

  render() {
    return (
      <div>
        <h1>This is your LinkPage</h1>
        <button onClick={this.onLogout.bind(this)}>LogOut</button>
      </div>
    );
  }
}

export default withRouter(LinkPage);
