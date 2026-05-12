import React from 'react'

const Navbar = () => {
  return (
    <div>
  <nav className="navbar text-black-500">
    <div className="nav-wrapper flex justify-between">

      <a href="#" className="logo">
        Teli<span>sky</span>
      </a>
<div className="right-wrapper flex gap-10">
      <ul className="nav-links flex gap-10">
        <li><a href="#" className="text-amber-600">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <a href="#" className="nav-btn">Get Started</a>
</div>


    </div>
  </nav>

  <section className="hero">
    <h1>
      Create Modern Websites That
      <span>Impress Clients</span>
    </h1>
  </section>

    </div>
  )
}

export default Navbar
