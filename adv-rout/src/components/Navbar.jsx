import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      


<nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    
    <div className="flex items-center justify-between h-20">
     
      <a href="#" className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold">
          D
        </div>
        <span className="text-xl font-bold text-gray-900">
          DermaEdge
        </span>
      </a>


      <div className="hidden md:flex items-center gap-8">
        <Link to="/" className="relative text-gray-700 font-medium transition-all duration-300 hover:text-indigo-600 group">Home
        <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>


        <Link to="/about-us" className="relative text-gray-700 font-medium transition-all duration-300 hover:text-indigo-600 group">About Us
        <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>


        <Link to="/services" className="relative text-gray-700 font-medium transition-all duration-300 hover:text-indigo-600 group">Services
        <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>


        <Link to="/blog" className="relative text-gray-700 font-medium transition-all duration-300 hover:text-indigo-600 group">Blogs
        <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>

        <Link to="/contact-us" className="relative text-gray-700 font-medium transition-all duration-300 hover:text-indigo-600 group">Contact Us
        <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>

      </div>


      <div className="hidden md:block">
        <a href="#"
           className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/30">
          Book Appointment
        </a>
      </div>

      <button className="md:hidden">
        <svg className="w-7 h-7 text-gray-800"
             fill="none"
             stroke="currentColor"
             viewBox="0 0 24 24">
          <path stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>

    </div>

  </div>
</nav>
    </div>
  )
}

export default Navbar
