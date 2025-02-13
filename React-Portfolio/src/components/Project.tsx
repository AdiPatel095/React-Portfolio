import React from 'react';

// Define the props interface for type checking
export interface ProjectProps {
  title: string;
  image: string;
  deployedUrl: string;
  repoUrl: string;
}

const Project: React.FC<ProjectProps> = ({ title, image, deployedUrl, repoUrl }) => {
  return (
    <div className="project">
      <img src={image} alt={`${title} screenshot`} className="project-image" />
      <h3 className="project-title">{title}</h3>
      <div className="project-links">
        <a href={deployedUrl} target="_blank">
          View App
        </a>
        <a href={repoUrl} target="_blank">
          GitHub Repo
        </a>
      </div>
    </div>
  );
};

export default Project;