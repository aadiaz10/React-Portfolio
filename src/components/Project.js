import React from 'react';

function Project({ project }) {
  return (
    <div className="project-card">
      <img src={project.imageUrl} alt={project.title} />
      <h3>{project.title}</h3>
      <p>
        <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">Deployed Application</a> |{' '}
        <a href={project.repoLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      </p>
    </div>
  );
}

export default Project;
