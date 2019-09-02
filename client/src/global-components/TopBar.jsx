/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const TopBar = ({ mode, errorMessage }) => {
  let content = '';
  let theme = '';
  if (mode === 'error') {
    content = `There is an error: ${errorMessage}`;
    theme = 'red-error-top-bar';
  }

  return ( 
    <div id="sticky" className={theme}>
      {content}
    </div>
    )
}

TopBar.defaultProps = {
  errorMessage: ''
}

TopBar.propTypes = {
  mode: PropTypes.string.isRequired,
  errorMessage: PropTypes.string
}

export default TopBar;
