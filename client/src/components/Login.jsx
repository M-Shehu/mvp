import React from 'react';

class Login extends React.Component {

  render() {
    return (
      <div class="wrapper">
        <h1>Welcome, this is the login page</h1>
        <button onClick={() => console.log("I', clicked login!")}>
          Click me!
        </button>
      </div>
    )
  }

}

export default Login;
