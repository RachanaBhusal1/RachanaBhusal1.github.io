import React from 'react';
import './Project.css';

const Project= () => {
  return (
    <div className="project-container">
      <h2>Restaurant Website</h2>
      <p>"Designed a cool website for a nearby restaurant!
 Made it easy to use and look awesome.
  Now people can check out the menu and more online.
  It's like bringing the restaurant vibe to the internet!"</p>
      <div className="code-section">
      <a href="http://localhost:3002/" target="_blank" rel="noopener noreferrer">
  Restaurant Website
</a>
      </div>
 {/* Add more project details as needed */}
    </div>
  );
};

export default Project;
