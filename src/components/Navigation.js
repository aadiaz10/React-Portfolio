import React from 'react';

function Navigation({ currentSection, setCurrentSection }) {
  const sections = ['About Me', 'Portfolio', 'Contact', 'Resume'];

  return (
    <nav>
      <ul>
        {sections.map(section => (
          <li key={section} className={currentSection === section ? 'nav-active' : ''}>
            <a href="#" onClick={() => setCurrentSection(section)}>{section}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
