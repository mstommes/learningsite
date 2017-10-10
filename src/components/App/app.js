import React from 'react';
import classnames from 'classnames';
import logo from './logo.svg';
import Login from '../../components/Login/login.js'
import './style.css';

class App extends React.Component {
  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('App', className)} {...props}>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro"></p>
        <Login />
      </div>
    );
  }
}

export default App;
