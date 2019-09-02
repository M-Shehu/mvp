/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withFirebase } from '../../Firebase';
import { AuthUserContext } from '../../Session';
import * as ROUTES from '../../constants/routes';

// import Navigation from '../components/Navigation.jsx';
import Footer from '../../global-components/Footer';
import NotSignedInButtons from './NotSignedInButtons';
import SignedInButtons from './SignedInButtons';

import { bannerArray } from './bannerArray';
import flowerAnimation from '../../assets/lottie/1149-veil.json';
import giftAnimation from '../../assets/lottie/427-happy-birthday.json';
import listAnimation from '../../assets/lottie/5345-checklist.json';
import locationAnimation from '../../assets/lottie/1055-world-locations.json';
import heartAnimation from '../../assets/lottie/7417-favourite-material-design.json';
import spriseIcon from '../../assets/logos/Sprise-hollow-white.png';
import '../../assets/styles/LandingPage.css';



const LandingPage = ({ firebase, history }) => {
  
  const animationArray = [
    flowerAnimation, giftAnimation, listAnimation, locationAnimation, heartAnimation
  ];
  
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

      <div id="landing-page" className="vertical">

        <a id="sticky" target="_blank" rel="noopener noreferrer" href="https://sprisehub.com/gift/shehutemp">
          Hey there! <span id="highlight"> Here&#39;s a beautiful surprise pack</span> just for you. <span id="ok">Enjoy!</span>
          {/* <span id="here">This is currently being migrated to Firebase. It will be back up soon. Cheers!</span> */}
        </a>
        {/* <div className="progress-bar"></div> */}
        <div id="landing" className="content">

          <div id="logo">
            <img src={spriseIcon} height={60} width={60} alt='sprisehub logo' />
            <p>SpriseHub</p>
          </div>

          <div id="lottie">
            <Lottie 
              options={defaultOptions}
              height={350}
              width={350}
            />
          </div>

          <div className="page-banner">
            <h1 id="main-banner">{currentBanner}</h1>

            <AuthUserContext.Consumer>
              {authUser => 
                  authUser 
                    ? <SignedInButtons name={authUser.displayName} />
                    : <NotSignedInButtons signUpSubmit={signUpSubmit} logInSubmit={logInSubmit} />}
            </AuthUserContext.Consumer>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
};

LandingPage.propTypes = {
  firebase: PropTypes.shape({
    doSignInWithGoogle: PropTypes.func
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired
};


const LandingPageWithAuth = withFirebase(LandingPage);
const LandingPageWithAuthAndRouter = withRouter(LandingPageWithAuth);

export default LandingPageWithAuthAndRouter;