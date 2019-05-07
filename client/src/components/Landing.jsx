import React from 'react';
import LandingPageStyle from '../assets/styles/LandingPage.css';
import { withAuthorization } from '../Session';
import { Link, withRouter } from 'react-router-dom';
import Navigation from './Navigation.jsx';
import * as ROUTES from '../constants/routes';

const LandingPage = () => (
  <div className="landing-page">
    <Navigation type={'landing'}/>
    <div className="column-1">
      <img className="nav-img" src="/nav-img" height="200px"></img>
      <h1 className="banner-name">Sprise Hub</h1>
      <h3 className="banner-slogan">Sugar, <strong>Sprise</strong> and Everything Nice</h3>
      <Link to={ROUTES.INSTA_SPRISE}>
        <button className="btn btn-primary">Surprise Me!</button>
      </Link>
    </div>
    <div className="column-2">
    </div>
    <div className="column-3">

    </div>
  </div>
);

export default LandingPage;