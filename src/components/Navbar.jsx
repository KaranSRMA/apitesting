import React from 'react'
import "./navstyle.css"

const Navbar = () => {
  return (
    <div className='nav'>
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact Us</li>
            </ul>    
        </nav>      
    </div>
  );
}

export default Navbar
