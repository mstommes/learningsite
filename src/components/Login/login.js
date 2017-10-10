import React from 'react';
import './style.css';

class Login extends React.Component {
  render() {
    return (
      <div className="login-box">
          <h2>Login:</h2>
          <form>
          <label>Name: <input type="text" name="name" placeholder="User Name" /></label>
          <label>Password: <input type="text" name="name" placeholder="***********"/></label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Login;
