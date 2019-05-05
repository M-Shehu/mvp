import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Login from './components/Login.jsx';
import routes from '../../server/routes.js';

import { Provider } from 'react-redux';

// import createStore from './store/createStore';

// const store = createStore(window.STORE_DATA);

const jsx = (
  <Provider>
    <Router>
      <div class="wrapper">
        {renderRoutes(routes)}
      </div>
    </Router>
  </Provider>
);


ReactDOM.hydrate(<Login />, document.getElementById("app"));