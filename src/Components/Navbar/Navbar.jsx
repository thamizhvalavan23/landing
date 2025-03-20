import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <div className="navbar-data">
        <div className='navbar-name'>
          <h1>EV-olution</h1>
        </div>
        <div className="navbar-menu">
          <ul>
            <li>Home</li>
            <li>Explore</li>
            <li>About</li>
            <li className='contact'>Contact</li>
          </ul>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar
