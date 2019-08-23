import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { SignUpLink } from './SignUp.jsx';
import { PasswordForgetLink } from './PasswordForget.jsx';
import { withFirebase } from '../../Firebase';
import * as ROUTES from '../../constants/routes';
import Navigation from '../../components/Navigation.jsx';
import '../../assets/styles/SignUp.css';

const SignInPage = () => (
  <div>
    <Navigation />
    <SignInForm />
  </div>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <h1 style={{color:'rgb(15, 116, 211)'}}>Welcome Back</h1>
        <input
          className="signInput"
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          className="signInput"
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <button className="btn btn-primary" disabled={isInvalid} type="submit">
          Sign In
        </button>

        {error && <p>{error.message}</p>}
        <PasswordForgetLink />
        <SignUpLink />
      </form>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm };