import React from 'react';
import ReactDOM from 'react-dom';
import Firebase, { FirebaseContext } from './Firebase';
import App from './components/App.jsx';


const jsx = (
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>
);


ReactDOM.hydrate(jsx, document.getElementById("app"));