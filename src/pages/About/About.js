import React from 'react';
import './About.css';
import Rachana from './image/Rachana.jpg';


const About = () =>{
    return(
       
        <div  id='about'className='about-container'>
            <h2>About Rachana</h2>
            <div className='profile-container'>
        <img src={Rachana} alt='Profile' className='profile-image'/>
      </div>
      <span className='text-container'>
        Welcome to my portfolio! I'm Rachana Bhusal, a passionate and versatile
        developer with a love for creating innovative solutions. My journey in
        the world of web development began 3 years ago, and since then, I have
        been dedicated to honing my skills and staying at the forefront of
        technology.
      </span>
      <span className='text-container'>
        My expertise lies in building web applications using cutting-edge
        technologies. I specialize in front-end development, with a strong
        command of React.js and its ecosystem.
      </span>
      <span className='text-container'>
        Over the years, I have had the privilege of working on diverse projects
        that have equipped me with a broad skill set. From collaborating on
        cross-functional teams to tackling complex problems, I thrive in dynamic
        environments that challenge me to push my boundaries.
      </span>
      <span className='text-container'>
        Continuous learning is a core value of mine, and I am always eager to
        explore new technologies and frameworks. My commitment to delivering
        high-quality code, combined with a keen eye for detail, ensures that
        every project I undertake is a success.
      </span>
      <span className='text-container'>
        Thank you for visiting my portfolio. Feel free to explore my projects
        and get in touch if you have any questions or exciting opportunities. I
        look forward to connecting with like-minded individuals and
        contributing my skills to create meaningful digital experiences.
      </span>

        </div>
    )
}

export default About;