import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';

class SignUpPage extends React.Component {
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
    Accounts.createUser({ email, password }, (err) => {
      console.log('Sign up callback', err);
    });

    // this.setState({
    //   error: 'something went wrong',
    // });
  }

  btnSignUp_click() {
    this.props.history.push('/links');
  }

  render() {
    return (
      <div>
        <h1>Join Short Lnk</h1>
        
        {this.state.error ? <p>{this.state.error}</p> : undefined}

        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="email" ref={(input) => { this.emailInput = input; }} name="email" placeholder="Email" />
          <input type="password" ref={(input) => { this.passwordInput = input; }} name="password" placeholder="Password" />
          <button>Create Account</button>
        </form>

        <Link to="/login">Already have an account?</Link>
      </div>
    );
  }
}

export default withRouter(SignUpPage);
