import React from 'react'
import Menu from './Menu';
import Logo from './Logo'

const Header = () => {
  return (
    <div>
      <nav class="navbar bg-cyan-50 py-6">
        <div className="container mx-auto">
          <div class="nav-wrapper flex justify-between items-center">
             <Logo/>
            <div className="right-menu-wrapper flex gap-10 items-center">
              <Menu/>

              <a
                href="#"
                class="nav-btn px-3 py-2 bg-amber-950 text-white rounded-3xl"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
