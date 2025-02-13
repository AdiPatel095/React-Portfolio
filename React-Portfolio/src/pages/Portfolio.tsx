import React from 'react';
import Project, { ProjectProps } from '../components/Project';

// An array of projects to display on the portfolio page
const projects: ProjectProps[] = [
  {
    title: 'Project One',
    image: '/src/assets/images/project-one.png',
    deployedUrl: 'https://example.com/project-one',
    repoUrl: 'https://github.com/yourusername/project-one',
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
    <section className="portfolio">
      <h2>Portfolio</h2>
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
  );
};

export default Portfolio;
