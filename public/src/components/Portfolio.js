import React from 'react';
import Project from './Project';

const projects = [
  {
    title: 'Project 1',
    imageUrl: '../assets/project1.jpg',
    deployedLink: 'https://deployed-link1.com',
    repoLink: 'https://github.com/repo1',
  },
  // Add 5 more projects here
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
