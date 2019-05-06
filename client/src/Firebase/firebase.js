import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCQAOtmTQVgIsV-bp499oNZCwLKqdYBHk8',
  authDomain: 'sprisehub.firebaseapp.com',
  databaseURL: 'https://sprisehub.firebaseio.com',
  projectId: 'sprisehub',
  storageBucket: 'sprisehub.appspot.com',
  messagingSenderId: '959587122862',
  appId: '1:959587122862:web:9e60433324ca0e3c'
};


class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);

    this.auth = app.auth();
    this.db = app.database();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) => 
  this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
  this.auth.signInWithEmailAndPassword(email, password)

  // doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
  this.auth.currentUser.updatePassword(password);

  // *** User API ***

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');
};

export default Firebase;
