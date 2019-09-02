/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const SpriseCard = ({ onChange, currentSprise, spriseCardButton, deleteSpriseCard, currentTime, surprises, index }) => {
  return (
    <div className="sprise" id={index}>
      <button type="button" className="sprise-delete-button" onClick={deleteSpriseCard}>x</button>
      <div className="sprise-name">
        <h4>Surpise</h4>
        <input 
          type="text" 
          className="sprise-card-input"
          id="currentSprise"
          name="currentSprise"
          onChange={onChange} 
          value={currentSprise} 
        />
        <h5 className="sprise-card-header">{surprises[index] && surprises[index].surprise}</h5>
      </div>
      <div className="sprise-time">
        <h4>Time</h4>
        <input 
          className="sprise-card-input"
          type="time" 
          name="currentTime"
          onChange={onChange} 
          value={currentTime} 
        />
        <h5 className="sprise-card-header">{surprises[index] && surprises[index].time}</h5>
      </div>
      <button type="button" className="add-edit-button" onClick={spriseCardButton}>
        Add
      </button>
    </div>
  )
}

SpriseCard.propTypes = {
  onChange: PropTypes.func.isRequired,
  currentSprise: PropTypes.string.isRequired,
  spriseCardButton: PropTypes.func.isRequired,
  deleteSpriseCard: PropTypes.func.isRequired,
  currentTime: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
  surprises: PropTypes.arrayOf(PropTypes.shape({
    surprise: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired
  })).isRequired
};

export default SpriseCard;
