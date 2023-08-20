import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="part1">
          <div className="container2">
            <img src="logo.png" alt="Logo" width="30%" height="30%" />
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
            <p> Welcome to Disionix where we deliver top-notch technical support
            services tailored to meet your needs. From software troubleshooting
            to network optimization, our dedicated team of experts is here to
            resolve your IT...</p>
            <button className="btn">Get Started</button>
          </div>
        </div>
        <div className="part2">
          <div className="pt2_container1">
            <img src="Rectangle 3.png" alt="Photo 1" className="photo1" />
            <img src="Rectangle 4.png" alt="Photo 2" className="photo2" />
          </div>
          <div className="pt2_container2">
            <h2>About US</h2>
            <h1>Welcome To Disionix</h1>
            <p>At Disionix, we are dedicated to being your trusted IT support partner. With a passion for technology and a commitment to exceptional customer service, we take pride in simplifying your technical challenges so you can focus on what matters most - your business.</p>
            <p>Since our establishment in [Year of Establishment], we have been on a relentless mission to deliver efficient and reliable IT support services to businesses and individuals alike.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;