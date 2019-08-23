import React from 'react';
import axios from 'axios';
import Navigation from '../components/Navigation.jsx';
import SpriseStyle from '../assets/styles/Sprise.css'

const Time = (props) => (
  <div className="sprise-container">
    <span className="span-3">{props.surprise}</span>
    <span className="span-1">{props.time}</span>
  </div>
)
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
        occassion: response.data.occassion,
        message1: response.data.message1,
        message2: response.data.message2,
        message3: response.data.message3,
        lastMessage: response.data.lastMessage,
        surprises: response.data.surprises
      })
    })
  }

  render() {
    const { sprisee, message1, message2, occassion, message3, lastMessage, surprises } = this.state;
    return (
      <div>
        <Navigation />
        <div className="column1 column">
          Happy {occassion} <strong>{sprisee}!!!</strong>
          <img src="/sprise-background" height="270px"></img>
        </div>
        <div className="column2 column">
          {message1}
        </div>
        <div className="column3 column">
          {message2}
        </div>
        <div className="column4 column">
          {message3}
        </div>
        <div className="sprises column">
          <h3>Sprises</h3>
          {surprises.map(element => (
            <Time surprise={element.surprise} time={element.time} />
          ))}
        </div>
      </div>
    )
  }
  
};

export default SprisePage;