import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () =>{
    return(
        <nav>
 <div className="header"> 
                         <h1>Rachana Bhusal</h1>
</div>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      </nav>
    )
}

export default Navbar;
