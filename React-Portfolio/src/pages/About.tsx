import React from 'react';
import profileImage from '../assets/images/profile.jpg';

const About: React.FC = () => {
  return (
    <section className="about">
      <h2>About Me</h2>
      <img src={profileImage} alt="Profile" className="profile-image" />
      <p>
        Hello! I'm Adi Patel, a passionate web developer specializing in building beautiful and functional web applications.
        I have experience with React, TypeScript, and modern web development practices.
        I enjoy turning complex problems into simple, intuitive, and dynamic user experiences.
      </p>
    </section>
  );
};

export default About;
