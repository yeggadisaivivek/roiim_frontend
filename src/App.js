import React, { Component } from 'react';
import logo from './logo.svg';
//import paysafe from './Paysafe';
import './App.css';
import Header from './header';
import RegistrationForm  from './registrationForm';

class App extends Component {

 
  render() {
    return (
      <div className="App">
        <Header />
        <RegistrationForm />
      </div>
    );
  }
}

export default App;
