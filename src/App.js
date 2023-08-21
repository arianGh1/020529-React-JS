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
            <button className="btn">Read More</button>
          </div>
        </div>
        <div className="part3">
          <div className="pt3_container1">
            <img src="Rectangle 5.png" className="pt3_photo1" />
            <h1>Oftware Troubleshooting and Support</h1>
            <p>Is your software acting up? Our team of experienced technicians is here to diagnose and resolve software-related issues efficiently.</p>
          </div>
          <div className="pt3_container2">
            <img src="Rectangle 8.png" className="pt3_photo2" />
            <h1>Hardware Assistance and Repairs</h1>
            <p>From desktops to laptops, printers to routers, our hardware experts can handle it all. Whether you need assistance with setup, maintenance, or troubleshooting, </p>
          </div>
          <div className="pt3_container3">
            <img src="Rectangle 7.png" className="pt3_photo3" />
            <h1>Network Setup and Optimization</h1>
            <p>Get your business connected with our expert network setup and optimization services. We'll design a secure and efficient network that suits your needs, </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;