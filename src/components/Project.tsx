import React from 'react';
import { FaGithub } from 'react-icons/fa';

// Define the props interface for type checking
export interface ProjectProps {
  title: string;
  image: string;
  deployedUrl: string;
  repoUrl: string;
}

const Project: React.FC<ProjectProps> = ({ title, image, deployedUrl, repoUrl }) => {
  return (
    <div className="project-card">
      <div className="project-image-wrapper">
        <img src={image} alt={`${title} screenshot`} className="project-image" />
      </div>

      <div className="project-content">
        {/* Title is now a clickable link to the deployed app */}
        <a
          className="project-title"
          href={deployedUrl}
          target="_blank"
          rel="noreferrer"
        >
          {title}
        </a>

        {/* GitHub icon that links to the repo */}
        <div className="project-links">
          <a
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            className="github-link"
          >
            <FaGithub size={24} /> {/* or any size you prefer */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;