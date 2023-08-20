import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Your Trusted IT Support Partner</h1>
          <h2>Welcome to Disn</h2>
        </header>
        <section>
          <h3>Special Digital Services</h3>
          <p>We are working with 15 years experience</p>
        </section>
        <section>
          <h3>Our Services</h3>
          <ul>
            <li>Website Design</li>
            <li>Web Development</li>
            <li>IT Support</li>
            <li>Cyber Security</li>
          </ul>
        </section>
        <footer>
          <p>Copyright © 2023 Disn</p>
        </footer>
      </div>
    );
  }
}

export default App;
