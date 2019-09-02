import React from 'react';
import SpriseLogoWhite from '../assets/logos/Sprise-hollow-white.png';
import SpriseLogoPink from '../assets/logos/Sprise-hollow-pink.png';
import '../assets/styles/Navigation.css';
import ErrorBoundary from './ErrorBoundary';

const Navigation = ({ type }) => {
  let Content = () => {
    return null
  }
  if (type === 'landing') {
    Content = () => (
      <>
        <li>
          <a href="/signin">Sign In</a>
        </li>
        <li>
          <a href="/signup">Sign Up</a>
        </li>
      </>
    )
  }

  if (type === 'sprise') {
    Content = () => (
      <>
        <li>
          <a href="/signin">Check SpriseHub Out!</a>
        </li>
      </>
    )
  }

  if (type === 'home') {
    Content = () => (
      <>
        <li>
          <a href="/signout">Sign Out</a>
        </li>
        <li>
          <a href="/accounts">
            <p>
              My Profile
              <sub>Coming Soon!</sub>
            </p>
          </a>
        </li>
        <li>
          <a href="/home">
            <p>
              InstaSprise
              <sub>Coming Soon!</sub>
            </p>
          </a>
        </li>
        <li>
          <a href="/home">
            <p>
              Sprise Hunt
              <sub>Coming Soon!</sub>
            </p>
          </a>
        </li>
        <li>
          <a href="/home">
            <p>
              Sprise Direct
            </p>
          </a>
        </li>
      </>
    )
  }

  return (
    <div className="nav-bar">
      <a href='/'>
        <div className="img-holder">
          <img className="nav-img" src={SpriseLogoPink} alt='sprise-logo-white' height="40px" />
          <img src={SpriseLogoWhite} alt='sprise-logo-pink' height="40px" />
        </div>
      </a>
      <ul>
        <Content />
      </ul>
    </div>
  )
};

const ErrorCaughtNav = ({ type }) => (
  <ErrorBoundary>
    <Navigation type={type} />
  </ErrorBoundary>
)

export default ErrorCaughtNav;