import React from 'react';

const Resume: React.FC = () => {
  const proficiencies: string[] = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'TypeScript',
    'Node.js',
    'Express',
    'MongoDB',
  ];

  return (
    <section className="resume">
      <h2>Resume</h2>
      <p>
        Download my resume{' '}
        <a href="/assets/resume.pdf" download>
          here
        </a>.
      </p>
      <h3>Proficiencies</h3>
      <ul>
        {proficiencies.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Resume;
