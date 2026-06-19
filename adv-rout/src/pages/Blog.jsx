import React from 'react'

const Blog = () => {
  return (
    <div>

    <section className="relative bg-slate-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
            <span className="bg-blue-600 px-4 py-2 rounded-full text-sm font-medium">
                Latest Insights
            </span>

            <h1 className="text-4xl md:text-6xl font-bold mt-6">
                Our Blog & Resources
            </h1>

            <p className="max-w-2xl mx-auto mt-6 text-gray-300 text-lg">
                Discover expert insights, industry trends, practical guides,
                and valuable resources to help grow your business.
            </p>


            <div className="max-w-xl mx-auto mt-10">
                <div className="bg-white rounded-xl p-2 flex">
                    <input
                        type="text"
                        placeholder="Search articles..."
                        className="w-full px-4 py-3 text-gray-700 outline-none rounded-lg"
                    >
                    <button className="bg-blue-600 hover:bg-blue-700 px-6 rounded-lg text-white font-medium transition">
                        Search
                    </button>
                </div>
            </div>
        </div>
    </section>


    <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">

            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
                <div className="grid lg:grid-cols-2">

                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643"
                            alt=""
                            className="w-full h-full object-cover"
                        >
                    </div>

                    <div className="p-10 flex flex-col justify-center">

                        <span className="text-blue-600 font-semibold">
                            Featured Article
                        </span>

                        <h2 className="text-3xl font-bold mt-3">
                            Complete Guide to Growing Your Business Online
                        </h2>

                        <p className="text-gray-600 mt-5">
                            Learn proven digital marketing strategies,
                            SEO techniques, and growth tactics that help
                            businesses attract more customers and increase
                            revenue.
                        </p>

                        <div className="flex items-center gap-4 mt-8">
                            <img
                                src="https://i.pravatar.cc/60"
                                className="w-12 h-12 rounded-full"
                            >
                            <div>
                                <h4 className="font-semibold">John Smith</h4>
                                <p className="text-sm text-gray-500">
                                    June 15, 2026 · 8 min read
                                </p>
                            </div>
                        </div>

                        <a href="#"
                           className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition">
                            Read Article
                        </a>

                    </div>

                </div>
            </div>

        </div>
    </section>


    <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">

            <div className="grid lg:grid-cols-4 gap-10">

            
                <div className="lg:col-span-3">

                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

       
                        <article className="bg-white rounded-2xl overflow-hidden shadow hover:-translate-y-2 transition duration-300">

                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                                className="w-full h-52 object-cover"
                            >

                            <div className="p-6">

                                <span className="text-sm text-blue-600 font-medium">
                                    Marketing
                                </span>

                                <h3 className="text-xl font-bold mt-3">
                                    SEO Tips to Rank Higher on Google
                                </h3>

                                <p className="text-gray-600 mt-3">
                                    Improve your rankings and increase
                                    organic traffic with these practical
                                    SEO strategies.
                                </p>

                                <a href="#"
                                   className="inline-block mt-5 font-semibold text-blue-600">
                                    Read More →
                                </a>

                            </div>
                        </article>

                        <article className="bg-white rounded-2xl overflow-hidden shadow hover:-translate-y-2 transition">
                            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                                className="w-full h-52 object-cover">
                            <div className="p-6">
                                <span className="text-sm text-blue-600">Business</span>
                                <h3 className="text-xl font-bold mt-3">
                                    Business Growth Strategies
                                </h3>
                                <p className="text-gray-600 mt-3">
                                    Discover scalable growth systems for
                                    modern businesses.
                                </p>
                                <a href="#" className="inline-block mt-5 text-blue-600 font-semibold">
                                    Read More →
                                </a>
                            </div>
                        </article>

                        <article className="bg-white rounded-2xl overflow-hidden shadow hover:-translate-y-2 transition">
                            <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                                className="w-full h-52 object-cover">
                            <div className="p-6">
                                <span className="text-sm text-blue-600">Technology</span>
                                <h3 className="text-xl font-bold mt-3">
                                    Future of AI in Business
                                </h3>
                                <p className="text-gray-600 mt-3">
                                    Explore how AI is transforming industries.
                                </p>
                                <a href="#" className="inline-block mt-5 text-blue-600 font-semibold">
                                    Read More →
                                </a>
                            </div>
                        </article>

                    </div>

                </div>


                <aside>

  
                    <div className="bg-white rounded-2xl p-6 shadow">

                        <h3 className="text-xl font-bold mb-5">
                            Categories
                        </h3>

                        <ul className="space-y-3">

                            <li>
                                <a href="#" className="flex justify-between hover:text-blue-600">
                                    Marketing <span>(12)</span>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="flex justify-between hover:text-blue-600">
                                    Business <span>(8)</span>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="flex justify-between hover:text-blue-600">
                                    Technology <span>(15)</span>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="flex justify-between hover:text-blue-600">
                                    Design <span>(6)</span>
                                </a>
                            </li>

                        </ul>

                    </div>

              
                    <div className="bg-blue-600 text-white rounded-2xl p-6 mt-8">

                        <h3 className="text-2xl font-bold">
                            Subscribe
                        </h3>

                        <p className="mt-3 text-blue-100">
                            Get the latest articles delivered directly
                            to your inbox.
                        </p>

                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full mt-5 px-4 py-3 rounded-lg text-gray-700"
                        >

                        <button
                            className="w-full mt-4 bg-white text-blue-600 py-3 rounded-lg font-semibold">
                            Subscribe Now
                        </button>

                    </div>

                </aside>

            </div>

        </div>
    </section>

    </div>
  )
}

export default Blog
