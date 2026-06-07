import React from 'react'

const Home = () => {
  return (
    <div>
      <!-- =========================
 HERO SECTION
========================= -->
<section className="relative overflow-hidden py-24 lg:py-32">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 items-center">

      <div>
        <span className="inline-flex px-4 py-2 rounded-full bg-gray-100 text-sm font-medium">
          Trusted By 500+ Clients
        </span>

        <h1 className="mt-6 text-5xl lg:text-7xl font-bold leading-tight">
          Build Stunning Digital
          <span className="block">Experiences</span>
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-xl">
          We create high-performing websites, web applications, and
          digital experiences that help businesses grow faster.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#" className="px-8 py-4 rounded-xl bg-black text-white font-medium">
            Get Started
          </a>

          <a href="#" className="px-8 py-4 rounded-xl border border-gray-300 font-medium">
            View Portfolio
          </a>
        </div>
      </div>

      <div className="relative">
        <div className="aspect-square rounded-3xl bg-gray-100"></div>
      </div>

    </div>
  </div>
</section>


<!-- =========================
 ABOUT US
========================= -->
<section className="py-24">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      <div>
        <div className="aspect-[4/5] rounded-3xl bg-gray-100"></div>
      </div>

      <div>
        <span className="text-sm uppercase tracking-wider font-semibold">
          About Us
        </span>

        <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
          Creating Meaningful Digital Solutions
        </h2>

        <p className="mt-6 text-gray-600 leading-relaxed">
          Our team specializes in web development, UI/UX design, and
          digital strategy. We focus on creating modern solutions that
          improve user experience and drive measurable results.
        </p>

        <div className="grid grid-cols-2 gap-6 mt-10">

          <div>
            <h3 className="text-4xl font-bold">150+</h3>
            <p className="text-gray-600 mt-2">Projects Delivered</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">98%</h3>
            <p className="text-gray-600 mt-2">Client Satisfaction</p>
          </div>

        </div>
      </div>

    </div>

  </div>
</section>


<!-- =========================
 TESTIMONIALS
========================= -->
<section className="py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    <div className="text-center max-w-3xl mx-auto">
      <h2 className="text-4xl lg:text-5xl font-bold">
        What Our Clients Say
      </h2>

      <p className="mt-4 text-gray-600">
        Real feedback from businesses we've helped grow.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

      <div className="bg-white p-8 rounded-3xl">
        <p className="text-gray-600">
          "The team delivered an outstanding website that exceeded our
          expectations. Highly recommended."
        </p>

        <div className="mt-6">
          <h4 className="font-semibold">John Smith</h4>
          <span className="text-sm text-gray-500">CEO, Startup Inc.</span>
        </div>
      </div>

      <div className="bg-white p-8 rounded-3xl">
        <p className="text-gray-600">
          "Professional, responsive, and delivered everything on time."
        </p>

        <div className="mt-6">
          <h4 className="font-semibold">Sarah Johnson</h4>
          <span className="text-sm text-gray-500">Marketing Director</span>
        </div>
      </div>

      <div className="bg-white p-8 rounded-3xl">
        <p className="text-gray-600">
          "Their attention to detail and design quality was exceptional."
        </p>

        <div className="mt-6">
          <h4 className="font-semibold">Michael Lee</h4>
          <span className="text-sm text-gray-500">Business Owner</span>
        </div>
      </div>

    </div>

  </div>
</section>


<!-- =========================
 CTA SECTION
========================= -->
<section className="py-24">
  <div className="max-w-6xl mx-auto px-6 lg:px-8">

    <div className="rounded-[40px] bg-black text-white p-12 lg:p-20 text-center">

      <h2 className="text-4xl lg:text-6xl font-bold max-w-4xl mx-auto">
        Ready To Grow Your Business Online?
      </h2>

      <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
        Let's discuss your project and create something amazing together.
      </p>

      <a
        href="#"
        className="inline-flex mt-8 px-8 py-4 rounded-xl bg-white text-black font-semibold"
      >
        Book A Free Consultation
      </a>

    </div>

  </div>
</section>
    </div>
  )
}

export default Home
