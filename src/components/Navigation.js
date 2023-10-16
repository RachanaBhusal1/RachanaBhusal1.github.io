import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

const Navigation = () =>{
    return(
        <nav>
 <div className="header"> 
                         <h1>Rachana Bhusal</h1>
</div>
      <ul> 
        <li><Link to="/AboutMe">AboutMe</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        <li><Link to="/projects">Projects</Link> </li>

      </ul>
    </nav>
  );
}

export default Navigation;
