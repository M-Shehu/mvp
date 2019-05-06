import React from 'react';
import SignOut from './SignOut.jsx';
import { withAuthorization } from '../Session';

const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    <p>The Home Page is accessible by every signed in user.</p>
    <SignOut />
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);