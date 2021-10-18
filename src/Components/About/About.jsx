import React from 'react';
import prof from './prof.jpg';
import './About.css';

const About = () => (
  <div className="about">
    <img
      alt="Me"
      style={{ width: '10rem', borderRadius: '0.2rem' }}
      src={prof}
    />
    <p className="about-main-p">Adobe and its vendors use cookies and similar technologies to improve your experience and measure your interactions with our websites, products, and services. We also use them to provide you more relevant information in searches, and in ads on this and other sites. If that’s okay, click “Enable all.” To limit sharing and view our vendors, click “Customize.” You can change your options at any time.</p>
  </div>
);

export default About;
