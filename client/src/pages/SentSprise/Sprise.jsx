/* eslint-disable max-len */
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import Navigation from '../../global-components/Navigation';
import Time from './Time';
import BannerElements from './BannerElements';

import backImage from '../../assets/images/sprise-back.svg';
import secondBackImage from '../../assets/images/sprise-back-second.svg';
import '../../assets/styles/Sprise.css'

window.addEventListener('scroll', () => {
  const messageBoxes =  document.querySelectorAll('.message-box');
  const pictures = document.querySelectorAll('.background');

  messageBoxes.forEach(messageBox => {
    const messageBoxElement = messageBox;
    messageBoxElement.style.transform = `translateY(${ 600 - window.pageYOffset * 4 / 10}px)`;
  })

  pictures.forEach(picture => {
    const pictureElement = picture;
    pictureElement.style.transform = `translateY(${ - window.pageYOffset * 1 / 10}px)`;
  })
}, false)


class SprisePage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      sprisee: '',
      message1: '',
      message2: '',
      surprises: [],
      occasion: ''
    }
  }

  componentDidMount() {
    const { match:{spriseId} } = this.props;
    this.retrieveSprise(spriseId);

    
  }

  retrieveSprise(id) {
    axios.get(`/api/sprisedirect/${id}`)
    .then(response => {
      this.setState({
        sprisee: response.data.sprisee,
        occasion: response.data.occasion,
        message1: response.data.message1,
        message2: response.data.message2,
        surprises: response.data.surprises
      })
    })
  }

  render() {
    const { sprisee, message1, message2, occasion, surprises } = this.state;
    return (
      <div className="content setup">
        <Navigation type="sprise" />
        <div className="column vertical main-center axis-center text-center sprisee-banner">
          <h1 className="occasion-top">
            {<BannerElements occasion={`Happy ${occasion}`} />}
          </h1>
          <h1 className="sprisee-name">{sprisee}</h1>
          <div className="sender">
            <div className="with-love">
              With love:&nbsp;
            </div> 
            <div className="from-name"> 
              <span>from Shehu</span>
            </div>
          </div>
        </div>
        <div className="messages-container vertical axis-center main-center">
          <div className="message-box">
            <h3>
              {message1}
            </h3>
          </div>
          <div className="background first-background">
            <img src={backImage} alt="first-background" height="500" />
          </div>

          

          <div className="message-box">
            <h3>
              {message2}
            </h3>
          </div>
          <div className="background second-background">
            <img src={secondBackImage} alt="second-background" height="500" />
          </div>
        </div>
        
        <div className="sprises container vertical main-center axis-center">
          <h2>Your Surprises</h2>
          <h3>You have 3 surprises waiting for you. Please enable notifications to know when they get unlocked</h3>
          <div className="sprise-container">
            <span className="span-3">To the beach</span>
            <span className="span-1">12:00am</span>
          </div>

          <div className="sprise-container">
            <span className="span-3">To the beach</span>
            <span className="span-1">12:00am</span>
          </div>

          <div className="sprise-container">
            <span className="span-3">To the beach</span>
            <span className="span-1">12:00am</span>
          </div>

          
          {surprises.map(element => (
            <Time surprise={element.surprise} time={element.time} />
          ))}
        </div>
      </div>
    )
  }
  
};

SprisePage.propTypes = {
  match: PropTypes.shape({
    spriseId: PropTypes.string.isRequired
  }).isRequired
}

export default SprisePage;