/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const NotSignedInButtons = ({ signUpSubmit, logInSubmit }) => (
  <>
    <h2>Make the day a special one by sending a beautiful message and setting up the best surprises</h2>

    <button id="signup" type="button" onClick={signUpSubmit}>Sign Up to Start</button>
    <button id="login" type="button" onClick={logInSubmit} target="_blank" rel="noopener noreferrer">
      Or if you have an account, 
      <span> log in instead</span>
    </button>
  </>
);

NotSignedInButtons.propTypes = {
  signUpSubmit: PropTypes.func.isRequired,
  logInSubmit: PropTypes.func.isRequired
};

export default NotSignedInButtons;