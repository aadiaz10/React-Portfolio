import React from 'react';
import developerPhoto from '../assets/developer-photo.jpg'; // Add your photo here

function AboutMe() {
  return (
    <section>
      <h2>About Me</h2>
      <img src={developerPhoto} alt="Developer" />
      <p>I am a developer looking to go into Full Stack Development</p>
    </section>
  );
}

export default AboutMe;
