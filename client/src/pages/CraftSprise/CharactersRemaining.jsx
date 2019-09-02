/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';

const CharactersRemaining = ({ number }) => (
  <div>Characters remaining: {number}</div>
);

CharactersRemaining.propTypes = {
  number: PropTypes.number.isRequired
}
export default CharactersRemaining;
