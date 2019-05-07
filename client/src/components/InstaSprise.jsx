import React from 'react';
import axios from 'axios';
import Navigation from './Navigation.jsx';
import SpriseStyle from '../assets/styles/Sprise.css';
import moment from 'moment';

const InstaSprise = (props) => {
  const { instaSprise, tag, date } = props;
  return(
  <React.Fragment>
    <h5>Profound Inspiration!</h5>
    {instaSprise}
    <p style={{fontSize:"15px", textDecoration:"italics", fontWeight:"100px"}}><em>{tag} {date}</em></p>
  </React.Fragment>
)};

class InstaSprisePage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      isPressed: '',
      instaSprise: '',
      tag: '',
      date: '',
      instaSpriseSend: '',
      tagSend: '',
      dateSend: '',
    }
  }

  componentDidMount() {
    this.retrieveInstaSprise();
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  retrieveInstaSprise() {
    axios.get(`/api/instasprise`)
    .then(response => {
      console.log(response.data);
      this.setState({
        instaSprise: response.data[0].instaSprise,
        tag: response.data[0].tag,
        date: response.data[0].date
      })
    })
  }

  submitInstaSprise(e) {
    e.preventDefault();
    axios.post(`/instasprise`, {
      instaSprise: this.state.instaSpriseSend,
      tag: this.state.tagSend,
      date: moment(Date.now()).format("MMM Do YY")
    })
    .then(response => {
      console.log(response.data);
      this.setState({
        instaSpriseSend: '',
        tagSend: '',
      })
    })
  }
  render() {
    const { instaSpriseSend, tagSend, instaSprise, tag, date } = this.state;

    return (
      <div>
        <Navigation />
        <div className="column1 column">
          
          {instaSprise ? <InstaSprise 
            instaSprise={instaSprise}
            tag={tag}
            date={date}
          /> : 'Bummer! There appears to be no sprises in the database! You can make the first one'}
        </div>

        <div className="column2 column">
          <h5>Put a sprise up for everybody!</h5>
          <textarea value={instaSpriseSend} onChange={this.onChange} name="instaSpriseSend" rows="10" cols="80"></textarea>
          <br/>
          <input onChange={this.onChange} style={{fontSize:"15px", height: "30px", fontWeight:"100px"}} 
          name="tagSend" value={tagSend} type='text' placeholder="What's your nick name" ></input>
          <br/>
          <button className="btn btn-primary" type="submit" onClick={e => this.submitInstaSprise(e)}>
            Send!
          </button>
        </div>

        
      </div>
    )
  }
  
};


export default InstaSprisePage;