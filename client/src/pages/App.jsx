import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import { withAuthentication } from '../Session';
import routes from '../constants/routesHandler';
import '../assets/styles/GlobalStyle.css';

const App = () => (
  <Router>
    <div className="wrapper">
      {renderRoutes(routes)}
    </div>
  </Router>
)

export default withAuthentication(App);
