import React from "react";

const Book = () => {
  return (
    <div>
      <section className="relative py-20 overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/10 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white text-sm backdrop-blur">
                Limited Seats Available
              </span>

              <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white leading-tight">
                Reserve Your
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Next Adventure
                </span>
              </h2>

              <p className="mt-6 text-slate-300 text-lg leading-relaxed">
                Secure your spot today and embark on an unforgettable journey.
                Whether it's a mountain trek, camping expedition, or adventure
                getaway, our team will help you plan every detail.
              </p>

              <div className="mt-10 space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">
                      Instant Confirmation
                    </h4>
                    <p className="text-slate-400 text-sm">
                      Quick response from our team.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    ★
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">
                      Best Travel Experience
                    </h4>
                    <p className="text-slate-400 text-sm">
                      Trusted by hundreds of travelers.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    ☎
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">24/7 Assistance</h4>
                    <p className="text-slate-400 text-sm">
                      We're here whenever you need us.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur opacity-30"></div>

              <div className="relative bg-white rounded-3xl p-8 lg:p-10 shadow-2xl">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-900">
                    Book Your Trip
                  </h3>
                  <p className="mt-2 text-slate-500">
                    Fill out the form and our team will contact you shortly.
                  </p>
                </div>

                <div className="booking-form-wrapper">YOUR FORM HERE</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Book;
