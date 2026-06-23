import React from 'react'

const Book = () => {
  return (
    <div>
      <section class="relative py-20 overflow-hidden bg-slate-950">
    

    <div class="absolute inset-0">
        <div class="absolute top-0 left-0 w-96 h-96 bg-indigo-500/10 blur-3xl rounded-full"></div>
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-6 lg:px-8">

        <div class="grid lg:grid-cols-2 gap-12 items-center">

 
            <div>
                <span class="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white text-sm backdrop-blur">
                    Limited Seats Available
                </span>

                <h2 class="mt-6 text-4xl md:text-5xl font-bold text-white leading-tight">
                    Reserve Your
                    <span class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        Next Adventure
                    </span>
                </h2>

                <p class="mt-6 text-slate-300 text-lg leading-relaxed">
                    Secure your spot today and embark on an unforgettable journey.
                    Whether it's a mountain trek, camping expedition, or adventure
                    getaway, our team will help you plan every detail.
                </p>

                <div class="mt-10 space-y-5">

                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                            ✓
                        </div>
                        <div>
                            <h4 class="text-white font-semibold">Instant Confirmation</h4>
                            <p class="text-slate-400 text-sm">Quick response from our team.</p>
                        </div>
                    </div>

                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                            ★
                        </div>
                        <div>
                            <h4 class="text-white font-semibold">Best Travel Experience</h4>
                            <p class="text-slate-400 text-sm">Trusted by hundreds of travelers.</p>
                        </div>
                    </div>

                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                            ☎
                        </div>
                        <div>
                            <h4 class="text-white font-semibold">24/7 Assistance</h4>
                            <p class="text-slate-400 text-sm">We're here whenever you need us.</p>
                        </div>
                    </div>

                </div>
            </div>
              </div>

            </div>

</section>
    </div>
  )
}

export default Book
