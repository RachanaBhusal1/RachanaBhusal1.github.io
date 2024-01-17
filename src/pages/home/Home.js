// Home.js

import React from 'react';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Rachana Bhusal</h1>
      <p style={styles.subheading}>Web Developer</p>
      <p style={styles.description}>
        Welcome to my portfolio! I am passionate about creating
        responsive and user-friendly web applications.
      </p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
  },
  heading: {
    fontSize: '36px',
    color:'#215f5f',
    marginBottom: '10px',
  },
  subheading: {
    fontSize: '18px',
    color: '#215f5f',
    marginBottom: '20px',
  },
  description: {
    fontSize: '16px',
    lineHeight: '1.6',
  },
};

export default Home;
