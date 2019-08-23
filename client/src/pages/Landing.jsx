import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation.jsx';
import * as ROUTES from '../constants/routes';
import '../assets/styles/LandingPage.css';
import Lottie from 'react-lottie';
import flowerAnimation from '../assets/lottie/1149-veil.json';
import spriseIcon from '../assets/logos/Sprise-hollow-white.png';

const LandingPage = () => {
  
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: flowerAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div id="content">

      <a id="sticky" target="_blank" href="https://sprisehub.com/gift/shehutemp">
        <span id="here"> Here's a special gift</span> for you from Shehu himself. <span id="ok">Enjoy!</span>
      </a>

      <div id="landing">

        <div id="containback">
          <Lottie options={defaultOptions}
            height={400}
            width={400}
          />
        </div>

        <div id="logo">
          <img src={spriseIcon} height={60} width={60} />
          <p>SpriseHub</p>
        </div>

        <h1>These holidays, send a digital gift to your closest ones</h1>
        <h2>Wrap a special message, present or offer in a URL that you can share with whoever you want</h2>

        <a id="start" href="make/">Make your gift</a>
        <a id="discover" href="https://twitter.com/sprisehub" target="_blank">Or discover <span>awesome gifts &amp; offers</span></a>
        <div id="footer">
          <p>Made with love by <a className="underline" target="_blank" href="https://shehu.dev">Shehu</a> </p>
        </div>
      </div>

      
    </div>
  )
};

export default LandingPage;