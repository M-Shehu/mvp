import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import { AuthUserContext, withAuthentication } from '../Session';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from '../constants/routesHandler';
import GlobalStyle from '../assets/styles/GlobalStyle.css';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      authUser: null,
    }
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(
      authUser => {
        authUser
          ? this.setState({ authUser })
          : this.setState({ authUser: null });
      },
    );
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
    return (
      <AuthUserContext.Provider value={this.state.authUser}>
        <Router>
          <div className="wrapper">
            {renderRoutes(routes)}
          </div>
        </Router>
      </AuthUserContext.Provider>
    )
  }
}

export default withFirebase(App);
