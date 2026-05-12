import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar bg-cyan-50 py-3">
        <div className="container mx-auto">
          <div class="nav-wrapper flex justify-between items-center">
            <a href="#" class="logo">
              Dev<span>sky</span>
            </a>
            <div className="right-menu-wrapper flex gap-10 items-center">
              <ul class="nav-links flex justify-center gap-5">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Projects</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>

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

      <section class="hero h-[70vh] flex justify-center items-center bg-amber-100">
        <div className="container mx-auto">
          <div className="banner-content-wrapper flex justify-between items-center gap-10">
            <div className="left-banner-content">
            <h1 className="text-6xl font-bold">
              Create Modern Websites That
              <span> Impress Clients</span>
            </h1>
            </div>
            <div className="right-banner-img">
                <img className="rounded-2xl w-6xl" src="https://images.pexels.com/photos/36405831/pexels-photo-36405831.jpeg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
