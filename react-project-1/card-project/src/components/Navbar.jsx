import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">JobBoard</div>
          <ul className="nav-menu">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Find Jobs</a>
            </li>
            <li>
              <a href="#">Companies</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
          <div className="nav-actions">
            <button className="login-btn">Login</button>
            <button className="signup-btn">Sign Up</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
