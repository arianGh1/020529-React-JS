import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="part1" style={{ position: 'relative', width: '1471px', height: '785px' }}>
        <div className="container2">
          <img src="logo.png" alt="Logo" width="105" height="75" />
        </div>
        <div className="container3">
          <nav>
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Services</a>
            <a href="#">Why Us</a>
          </nav>
        </div>
        <div className="container4">
          <button className="btn">Let’s Talk</button>
        </div>
        <div className="container1">
          <h1>Your Trusted IT Support Partner</h1>
          <p>Your Trusted IT Support Partner</p>
          <button className="btn">Get Started</button>
        </div>
      </div>
    );
  }
}

export default App;