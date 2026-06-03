import React from 'react'

const NotFound = () => {
  return (
    <div>
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#faf7f2] via-white to-[#f8f5ef] overflow-hidden relative">


    <div className="absolute top-20 left-20 w-72 h-72 bg-[#dab46f]/20 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#dab46f]/15 blur-[120px] rounded-full"></div>

    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">


        <span className="inline-flex items-center px-5 py-2 rounded-full bg-[#dab46f]/10 text-[#b8914f] font-medium border border-[#dab46f]/20">
            Oops! Page Not Found
        </span>


        <h1 className="mt-8 text-[120px] md:text-[180px] font-black leading-none tracking-tight text-[#111111]">
            404
        </h1>

  
        <h2 className="text-3xl md:text-5xl font-bold text-[#111111] mt-4">
            Looks Like You're Lost
        </h2>

   
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            The page you're looking for may have been moved, deleted,
            or never existed. Let's get you back to exploring
            healthy skin and confidence.
        </p>

    </div>

</section>
    </div>
  )
}

export default NotFound
