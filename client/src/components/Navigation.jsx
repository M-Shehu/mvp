import React from 'react';
import SpriseLogoWhite from '../assets/logos/Sprise-hollow-white.png';
import '../assets/styles/Navigation.css';
import ErrorBoundary from './ErrorBoundary.jsx';

const Navigation = (props) => {
  let Content = () => {
    return null
  }
  if (props.type === 'landing') {
    Content = () => (
      <React.Fragment>
        <li>
          <a href="/signin">Sign In</a>
        </li>
        <li>
          <a href="/signup">Sign Up</a>
        </li>
      </React.Fragment>
    )
  }

  if (props.type === 'home') {
    Content = () => (
      <React.Fragment>
        <li>
          <a href="/signout">Sign Out</a>
        </li>
        <li>
          <a href="/accounts">My Profile</a>
        </li>
        <li>
          <a href="/home">InstaSprise</a>
        </li>
        <li>
          <a href="/home">Sprise Hunt</a>
        </li>
        <li>
          <a href="/home">Sprise Direct</a>
        </li>
      </React.Fragment>
    )
  }

  return (
    <div className="nav-bar">
      <a href='/'>
        <img className="nav-img" src={SpriseLogoWhite} height="50px"></img>
      </a>
      <ul>
        <Content />
      </ul>
    </div>
  )
};

const ErrorCaughtNav = () => (
  <ErrorBoundary>
    <Navigation />
  </ErrorBoundary>
)

export default ErrorCaughtNav;