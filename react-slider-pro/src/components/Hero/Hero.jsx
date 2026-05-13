import React from 'react'

const Hero = () => {
  return (
    <div>
      <section class="hero h-[70vh] flex justify-center items-center bg-amber-100">
        <div className="container mx-auto">
          <div className="banner-content-wrapper flex justify-between items-center gap-10">
            <div className="left-banner-content">
            <h1 className="text-6xl font-bold">
              Create Modern Websites That
              <span> Impress Clients</span>
            </h1>
            <p className="w-3xl mt-6">I'll go with "Pixora Studio" but let me know if you'd like a different one and I can swap it instantly. Now let me build your full portfolio. This will take a moment it's going to be comprehensive</p>
            </div>
            <div className="right-banner-img">
                <img className="rounded-2xl w-6xl" src="https://images.pexels.com/photos/36405831/pexels-photo-36405831.jpeg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
