import React from 'react'

const Contact = () => {
  return (
    <div>

<section class="relative bg-slate-950 overflow-hidden py-24 lg:py-32">
    <div class="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-cyan-500/20"></div>

    <div class="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <span class="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
            Contact Us
        </span>

        <h1 class="mt-8 text-5xl lg:text-7xl font-bold text-white">
            Let's Build Something
            <span class="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Amazing Together
            </span>
        </h1>

        <p class="mt-6 max-w-2xl mx-auto text-lg text-slate-400">
            Have a project in mind? Need a website, mobile app, or custom software?
            We'd love to hear about your ideas.
        </p>
    </div>
</section>


<section class="py-24 bg-slate-50">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">

        <div class="grid lg:grid-cols-5 gap-10">

  
            <div class="lg:col-span-2 space-y-6">

  
                <div class="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                    <div class="flex items-start gap-4">
                        <div class="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-2xl">
                            📍
                        </div>

                        <div>
                            <h3 class="font-bold text-xl text-slate-900">
                                Office Address
                            </h3>

                            <p class="mt-2 text-slate-600">
                                Chandigarh, Punjab, India
                            </p>
                        </div>
                    </div>
                </div>

   
                <div class="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                    <div class="flex items-start gap-4">
                        <div class="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center text-2xl">
                            📞
                        </div>

                        <div>
                            <h3 class="font-bold text-xl text-slate-900">
                                Phone Number
                            </h3>

                            <p class="mt-2 text-slate-600">
                                +91 98765 43210
                            </p>
                        </div>
                    </div>
                </div>

    
                <div class="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                    <div class="flex items-start gap-4">
                        <div class="w-14 h-14 rounded-2xl bg-cyan-100 flex items-center justify-center text-2xl">
                            ✉️
                        </div>

                        <div>
                            <h3 class="font-bold text-xl text-slate-900">
                                Email Address
                            </h3>

                            <p class="mt-2 text-slate-600">
                                hello@yourcompany.com
                            </p>
                        </div>
                    </div>
                </div>

  
                <div class="bg-slate-900 rounded-3xl p-8 text-white">
                    <h3 class="text-2xl font-bold">
                        Quick Response
                    </h3>

                    <p class="mt-4 text-slate-300">
                        We usually respond within 24 hours and provide a free project consultation.
                    </p>
                </div>

            </div>

     
            <div class="lg:col-span-3">
                <div class="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-slate-100">

                    <h2 class="text-3xl font-bold text-slate-900">
                        Send Us a Message
                    </h2>

                    <p class="mt-3 text-slate-600">
                        Fill out the form below and we'll get back to you shortly.
                    </p>

                    <form class="mt-8">

                        <div class="grid md:grid-cols-2 gap-6">

                            <div>
                                <label class="block mb-2 text-sm font-medium text-slate-700">
                                    Full Name
                                </label>

                                <input type="text"
                                    class="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            </div>

                            <div>
                                <label class="block mb-2 text-sm font-medium text-slate-700">
                                    Email Address
                                </label>

                                <input type="email"
                                    class="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            </div>

                        </div>

                        <div class="grid md:grid-cols-2 gap-6 mt-6">

                            <div>
                                <label class="block mb-2 text-sm font-medium text-slate-700">
                                    Phone Number
                                </label>

                                <input type="tel"
                                    class="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            </div>

                            <div>
                                <label class="block mb-2 text-sm font-medium text-slate-700">
                                    Service Required
                                </label>

                                <select
                                    class="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500">

                                    <option>Select Service</option>
                                    <option>Web Development</option>
                                    <option>Mobile App Development</option>
                                    <option>UI/UX Design</option>
                                    <option>Digital Marketing</option>

                                </select>
                            </div>

                        </div>

                        <div class="mt-6">
                            <label class="block mb-2 text-sm font-medium text-slate-700">
                                Project Details
                            </label>

                            <textarea rows="6"
                                class="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                        </div>

                        <button
                            class="mt-8 w-full rounded-xl bg-blue-600 px-8 py-4 text-white font-semibold hover:bg-blue-700 transition">
                            Send Message
                        </button>

                    </form>

                </div>
            </div>

        </div>
    </div>
</section>

<section class="bg-white pb-24">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">

        <div class="rounded-3xl overflow-hidden shadow-lg border border-slate-200">
            <iframe
                src="https://maps.google.com/maps?q=chandigarh&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="500"
                style="border:0;"
                allowfullscreen=""
                loading="lazy">
            </iframe>
        </div>

    </div>
</section>
    </div>
  )
}

export default Contact
