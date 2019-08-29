import React from 'react';
import ReactDOM from 'react-dom';
import Firebase, { FirebaseContext } from './Firebase';
import App from './pages/App';


const jsx = (
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>
);

ReactDOM.render(jsx, document.querySelector('#app'));