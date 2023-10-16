import React from 'react';
import './Navbar.css'
import { Link } from "react-router-dom";
const Navbar = () =>{
    return(
        <nav>
 <div className="header"> 
                         <h1>Rachana Bhusal</h1>
</div>
<ul>
<li><Link to={'/'}>About</Link></li>
<li><Link to={'/contact'}>Contact</Link></li>


</ul>
        </nav>
    )
}

export default Navbar;