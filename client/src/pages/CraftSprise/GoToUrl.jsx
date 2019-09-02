/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';

const GoToUrl = ({ spriseUrl, newSprise }) => (
  <div className="center">
    <h1 style={{color:'rgb(15, 116, 211)'}}>Congratulations!</h1>
    <div className="call-to-action">Checkout your newly created Sprise <a href={spriseUrl}>here</a>!</div>
    <br />
    <br />
    <button type="button" className="btn btn-primary" onClick={newSprise}>
      Send a new Sprise!
    </button>
  </div>
)

GoToUrl.propTypes = {
  spriseUrl: PropTypes.string.isRequired,
  newSprise: PropTypes.func.isRequired
};

export default GoToUrl;
