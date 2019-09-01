import React from 'react';
import axios from 'axios';
import Navigation from '../components/Navigation';

import backImage from '../assets/images/sprise-back.svg';
import secondBackImage from '../assets/images/sprise-back-second.svg';
import '../assets/styles/Sprise.css'

const Time = (props) => (
  <div className="sprise-container">
    <span className="span-3">{props.surprise}</span>
    <span className="span-1">{props.time}</span>
  </div>
)

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

window.addEventListener('scroll', () => {
  const messageBoxes =  document.querySelectorAll('.message-box');
  const pictures = document.querySelectorAll('.background');

  messageBoxes.forEach(messageBox => {
    messageBox.style.transform = `translateY(${ 600 - window.pageYOffset * 4 / 10}px)`;
  })

  pictures.forEach(picture => {
    picture.style.transform = `translateY(${ - window.pageYOffset * 1 / 10}px)`;
  })
}, false)


class SprisePage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      sprisee: '',
      message1: '',
      message2: '',
      message3: '',
      lastMessage: '',
      surprises: [],
      occassion: ''
    }
  }

  componentDidMount() {
    const { spriseId } = this.props.match.params;
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
        message3: response.data.message3,
        lastMessage: response.data.lastMessage,
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
            {<BannerElements occasion='Happy Birthday' />}
          </h1>
          <h1 className="sprisee-name">Sheldon</h1>
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
              This is a heart felt message I had to write you. 
              This is a heart felt message I had to write you.
              This is a heart felt message I had to write you.
              This is a heart felt message I had to write you
            </h3>
          </div>
          <div className="background first-background">
            <img src={backImage} alt="first-background" height="500" />
          </div>

          

          <div className="message-box">
            <h3>
              I just want to let you know that I love you.
              This is a heart felt message I had to write you.
              This is a heart felt message I had to write you.
              This is a heart felt message I had to write you
            </h3>
          </div>
          <div className="background second-background">
            <img src={secondBackImage} alt="second-background" height="500" />
          </div>
          {message1}
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

export default SprisePage;