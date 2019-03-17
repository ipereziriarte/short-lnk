import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tracker } from 'meteor/tracker';
import { Switch, Route } from 'react-router';
import { withRouter } from 'react-router-dom';

import Login from './LoginPage';
import SignUp from './SignUpPage';
import Link from './LinkPage';
import NotFound from './NotFound';


class App extends Component {
  state = {
    unauthPages: ['/', '/signup'],
    authPages: ['/links'],
  };

  componentDidMount() {
    Tracker.autorun(this.onAutoRun);
  }

  onAutoRun = () => {
    const isAuthenticated = !!Meteor.userId();
    const { pathname } = this.props.location;
    const { authPages, unauthPages} = this.state;
    const isAuthPage = authPages.includes(pathname);
    const isUnauthPage = this.state.unauthPages.includes(pathname);
  
    if (isAuthenticated && isUnauthPage) {
      this.props.history.push('/links');
    } else if (!isAuthenticated && isAuthPage) {
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/links" component={Link} />
        <Route path="*" component={NotFound} />
      </Switch>
    );
  }
}

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};

export default withRouter(App);
