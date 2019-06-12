import React from 'react';
import SignOut from './SignOut.jsx';
import { withAuthorization } from '../Session';
import Navigation from './Navigation.jsx';
import axios from 'axios';
import HomeStyle from '../assets/styles/Home.css';

const INITIAL_STATE = {
  currentSprise: '',
  currentTime: '',
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
    <br/>
    <br/>
    <button className="btn btn-primary" onClick={props.newSprise}>
      Send a new Sprise!
    </button>
  </div>
)

const Form = (props) => {
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
    occassion
  } = props;
  return (
    <form onSubmit={(e) => props.onSubmit(e)}>
      <h1 style={{color:'rgb(15, 116, 211)'}}>Let's Start</h1>
      <h3 style={{color:'rgb(15, 116, 211)'}}>Please put in the name of the <em>sprisee!</em></h3>
      <input
        className="signInput"
        name="sprisee"
        value={sprisee}
        onChange={props.onChange}
        type="text"
        placeholder="Sprisee"
      />
      <h3 style={{color:'rgb(15, 116, 211)'}}>Put in their phone number as well so they can receive this</h3>
      <input
        className="signInput"
        name="phoneNumber"
        value={phoneNumber}
        onChange={props.onChange}
        type="number"
        placeholder="Phone Number"
      />

      <h3 style={{color:'rgb(15, 116, 211)'}}>What's the occassion?</h3>
      <div style={{width:"200px"}}>
        <select name="occassion" onChange={props.onChange}>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Ordinary Day">Ordinary Day</option>
        </select>
      </div>

      <h3 style={{color:'rgb(15, 116, 211)'}}>Put in something cheesy here. Hint: Talk about the first time you met</h3>
      <input
        className="signInput"
        name="message1"
        value={message1}
        onChange={props.onChange}
        type="text"
        placeholder="How did you meet?"
      />

      <h3 style={{color:'rgb(15, 116, 211)'}}>More cheesy things. Hint: Talk about what you cherish about them</h3>
      <input
        className="signInput"
        name="message2"
        value={message2}
        onChange={props.onChange}
        type="text"
        placeholder="What do you cherish about them?"
      />

      <h3 style={{color:'rgb(15, 116, 211)'}}>Any last messages?</h3>
      <input
        className="signInput"
        name="message3"
        value={message3}
        onChange={props.onChange}
        type="text"
        placeholder="Add something extra?"
      />

      <div className="spriseBox">
        <h3 style={{color:'rgb(15, 116, 211)'}}>Now unto the main event:</h3>
        <h4 style={{color:'rgb(15, 116, 211)'}}>Sprise List:</h4>
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
        <label for="appt">Choose a time for the surprise:</label>
        <input 
          type="time"
          className="signInput"
          name="currentTime"
          value={currentTime}
          onChange={props.onChange}
        />

        <button className="btn btn-primary btn-circular" onClick={(e) => props.addSurprise(e)}>
          +
        </button>
      </div>
      
      <button className="btn btn-primary" type="submit">
        Send the surprise!
      </button>
    </form>
  )
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };

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

    return (
      <div>
        <Navigation type={'home'} />
        {!isSuccessful ? 
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
            /> : 
          <GoToUrl 
            spriseUrl={spriseUrl}
            newSprise={e => this.newSprise(e)}
          />}
      </div>
    );
  }
};

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);