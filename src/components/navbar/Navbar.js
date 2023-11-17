import React from 'react';
import './Navbar.css'
import { Link } from "react-router-dom";
const Navbar = () =>{
    return(
        <nav>
 <div className="header"> 
</div>
<ul>
    <li><Link to = {'/'}>Home</Link></li>
<li><Link to={'/about'}>About</Link></li>
<li><Link to={'/contact'}>Contact</Link></li>


</ul>
        </nav>
    )
}

export default Navbar;