import React from 'react';
import Project from './Project';

const projects = [
  {
    title: 'Project 4',
    imageUrl: '../assets/project1.jpg',
    deployedLink: 'https://aadiaz10.github.io/Task-Board/ ',
    repoLink: 'https://github.com/aadiaz10/Task-Board',
  },

];

function Portfolio() {
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
