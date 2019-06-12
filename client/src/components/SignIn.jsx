import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { SignUpLink } from './SignUp.jsx';
import { PasswordForgetLink } from './PasswordForget.jsx';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../constants/routes';
<<<<<<< HEAD

const SignInPage = () => (
  <div>
    <h1>SignIn</h1>
    <SignInForm />
    <PasswordForgetLink />
    <SignUpLink />
=======
import Navigation from './Navigation.jsx';
import SignUpStyle from '../assets/styles/SignUp.css';

const SignInPage = () => (
  <div>
    <Navigation />
    <SignInForm />
>>>>>>> ad1de51fe794463c1d36478fd2354d75430cf129
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
<<<<<<< HEAD
=======
          className="signInput"
>>>>>>> ad1de51fe794463c1d36478fd2354d75430cf129
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
<<<<<<< HEAD
        <button disabled={isInvalid} type="submit">
=======
        <button className="btn btn-primary" disabled={isInvalid} type="submit">
>>>>>>> ad1de51fe794463c1d36478fd2354d75430cf129
          Sign In
        </button>

        {error && <p>{error.message}</p>}
<<<<<<< HEAD
=======
        <PasswordForgetLink />
        <SignUpLink />
>>>>>>> ad1de51fe794463c1d36478fd2354d75430cf129
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