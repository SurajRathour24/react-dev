import React from "react";
import CardHero from "./CardHero";

const Cards = () => {
  return (
    <div>
      <CardHero />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
            alt="Card Image"
            className="w-full h-60 object-cover group-hover:scale-110 transition duration-700"
          />

          <div className="p-7">
            <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
              Development
            </span>

            <h3 className="text-2xl font-bold text-gray-900 mt-3">
              Web Development
            </h3>

            <p className="text-gray-500 mt-4 leading-relaxed">
              Modern responsive websites with clean UI, fast performance, and
              smooth user experience.
            </p>

            <button className="mt-6 px-6 py-3 rounded-full bg-gray-900 text-white hover:bg-indigo-600 transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
          <img
            src="https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200&auto=format&fit=crop"
            alt="Card Image"
            className="w-full h-60 object-cover group-hover:scale-110 transition duration-700"
          />

          <div className="p-7">
            <span className="text-sm font-semibold text-pink-600 uppercase tracking-wider">
              Design
            </span>

            <h3 className="text-2xl font-bold text-gray-900 mt-3">
              UI/UX Design
            </h3>

            <p className="text-gray-500 mt-4 leading-relaxed">
              Beautiful and intuitive interfaces crafted to create engaging
              digital experiences.
            </p>

            <button className="mt-6 px-6 py-3 rounded-full bg-gray-900 text-white hover:bg-pink-600 transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
            alt="Card Image"
            className="w-full h-60 object-cover group-hover:scale-110 transition duration-700"
          />

          <div className="p-7">
            <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">
              Marketing
            </span>

            <h3 className="text-2xl font-bold text-gray-900 mt-3">
              Digital Marketing
            </h3>

            <p className="text-gray-500 mt-4 leading-relaxed">
              Strategic marketing solutions that help businesses grow faster
              online.
            </p>

            <button className="mt-6 px-6 py-3 rounded-full bg-gray-900 text-white hover:bg-emerald-600 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
