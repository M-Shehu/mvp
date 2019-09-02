/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const SignedInButtons = ({ name }) => (
  <>
    <h2 style={{fontSize: "18px"}}>Welcome back {name}!</h2>

    <Link to={ROUTES.HOME}>
      <button id="signup" type="button">Craft a new surprise</button>
    </Link>
    <p id="login">
        User profiles coming soon 
    </p>
  </>
);


SignedInButtons.defaultProps = {
  name: 'Anonymous'
};

SignedInButtons.propTypes = {
  name: PropTypes.string
};

export default SignedInButtons;
