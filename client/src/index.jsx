import React from 'react';
import ReactDOM from 'react-dom';
import Firebase, { FirebaseContext } from './Firebase';
import App from './pages/App.jsx';


const jsx = (
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>
);


ReactDOM.render(jsx, document.getElementById("app"));