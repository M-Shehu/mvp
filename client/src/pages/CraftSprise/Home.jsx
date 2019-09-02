/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import axios from 'axios';

import { withAuthorization } from '../../Session';
// import { MessageInstance } from 'twilio/lib/rest/chat/v1/service/channel/message';
// import { SipList } from 'twilio/lib/rest/api/v2010/account/sip';

// import SignOut from './Authentication/SignOut.jsx';
import Navigation from '../../global-components/Navigation';
import GoToUrl from './GoToUrl';
import Form from './Form';
import Footer from '../../global-components/Footer';

import INITIAL_STATE from './initialState';
import TopBar from '../../global-components/TopBar';


class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onChange = (event) => {
    const node = event;
    this.setState({ [event.target.name]: node.value });
    const timePicker = document.querySelector('#time-picker-label');
    const futureDatePicker = document.querySelector('#future-date-picker-label');
    if (node.parentNode.id === 'date-picker-label') {
      node.parentNode.style.display = 'none';
      if (node.value === 'Future') {
        futureDatePicker.style.display = 'block';
      } else {
        timePicker.style.display = 'block';
      }
    }
  };

  onSubmit(e) {
    const {
      sprisee,
      message1,
      message2,
      phoneNumber,
      surprises,
      occasion,
    } = this.state;

    e.preventDefault();
    axios.post('/sprisedirect', {
      sprisee,
      message1,
      message2,
      phoneNumber,
      occasion,
      surprises,
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

  updatePhoneNumber = phoneNumber => {
    this.setState({ phoneNumber });
  }

  characterChange = event => {
    const initialNumber = INITIAL_STATE[`${event.target.name}Characters`];
    this.setState({ [`${event.target.name}Characters`]: initialNumber - event.target.value.length });
  }

  chooseTime = event => {
    const node = event.target;
    const timePicker = document.querySelector('#time-picker-label');
    node.parentNode.style.display = 'none';
    timePicker.style.display = 'block';
  }

  autogenerateMessage = event => {
    const { messagesBank } = this.state;
    let textAreaId;
    if (event.target.id === 'generate-1') {
      textAreaId = 'message1';
    } else if (event.target.id === 'generate-2') {
      textAreaId = 'message2';
    }
    const textArea = document.querySelector(`#${textAreaId}`);
    const randomNumber = Math.floor(Math.random() * messagesBank.length);
    textArea.value = messagesBank[randomNumber];
  }

  spriseCardButton = event => {
    const node = event.target;
    const spriseCardHeaders = document.querySelectorAll('.sprise-card-header')
    const spriseCardInputs = document.querySelectorAll('.sprise-card-input')
    if (node.innerHTML === 'Add') {
      spriseCardInputs.forEach(input => {
        const inputNode = input;
        inputNode.style.display = 'none';
      })
      spriseCardHeaders.forEach(header => {
        const headerNode = header;
        headerNode.style.display = 'block';
      })
      const { surprises, currentSprise, currentTime } = this.state;
      const surpriseList = surprises;
      surpriseList[surprises.length - 1] = ({...surpriseList[surprises.length - 1], ...{
        surprise: currentSprise,
        time: currentTime
      }})
      this.setState({
        surprises: surpriseList
      })
      node.innerHTML = 'Edit';
      this.setState({
        currentSprise: '',
        currentTime: ''
      })
    }
  }
        
  newSpriseCard = () => {
    const spriseListNode = document.querySelector('.sprise-list');
    const { surprises } = this.state;
    const newList = [...surprises, ...[
        {button: this.spriseCardButton} 
    ]]
    this.setState({surprises: newList});
    spriseListNode.scrollLeft = spriseListNode.scrollWidth;
  }

  deleteSpriseCard = event => {
    const spriseListNode = document.querySelector('.sprise-list');
    const spriseCardNodeIndex = event.target.parentNode.id;
    const { surprises } = this.state;
    surprises.splice(+spriseCardNodeIndex, 1)
    this.setState({surprises});
    spriseListNode.scrollLeft = spriseListNode.scrollWidth;
  }

  addSurprise(e) {
    e.preventDefault();
    const { currentSprise, currentTime, surprises } = this.state;
    const para = document.createElement("p");
    const node = document.createTextNode(`${currentSprise} @ ${currentTime}`);
    para.appendChild(node);
    surprises.push({
      surprise: currentSprise,
      time: currentTime
    })
    this.setState({
      surprises
    })
    const element = document.getElementById("spriseList");
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
      phoneNumber: '',
      surprises: [],
      spriseUrl: '',
      currentSprise: '',
      currentTime: '',
    })
  }


  render() {
    const {
      sprisee,
      message1,
      message2,
      phoneNumber,
      surprises,
      currentSprise,
      currentTime,
      color,
      isSuccessful,
      isError,
      errorMessage,
      spriseeCharacters,
      spriseList,
      message1Characters,
      message2Characters,
      sendDateSelection,
      spriseUrl,
      occasion
    } = this.state;

    return (
      <div className="content setup">
        {isError ? <TopBar mode='error' errorMessage={errorMessage} /> : null}
        <Navigation type='home' />
        {!isSuccessful 
        ? (
          <Form 
            sprisee={sprisee}
            message1={message1}
            message2={message2}
            phoneNumber={phoneNumber}
            currentSprise={currentSprise}
            currentTime={currentTime}
            surprises={surprises}
            spriseList={spriseList}
            newSpriseCard={this.newSpriseCard}
            onChange={this.onChange}
            occasion={occasion}
            color={color}
            isError={isError}
            updatePhoneNumber={this.updatePhoneNumber}
            errorMessage={errorMessage}
            sendDateSelection={sendDateSelection}
            addSurprise={e => this.addSurprise(e)}
            chooseTime={e => this.chooseTime(e)}
            deleteSpriseCard={e => this.deleteSpriseCard(e)}
            onSubmit={e => this.onSubmit(e)}
            autogenerateMessage={e => this.autogenerateMessage(e)}
            spriseeCharacters={spriseeCharacters}
            message1Characters={message1Characters}
            message2Characters={message2Characters}
            characterChange={e => this.characterChange(e)}
          />
          ) 
        : (
          <GoToUrl 
            spriseUrl={spriseUrl}
            newSprise={e => this.newSprise(e)}
          />
          )}
        <Footer />
      </div>
    );
  }
};

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);