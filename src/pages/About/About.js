import React from 'react';
import './About.css';
import Rachana from './image/Rachana.jpg';


const About = () =>{
    return(
       
        <div className='about-container'>
            <h2>About Me</h2>
    
         <img src={Rachana} alt='Profile' className='profile-image'/> 
  <span>
        Welcome to my portfolio! I'm Rachana Bhusal, graduate with a degree in 
        Information Technology. My Academic journey equipped me with a strong
        foundation in web developement, focusing on HTML, CSS and JavaScript.
      </span>
      <span>I've worked on personal projects, like Restaurant website, to build
        a portfolio. I'm passionate about creating user-friendly websites and
        excited about contributing my skills to innovative projects.
      </span>
      <span>Despite being new to the field, I bring enthusiasm, a willingness 
        to learn, and a solid understanding of web development principle.</span>
        

        </div>
    )
}

export default About;