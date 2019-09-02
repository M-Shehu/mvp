import React from 'react';
import PropTypes from 'prop-types';

const Time = ({ surprise, time }) => (
  <div className="sprise-container">
    <span className="span-3">{surprise}</span>
    <span className="span-1">{time}</span>
  </div>
);

Time.propTypes = {
  surprise: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
}

export default Time;
