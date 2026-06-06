import React from 'react'
import {Routes, Route} from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#111111] text-white">

    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

            <div>
                <h3 className="text-2xl font-bold mb-6">
                    Derma Edge Clinic
                </h3>

                <p className="text-gray-400 leading-relaxed">
                    Advanced dermatology, aesthetic treatments, and personalized skin care solutions designed to help you look and feel your best.
                </p>

                <div className="flex gap-4 mt-8">

                    <a href="#"
                        className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#dab46f] transition-all duration-300 hover:-translate-y-1">
                        FB
                    </a>

                    <a href="#"
                        className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#dab46f] transition-all duration-300 hover:-translate-y-1">
                        IG
                    </a>

                    <a href="#"
                        className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#dab46f] transition-all duration-300 hover:-translate-y-1">
                        LI
                    </a>

                </div>

            </div>

            <div>
                <h4 className="text-lg font-semibold mb-6">
                    Quick Links
                </h4>

                <ul className="space-y-4 text-gray-400">

                    <li>
                        {/* <Link path="/" element={<Home />}></Link> */}
                        <a href="#" className="hover:text-[#dab46f] transition">
                            Home
                        </a>
                    </li>

                    <li>
                        <a href="#" className="hover:text-[#dab46f] transition">
                            About Us
                        </a>
                    </li>

                    <li>
                        <a href="#" className="hover:text-[#dab46f] transition">
                            Treatments
                        </a>
                    </li>

                    <li>
                        <a href="#" className="hover:text-[#dab46f] transition">
                            Gallery
                        </a>
                    </li>

                    <li>
                        <a href="#" className="hover:text-[#dab46f] transition">
                            Contact
                        </a>
                    </li>

                </ul>
            </div>

            <div>
                <h4 className="text-lg font-semibold mb-6">
                    Treatments
                </h4>

                <ul className="space-y-4 text-gray-400">

                    <li>
                        <a href="#" className="hover:text-[#dab46f] transition">
                            Acne Treatment
                        </a>
                    </li>

                    <li>
                        <a href="#" className="hover:text-[#dab46f] transition">
                            Laser Hair Removal
                        </a>
                    </li>

                    <li>
                        <a href="#" className="hover:text-[#dab46f] transition">
                            PRP Therapy
                        </a>
                    </li>

                    <li>
                        <a href="#" className="hover:text-[#dab46f] transition">
                            Anti-Aging Solutions
                        </a>
                    </li>

                    <li>
                        <a href="#" className="hover:text-[#dab46f] transition">
                            Skin Rejuvenation
                        </a>
                    </li>

                </ul>
            </div>


            <div>
                <h4 className="text-lg font-semibold mb-6">
                    Contact Us
                </h4>

                <div className="space-y-5 text-gray-400">

                    <p>
                    Derma Edge Clinic
                        Your City, Punjab
                    </p>

                    <p>
                        +91 98765 43210
                    </p>

                    <p>
                        ✉️ info@dermaedge.com
                    </p>

                    <p>
                        🕒 Mon - Sat: 10 AM - 7 PM
                    </p>

                </div>

            </div>

        </div>

    </div>


    <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-10">

            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">

                <div>
                    <h4 className="text-xl font-semibold">
                        Subscribe To Our Newsletter
                    </h4>

                    <p className="text-gray-400 mt-2">
                        Get skincare tips, offers, and treatment updates.
                    </p>
                </div>

                <div className="flex w-full lg:w-auto">

                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="px-5 py-4 rounded-l-full bg-white/10 border border-white/10 outline-none min-w-[280px]"
                     />

                    <button
                        className="px-8 py-4 bg-[#dab46f] hover:bg-[#c8a15c] rounded-r-full font-medium transition">
                        Subscribe
                    </button>

                </div>

            </div>

        </div>

    </div>

  
    <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-8">

            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">

                <p className="text-gray-500 text-sm">
                    © 2026 Derma Edge Clinic. All Rights Reserved.
                </p>

                <div className="flex gap-8 text-sm text-gray-500">

                    <a href="#" className="hover:text-[#dab46f] transition">
                        Privacy Policy
                    </a>

                    <a href="#" className="hover:text-[#dab46f] transition">
                        Terms & Conditions
                    </a>

                    <a href="#" className="hover:text-[#dab46f] transition">
                        Sitemap
                    </a>

                </div>

            </div>

        </div>

    </div>

</footer>
    </div>
  )
}

export default Footer
