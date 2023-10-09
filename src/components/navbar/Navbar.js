import React from 'react';
import { Link } from "react-router-dom";
const Navbar = () =>{
    return(
        <nav>
 <div className="header"> 
                         <h1>Rachana Portfolio</h1>
</div>
<ul>
<li><Link to={'/'}>Home</Link></li>
<li><Link to={'/menu'}>Menu</Link></li>
<li><Link to={'/aboutus'}>AboutUs</Link></li>
<li><Link to={'/contact'}>ContactUs</Link></li>

</ul>
        </nav>
    )
}

export default Navbar;