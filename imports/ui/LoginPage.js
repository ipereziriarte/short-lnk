import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
    };
  }

  onSubmit(e) {
    e.preventDefault();
    let email = this.emailInput.value.trim();
    let password = this.passwordInput.value;

    Meteor.loginWithPassword({ email }, password, (err) => {
      console.log('Login callback', err);
    });
  }

  btnSignIn_click() {
    this.props.history.push('/links');
  }

  render() {
    return (
      <div>
        <h1>Short Lnk</h1>
          
        {this.state.error ? <p>{this.state.error}</p> : undefined}

        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="email" ref={(input) => { this.emailInput = input; }} name="email" placeholder="Email" />
          <input type="password" ref={(input) => { this.passwordInput = input; }} name="password" placeholder="Password" />
          <button>Login</button>
        </form>
        <p>
          <Link to="/signup">Don&apos;t have an account?</Link>
        </p>
      </div>
    );
  }
}

export default withRouter(LoginPage);
