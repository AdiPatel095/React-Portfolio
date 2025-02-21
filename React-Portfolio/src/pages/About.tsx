import React from 'react';
import profileImage from '../assets/images/profile.jpg';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <section className="about">
      <img src={profileImage} alt="Profile" className="profile-image" />
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          Hello! I'm Adi Patel, a passionate web developer specializing in building beautiful and functional web applications.
          I have experience with React, TypeScript, and modern web development practices.
          I enjoy turning complex problems into simple, intuitive, and dynamic user experiences.
        </p>
      </div>
    </section>
  );
};

export default About;
