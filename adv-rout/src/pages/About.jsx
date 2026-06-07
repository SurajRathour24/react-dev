import React from 'react'

const About = () => {
  return (
    <div>
      <section className="py-24 lg:py-32">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">

        <span className="inline-flex px-4 py-2 rounded-full bg-gray-100 text-sm font-medium">
            About Our Company
        </span>

        <h1 className="mt-6 text-5xl lg:text-7xl font-bold">
            Building Digital Experiences
            That Make An Impact
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
            We help businesses transform ideas into powerful digital
            products through innovative design, development, and strategy.
        </p>

    </div>
</section>
<section className="py-24">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
                <div className="aspect-[4/5] rounded-3xl bg-gray-100"></div>
            </div>

            <div>

                <span className="text-sm uppercase tracking-wider font-semibold">
                    Our Story
                </span>

                <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
                    From Passion To Profession
                </h2>

                <p className="mt-6 text-gray-600 leading-relaxed">
                    What started as a small vision quickly evolved into a
                    dedicated team focused on delivering exceptional digital
                    solutions. Over the years, we've partnered with startups,
                    entrepreneurs, and established businesses to help them
                    succeed online.
                </p>

                <p className="mt-4 text-gray-600 leading-relaxed">
                    Our commitment to quality, innovation, and client success
                    continues to drive everything we do.
                </p>

            </div>

        </div>

    </div>
</section>
<section className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white p-10 rounded-3xl">
                <h3 className="text-3xl font-bold">
                    Our Mission
                </h3>

                <p className="mt-4 text-gray-600">
                    To empower businesses with innovative digital solutions
                    that create growth, engagement, and long-term success.
                </p>
            </div>

            <div className="bg-white p-10 rounded-3xl">
                <h3 className="text-3xl font-bold">
                    Our Vision
                </h3>

                <p className="mt-4 text-gray-600">
                    To become a trusted global partner known for creativity,
                    excellence, and meaningful digital transformation.
                </p>
            </div>

        </div>

    </div>
</section>
    </div>
  )
}

export default About
