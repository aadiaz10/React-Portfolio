import React from 'react';
import resumeFile from '../assets/resume.pdf'; // Link to your resume

function Resume() {
  const proficiencies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'SQL', 'MongoDB'];

  return (
    <section>
      <h2>Resume</h2>
      <a href={resumeFile} download="Resume.pdf">Download Resume</a>
      <h3>Proficiencies</h3>
      <ul>
        {proficiencies.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Resume;
