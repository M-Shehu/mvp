/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import axios from 'axios';
import Lottie from 'react-lottie';
// import SignOut from './Authentication/SignOut.jsx';
import { withAuthorization } from '../Session';
import Navigation from '../components/Navigation';
import womanNod from '../assets/lottie/16-avatar-woman-nodding-outline.json';
import earthSpinning from '../assets/lottie/3169-world.json';
import typing from '../assets/lottie/5941-jumbo-typing.json';

import '../assets/styles/Home.css';

const INITIAL_STATE = {
  currentSprise: '',
  currentTime: '',
  email: '',
  sprisee: '',
  message1: '',
  message2: '',
  message3: '',
  phoneNumber: '',
  lastMessage: '',
  surprises: [],
  isSuccessful: false,
  spriseUrl: '',
  occassion: ''
};

const GoToUrl = (props) => (
  <div className="center">
    <h1 style={{color:'rgb(15, 116, 211)'}}>Congratulations!</h1>
    <div className="call-to-action">Checkout your newly created Sprise <a href={props.spriseUrl}>here</a>!</div>
    <br />
    <br />
    <button className="btn btn-primary" onClick={props.newSprise}>
      Send a new Sprise!
    </button>
  </div>
)

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
    message3,
    phoneNumber,
    lastMessage,
    surprises,
    currentSprise,
    currentTime,
    occassion
  } = props;
  
  return (
    <div className="page">
      <div className="container vertical axis-center">
        <h1>Let&apos;s Get Started!</h1>
      </div>

      <div className="container horizontal" id="contact-details">
        <div className="first-half container vertical main-center">
          <div className="container horizontal">
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
          <h3>We&apos;ll send them an email and SMS at the time you specify</h3>
          
        </div>

        <form className="container vertical second-half" onSubmit={(e) => props.onSubmit(e)}>
          <label htmlFor="sprisee">Please put in the name of the <em>sprisee!</em> <span>*</span>
            <input
              className="signInput"
              id="sprisee"
              name="sprisee"
              value={sprisee}
              onChange={props.onChange}
              type="text"
              placeholder="Sprisee"
            />
          </label>
          <label htmlFor="phoneNumber">Put in their phone number so they can receive this (Optional)
            <input
              className="signInput"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={props.onChange}
              type="number"
              placeholder="Phone Number"
            />
          </label>
          <label htmlFor="email">Put in their email address as well <span>*</span>
            <input
              className="signInput"
              id="email"
              name="email"
              value={email}
              onChange={props.onChange}
              type="email"
              placeholder="Email Address"
            />
          </label>
        </form>
      </div>

      <div id="occasion" className="container horizontal">
        <div className="first-half container vertical main-center">
          <div className="container">
            <h2>Time to set the mood</h2>
          </div>
          <h3>What occasion is this and what colour would you prefer?</h3>
        </div>
        <form className="second-half container vertical">
          <label htmlFor="occasion">What&apos;s the occassion? <span>*</span>
            <div>
              <select name="occasion" className="pink-theme" onChange={props.onChange}>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Ordinary Day">Ordinary Day</option>
                <option value="Ordinary Day">Appreciation</option>
              </select>
            </div>
          </label>
          <label htmlFor="color">Pick a color to set the mood. We&apos;ll set it for you if you would rather not (Optional)
            <div>
              <select name="occasion" className="pink-theme" onChange={props.onChange}>
                <option value="Pink">Pink Theme</option>
                <option value="Blue">Blue Theme</option>
                <option value="Dark">Dark Theme</option>
                <option value="Dark">Light Theme</option>
              </select>
            </div>
          </label>
        </form>
      </div>

      <div id="message" className="container horizontal">
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
              onChange={props.onChange}
              type="text"
              placeholder="How did you meet?"
            />   
            <button className="generate pink-theme" type="button">
              AutoGenerate
            </button>
          </label>

          <label htmlFor="message2">More cheesy things. <em>Hint: Talk about what you cherish about them</em> (Optional)
            <textarea
              className="textbox"
              name="message2"
              id="message2"
              value={message2}
              onChange={props.onChange}
              type="text"
              placeholder="What do you cherish about them?"
            />
            <button className="generate pink-theme" type="button">
              AutoGenerate
            </button>
          </label>
        </form>
      </div>




      <div className="last-section vertical axis-center">
        <div className="container vertical main-center axis-center">
          <label htmlFor="date-picker">Please select a date you want this to be sent<span>*</span>
            <select name="date-picker" className="white-theme" onChange={props.onChange}>
              <option value="Today">Today</option>
              <option value="Tomorrow">Tomorrow</option>
              <option value="Ordinary Day">A Future Date</option>
            </select>
          </label>
          {/* <label htmlFor="date-picker" id="sprise-time">At what time?<span>*</span>
            <div className="">
              <input 
                type="time"
                className="signInput"
                name="currentTime"
                value={currentTime}
                onChange={props.onChange}
              />  
            </div>
          </label> */}
        </div>
        <div className="container horizontal spriseBox">
          <div className="container vertical sprise-info first-half">
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
              <h3><span id="here">Click here</span> to get ideas on what surprises to add. You can send money as well</h3>
            </div>
            
            
            <div className="number-of-sprise container main-spread-between">
              <div className="container vertical axis-center">
                <p className="info-number">4</p>
                <p className="info-label">Surprises</p>
              </div>
              <div className="container vertical axis-center">
                <p className="info-number">₦3,000</p>
                <p className="info-label">To be paid</p>
              </div>
            </div>

            <div className="sprise-info-footer container main-center">
              <img data-v-9507dd48="" src="https://checkout.paystack.com/static/img/secure-white.e212765.svg" alt="Secured by Paystack" className="footer__wordmark footer__wordmark--white" />
            </div>
          </div>


          <div className="container vertical second-half">
            <div className="sprise-list">
              <div className="sprise">
                <div className="sprise-name">
                  <h4>Surpise</h4>
                  <h5>Trip to the beach</h5>
                </div>
                <div className="sprise-time">
                  <h4>Time</h4>
                  <h5>12:00am</h5>
                </div>
                <button type="button">
                  Edit
                </button>
              </div>

              <div className="sprise">
                <div className="sprise-name"> 
                  <h4>Surpise</h4>
                  <h5>Wedding Ring</h5>
                </div>
                <div className="sprise-time">
                  <h4>Time</h4>
                  <h5>12:00am</h5>
                </div>
                <button type="button">
                  Edit
                </button>
              </div>

              <div className="sprise">
                <div className="sprise-name">
                  <h4>Surpise</h4>
                  <h5>Travel To Italy</h5>
                </div>
                <div className="sprise-time">
                  <h4>Time</h4>
                  <h5>12:00am</h5>
                </div>
                <button type="button">
                  Edit
                </button>
              </div>

              <div className="sprise">
                <div className="sprise-name">
                  <h4>Surpise</h4>
                  <h5>Travel To Italy</h5>
                </div>
                <div className="sprise-time">
                  <h4>Time</h4>
                  <h5>12:00am</h5>
                </div>
                <button type="button">
                  Edit
                </button>
              </div>
            </div>
            <div className="sprise-buttons container main-spread-between">
              <button className="generate white-theme" type="button">
                Add new surprise
              </button>
            </div>
          </div>
        </div>
        {/* <h3>Sprise List:</h3>
        <div id="spriseList">
          
        </div>
        <input
          className="signInput"
          name="currentSprise"
          value={currentSprise}
          onChange={props.onChange}
          type="text"
          placeholder="Add a sprise:"
        />
        <label htmlFor="appt">Choose a time for the surprise:
          <input 
            type="time"
            className="signInput"
            name="currentTime"
            value={currentTime}
            onChange={props.onChange}
          />          
        </label>

        <button className="btn btn-primary btn-circular" onClick={(e) => props.addSurprise(e)}>
          +
        </button> */}
        <button className="next" type="submit">
          Preview the surprise!
        </button>

        <div>
          footer
        </div>
      </div>
        
    </div>
  )
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };

  }

  componentDidMount() {
    
    console.log()
  }
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addSurprise(e) {
    e.preventDefault();
    var para = document.createElement("p");
    var node = document.createTextNode(`${this.state.currentSprise} @ ${this.state.currentTime}`);
    para.appendChild(node);
    var surprises = this.state.surprises;
    surprises.push({
      surprise: this.state.currentSprise,
      time: this.state.currentTime
    })
    this.setState({
      surprises: surprises
    })
    var element = document.getElementById("spriseList");
    element.appendChild(para);
    this.setState({
      currentSprise: '',
    })
  }

  newSprise() {
    this.setState({
      isSuccessful: false,
      sprisee: '',
      message1: '',
      message2: '',
      message3: '',
      phoneNumber: '',
      lastMessage: '',
      surprises: [],
      spriseUrl: '',
      currentSprise: '',
      currentTime: '',
    })
  }

  onSubmit(e) {
    const {
      sprisee,
      message1,
      message2,
      message3,
      phoneNumber,
      lastMessage,
      surprises,
      occassion,
    } = this.state;

    e.preventDefault();
    axios.post('/sprisedirect', {
      sprisee: sprisee,
      message1: message1,
      message2: message2,
      message3: message3,
      lastMessage: lastMessage,
      phoneNumber: phoneNumber,
      occassion: occassion,
      surprises: surprises,
    })
    .then(response => {
      if (response.status === 200) {
        this.setState({
          isSuccessful: true,
          spriseUrl: `http://localhost:3456/sprisedirect/${response.data}`
        })
      }
    })
  }

  render() {
    const {
      sprisee,
      message1,
      message2,
      message3,
      phoneNumber,
      lastMessage,
      surprises,
      currentSprise,
      currentTime,
      isSuccessful,
      spriseUrl,
      occassion
    } = this.state;

    const type = 'home';
    return (
      <div className="container vertical">
        <Navigation type={type} test={{rad:'rad'}} />
        {!isSuccessful ? 
          (
            <Form 
              sprisee={sprisee}
              message1={message1}
              message2={message2}
              message3={message3}
              phoneNumber={phoneNumber}
              lastMessage={lastMessage}
              surprises={surprises}
              onChange={e => this.onChange(e)}
              addSurprise={e => this.addSurprise(e)}
              onSubmit={e => this.onSubmit(e)}
              currentSprise={currentSprise}
              currentTime={currentTime}
            />
          ) : 
          (
            <GoToUrl 
              spriseUrl={spriseUrl}
              newSprise={e => this.newSprise(e)}
            />
          )}
      </div>
    );
  }
};

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);