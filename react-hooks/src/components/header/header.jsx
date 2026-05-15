import React from 'react'

const header = () => {
  return (
    <div>
       <nav className="w-full bg-slate-900 text-white shadow-lg">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide cursor-pointer">
          Telisky
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-8 text-lg font-medium">

          <li className="hover:text-indigo-400 transition duration-300 cursor-pointer">
            Home
          </li>

          <li className="hover:text-indigo-400 transition duration-300 cursor-pointer">
            About
          </li>

          <li className="hover:text-indigo-400 transition duration-300 cursor-pointer">
            Services
          </li>

          <li className="hover:text-indigo-400 transition duration-300 cursor-pointer">
            Portfolio
          </li>

          <li className="hover:text-indigo-400 transition duration-300 cursor-pointer">
            Contact
          </li>

        </ul>

        {/* Button */}
        <button className="hidden md:block px-6 py-3 bg-indigo-500 rounded-xl font-semibold hover:bg-indigo-600 transition duration-300">
          Get Started
        </button>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-3xl cursor-pointer">
          ☰
        </div>

      </div>

    </nav>
    </div>
  )
}

export default header
