import React from 'react';
import PropTypes from 'prop-types';

const BannerElements = ({ occasion }) => {
  const occasionArray = occasion.split('');
  const elementString = [];
  occasionArray.forEach(element => {
    if (element === ' ') {
      elementString.push(' ');
    } else {
      elementString.push(<span>{`${element}`}</span>)
    }
  })
  return elementString;
}

BannerElements.propTypes = {
  occasion: PropTypes.string.isRequired
}

export default BannerElements;
