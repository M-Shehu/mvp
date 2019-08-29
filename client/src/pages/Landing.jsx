/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import { withRouter, Link } from 'react-router-dom';
// import Navigation from '../components/Navigation.jsx';
import * as ROUTES from '../constants/routes';

import { withFirebase } from '../Firebase';
import { AuthUserContext } from '../Session';
import '../assets/styles/LandingPage.css';
import flowerAnimation from '../assets/lottie/1149-veil.json';
import giftAnimation from '../assets/lottie/427-happy-birthday.json';
import listAnimation from '../assets/lottie/5345-checklist.json';
import locationAnimation from '../assets/lottie/1055-world-locations.json';
import heartAnimation from '../assets/lottie/7417-favourite-material-design.json';
import spriseIcon from '../assets/logos/Sprise-hollow-white.png';



const LandingPage = ({ firebase, history }) => {
  
  const animationArray = [
    flowerAnimation, giftAnimation, listAnimation, locationAnimation, heartAnimation
  ];
  
  const bannerArray = [
    'Send the best crafted surprises to someone special',
    'These holidays, send a digital gift to your closest ones',
    'Set surprises that are time-locked to keep them guessing',
    'Send any time of your choosing for the message to deliver',
    'Display your affection in the best possible way'
  ]
  
  const [ currentAnimation, setCurrentAnimation ] = useState(animationArray[0]);
  const [ currentBanner, setCurrentBanner ] = useState(bannerArray[0]);
  const [ shouldAutoPlay, setShouldAutoPlay ] = useState(true);
  const [ arrayNumber, setArrayNumber ] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if ( arrayNumber < animationArray.length - 1 ) {
        setArrayNumber(arrayNumber + 1);
      } else {
        setArrayNumber(0);
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  });

  useEffect(() => {
    if (arrayNumber === 0) {
      setShouldAutoPlay(true);
      setCurrentAnimation(animationArray[arrayNumber]);
      setCurrentBanner(bannerArray[arrayNumber]);
    } else {
      setShouldAutoPlay(false);
      setCurrentAnimation(animationArray[arrayNumber]);
      setCurrentBanner(bannerArray[arrayNumber]);
    }
  }, [arrayNumber]);

  const defaultOptions = {
    loop: shouldAutoPlay,
    autoplay: true, 
    animationData: currentAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const logInSubmit = event => {
    event.preventDefault();
    firebase.doSignInWithGoogle()
    .then(() => {
      history.push(ROUTES.HOME);
    })
  }

  const signUpSubmit = event => {
    event.preventDefault();
    firebase.doSignInWithGoogle()
    .then(() => {
      history.push(ROUTES.HOME);
    })
  }

  return (
    <>

      <div id="content">

        <a id="sticky" target="_blank" rel="noopener noreferrer" href="https://sprisehub.com/gift/shehutemp">
          <span id="here"> Here&#39;s a beautiful surprise pack</span> for you from Shehu himself. <span id="ok">Enjoy!</span>
          {/* <span id="here">This is currently being migrated to Firebase. It will be back up soon. Cheers!</span> */}
        </a>

        <div id="landing">

          <div id="containback">
            <Lottie 
              options={defaultOptions}
              height={400}
              width={400}
            />
          </div>

          <div id="logo">
            <img src={spriseIcon} height={60} width={60} alt='sprisehub logo' />
            <p>SpriseHub</p>
          </div>

          <h1 id="main-banner">{currentBanner}</h1>

          <AuthUserContext.Consumer>
            {authUser => 
                authUser 
                  ? <SignedInButtons name={authUser.displayName} />
                  : <NotSignedInButtons signUpSubmit={signUpSubmit} logInSubmit={logInSubmit} />}
          </AuthUserContext.Consumer>
        </div>
      </div>
      <div id="footer">
        <p>
          Made with love by <a className="underline" target="_blank" rel="noopener noreferrer" href="https://shehu.dev">Shehu</a> 
        </p>
      </div>
    </>
  )
};

const NotSignedInButtons = ({ signUpSubmit, logInSubmit }) => (
  <>
    <h2>Make the day a special one by sending a beautiful message and setting up the best surprises</h2>

    <button id="signup" type="button" onClick={signUpSubmit}>Sign Up to Start</button>
    <button id="login" type="button" onClick={logInSubmit} target="_blank" rel="noopener noreferrer">
      Or if you have an account, 
      <span> log in instead</span>
    </button>
  </>
);

const SignedInButtons = ({ name }) => (
  <>
    <h2 style={{fontSize: "18px"}}>Welcome back {name}!</h2>

    <Link to={ROUTES.HOME}>
      <button id="signup" type="button">Craft a new surprise</button>
    </Link>
    <p id="login">
        User profiles coming soon 
    </p>
  </>
);

const LandingPageWithAuth = withFirebase(LandingPage);
const LandingPageWithAuthAndRouter = withRouter(LandingPageWithAuth);

export default LandingPageWithAuthAndRouter;