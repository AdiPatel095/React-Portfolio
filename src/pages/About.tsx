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
          I am always eager to learn new technologies and improve my skills.
          I am proficient in JavaScript, Java, Python, Kotlin and other backend technologies.
          I have a strong understanding of data structures and algorithms, and I am familiar with various databases and APIs.
          I am also comfortable working with version control systems like Git and collaborating with teams using agile methodologies.
          I am a quick learner and a problem solver, and I am always looking for new challenges and opportunities to grow.
        </p>
      </div>
    </section>
  );
};

export default About;
