import React from 'react';
import axios from 'axios';

class SprisePage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      message1: '',
      message2: '',
      message3: '',
      lastMessage: '',
      surprises: ''
    }
  }

  componentDidMount() {
    const { spriseId } = this.props.match.params;
    this.retrieveSprise(spriseId);
  }

  retrieveSprise(id) {
    axios.get(`/api/sprisedirect/${id}`)
    .then(response => {
      console.log(response.data);
      this.setState({
        message1: response.data.message1,
        message2: response.data.message2,
        message3: response.data.message3,
        lastMessage: response.data.lastMessage,
        surprises: response.data.surprises
      })
    })
  }

  render() {
    const { message1, message2, message3, lastMessage, surprises } = this.state;
    return (
      <div>
        <h1>This is a Specialised Sprise</h1>
        <p>Welcome. This is for you!</p>
        <div>{message1}</div>
        <div>{message2}</div>
        <div>{message3}</div>
        <div>{lastMessage}</div>
        {/* <div>{surprises}</div> */}
      </div>
    )
  }
  
};

export default SprisePage;