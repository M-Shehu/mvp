/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import Lottie from 'react-lottie';
import PhoneInput from 'react-phone-number-input';

import SpriseCard from './SpriseCard';
import CharactersRemaining from './CharactersRemaining';
import TopBar from '../../global-components/TopBar';

import INITIAL_STATE from './initialState';
import womanNod from '../../assets/lottie/16-avatar-woman-nodding-outline.json';
import earthSpinning from '../../assets/lottie/3169-world.json';
import typing from '../../assets/lottie/5941-jumbo-typing.json';
import '../../assets/styles/Home.css';

const defaultOptions = {
  loop: true,
  autoplay: true, 
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const Form = (props) => {
  const {
    sprisee,
    email,
    message1,
    message2,
    phoneNumber,
    autogenerateMessage,
    surprises,
    newSpriseCard,
    currentSprise,
    chooseTime,
    currentTime,
    onSubmit,
    sendDateSelection,
    errorMessage,
    isError,
    updatePhoneNumber,
    occasion,
    color,
    onChange,
    deleteSpriseCard,
    spriseeCharacters,
    message1Characters,
    message2Characters,
    characterChange
  } = props;
  
  return (
    <div className="page">
      <div className="container vertical axis-center text-center banner">
        <h1>Let&apos;s Get Started!</h1>
      </div>

      <div className="container section" id="contact-details">
        <div className="first-half container vertical main-center">
          <div className="container let-know">
            <h2>
              Let&apos;s get to know<br />
              that special someone
            </h2>
            <div>
              <Lottie 
                options={{ ...defaultOptions, ...{animationData: womanNod}}}
                height={70}
                width={70}
              />
            </div>
          </div>
          <h3>We&apos;ll send them an SMS and email at the time you specify. Feature to send to their WhatsApp number coming soon!</h3>
          
        </div>

        <form className="container vertical second-half" onSubmit={(e) => onSubmit(e)}>
          <label htmlFor="sprisee">Please put in the preferred name of the <em>sprisee!</em> (Nickname or firstname) <span>*</span>
            <input
              className="signInput normal-input"
              id="sprisee"
              name="sprisee"
              value={sprisee}
              maxLength="15"
              onChange={e => {
                onChange(e)
                characterChange(e)
              }}
              type="text"
              placeholder="Sprisee"
            />
            <CharactersRemaining number={spriseeCharacters} />
          </label>
          <label>Put in their phone number so they can receive this (Optional)
            <PhoneInput
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={value => updatePhoneNumber(value)}
              placeholder="Enter Phone Number of the person" 
            />
          </label>
          <label htmlFor="email">Put in their email address as well (Optional)
            <input
              className="signInput normal-input"
              id="email"
              name="email"
              value={email}
              onChange={onChange}
              type="email"
              placeholder="Email Address"
            />
          </label>
        </form>
      </div>

      <div id="occasion" className="container section">
        <div className="first-half container vertical main-center">
          <div className="container">
            <h2>Time to set the mood</h2>
          </div>
          <h3>What occasion is this and what colour would you prefer?</h3>
        </div>
        <form className="second-half container vertical">
          <label htmlFor="occasion">What&apos;s the occasion? <span>*</span>
            <div>
              <select name="occasion" className="pink-theme normal-select" value={occasion} onChange={onChange}>
                <option value="select" disabled>Please select an occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Ordinary Day">Ordinary Day</option>
                <option value="Ordinary Day">Appreciation</option>
              </select>
            </div>
          </label>
          <label htmlFor="color">Pick a color to set the mood. We&apos;ll set it for you if you would rather not (Optional)
            <div>
              <select name="color" className="pink-theme normal-select" value={color} onChange={onChange}>
                <option value="Blue">Blue Theme</option>
                <option value="Pink">Pink Theme</option>
                <option value="Dark">Dark Theme</option>
                <option value="Dark">Light Theme</option>
              </select>
            </div>
          </label>
        </form>
      </div>

      <div id="message" className="container section">
        <div className="first-half container vertical main-center">
          <div className="container">
            <h2>Now unto the cheesy stuff</h2>
          </div>
          <h3>Pour your heart out. Don&apos;t know what to say? Click the autogenerate button or just leave it blank. We got you</h3>
          <div>
            <Lottie 
              options={{ ...defaultOptions, ...{animationData: typing}}}
              height={200}
              width={200}
            />
          </div>
        </div>

        <form className="second-half container vertical main-center">
          <label htmlFor="message1">Put in something cheesy here. <em>Hint: Talk about the first time you met</em> (Optional)
            <textarea
              className="textbox"
              name="message1"
              id="message1"
              value={message1}
              onChange={e => {
                onChange(e)
                characterChange(e)
              }}
              type="text"
              maxLength="200"
              placeholder="How did you meet?"
            />   
            <CharactersRemaining number={message1Characters} />
            <button className="generate pink-theme" id="generate-1" onClick={autogenerateMessage} type="button">
              AutoGenerate
            </button>
          </label>

          <label htmlFor="message2">More cheesy things. <em>Hint: Talk about what you cherish about them</em> (Optional)
            <textarea
              className="textbox"
              name="message2"
              id="message2"
              value={message2}
              maxLength="200"
              onChange={e => {
                onChange(e);
                characterChange(e)
              }}
              type="text"
              placeholder="What do you cherish about them?"
            />
            <CharactersRemaining number={message2Characters} />
            <button className="generate pink-theme" id="generate-2" onClick={autogenerateMessage} type="button">
              AutoGenerate
            </button>
          </label>
        </form>
      </div>



 
      <div className="last-section section vertical axis-center">
        <div className="container vertical main-center axis-center">
          <label id="date-picker-label" htmlFor="date-picker">Please select a date you want this to be sent<span>*</span>
            <select name="date-picker" value={sendDateSelection} className="white-theme normal-select" onChange={onChange}>
              <option value="select" disabled>Please select a date</option>
              <option value="Today">Today</option>
              <option value="Tomorrow">Tomorrow</option>
              <option value="Future">A Future Date</option>
            </select>
          </label>
          <label id="time-picker-label" htmlFor="date-picker">At what time?<span>*</span>
            <div className="">
              <input 
                type="time"
                className="signInput normal-input"
                name="currentTime"
                value={currentTime}
                onChange={onChange}
              />  
            </div>
          </label>
          <label id="future-date-picker-label" htmlFor="date-picker">Please choose a date<span>*</span>
            <div className="">
              <input 
                type="date"
                className="signInput normal-input"
                name="currentTime"
                value={currentTime}
                onChange={onChange}
              />  
            </div>
            <button type="button" onClick={chooseTime}>
              Next
            </button>
          </label>
        </div>
        <div className="spriseBox">
          <div className="sprise-info">
            <div>
              <Lottie 
                options={{ ...defaultOptions, ...{animationData: earthSpinning}}}
                height={70}
                width={70}
              />
            </div>
            <div className="tagline container vertical axis-center">
              <h2>
                Surprises make <br />
                the world go round
              </h2>
              <h3><span id="highlight">Click here</span> to get ideas on what surprises to add. The feature to send money is coming soon</h3>
            </div>
      
      
            <div className="number-of-sprise container main-spread-between">
              <div className="info-tag">
                <p className="info-number">{surprises.length}</p>
                <p className="info-label">Surprises</p>
              </div>
              <div className="info-tag">
                <p className="info-number">₦0</p>
                <p className="info-label">To be paid</p>
              </div>
            </div>
            <div className="sprise-info-footer container main-center">
              <img data-v-9507dd48="" src="https://checkout.paystack.com/static/img/secure-white.e212765.svg" alt="Secured by Paystack" className="footer__wordmark footer__wordmark--white" />
            </div>
          </div>
          <div className="sprise-list-container">
            <div className="sprise-list">
              
              {(surprises.length === 0) ?  <h3>No surprises have been added. Add them using the button below</h3> : surprises.map(({ button }, index) => (
                <SpriseCard
                  onChange={e => onChange(e)}
                  currentSprise={currentSprise}
                  currentTime={currentTime}
                  deleteSpriseCard={deleteSpriseCard}
                  spriseCardButton={button} 
                  index={index}
                  surprises={surprises}
                />
              ))}
              
            </div>
            <div className="sprise-buttons container main-spread-between">
              <button className="generate white-theme" type="button" onClick={newSpriseCard}>
                Add new surprise
              </button>
            </div>
          </div>
        </div>

        <button className="submit-button" type="submit">
          Preview the surprise!
        </button>
      </div>
   
    </div>
  )
}

Form.defaultProps = { ...INITIAL_STATE };

Form.propTypes = {
  sprisee: PropTypes.string,
  email: PropTypes.string,
  message1: PropTypes.string,
  message2: PropTypes.string,
  phoneNumber: PropTypes.string,
  autogenerateMessage: PropTypes.func.isRequired,
  surprises: PropTypes.arrayOf(PropTypes.shape({
    surprise: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    button: PropTypes.func.isRequired
  })),
  isError: PropTypes.bool,
  errorMessage: PropTypes.string,
  newSpriseCard: PropTypes.func.isRequired,
  sendDateSelection: PropTypes.string,
  currentSprise: PropTypes.string,
  chooseTime: PropTypes.func.isRequired,
  currentTime: PropTypes.string,
  occasion: PropTypes.string,
  color: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  deleteSpriseCard: PropTypes.func.isRequired,
  spriseeCharacters: PropTypes.number,
  message1Characters: PropTypes.number,
  message2Characters: PropTypes.number,
  characterChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}


export default Form;
