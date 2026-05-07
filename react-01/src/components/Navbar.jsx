import React from 'react'

const Navbar = () => {
  return (
    <div className="main-navbar">
      <div className="logo">LOGO</div>
      <div className="nav-menu">
        <ul className="flexbox">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
