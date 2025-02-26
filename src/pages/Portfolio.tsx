import React from 'react';
import Project, { ProjectProps } from '../components/Project';
import '../styles/Portfolio.css';

// An array of projects to display on the portfolio page
const projects: ProjectProps[] = [
  {
    title: 'CineTracker',
    image: '/src/assets/images/project-one.png',
    deployedUrl: 'https://cinetracker-e4mj.onrender.com',
    repoUrl: 'https://github.com/AdiPatel095/CineTracker',
  },
  {
    title: 'Project Two',
    image: '/src/assets/images/project-two.png',
    deployedUrl: 'https://example.com/project-two',
    repoUrl: 'https://github.com/yourusername/project-two',
  },
  {
    title: 'Project Three',
    image: '/src/assets/images/project-three.png',
    deployedUrl: 'https://example.com/project-three',
    repoUrl: 'https://github.com/yourusername/project-three',
  }
];

const Portfolio: React.FC = () => {
  return (
    <div>
      <h2 className="header-container">Portfolio</h2>
      <section className="portfolio">
      <div className="projects-container">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            deployedUrl={project.deployedUrl}
            repoUrl={project.repoUrl}
          />
        ))}
      </div>
    </section>
    </div>
  );
};

export default Portfolio;
