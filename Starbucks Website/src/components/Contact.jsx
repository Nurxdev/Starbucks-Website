import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-green-700 to-green-900 text-white px-5 md:px-28"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 uppercase">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-4"></div>
          <p className="text-xl text-green-100">We'd love to hear from you</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <iframe
              style={{ borderRadius: "10px" }}
              width="100%"
              height="400"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
          <div>
            <div className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full py-4 px-6 rounded-full bg-white/20 border border-white/20 text-white placeholder-green-200 focus:outline-none focus-border-white transition"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full py-4 px-6 rounded-full bg-white/20 border border-white/20 text-white placeholder-green-200 focus:outline-none focus-border-white transition"
                />
              </div>
              <div>
                <textarea
                  rows={5}
                  required
                  className="w-full py-4 px-6 rounded-3xl  bg-white/20 border border-white/20 text-white placeholder-green-200 focus:outline-none focus-border-white transition resize-none"
                ></textarea>
              </div>
              <button className="w-full bg-white text-green-700 hover:bg-green-50 px-8 py-4 rounded-full font-bold transition text-lg cursor-pointer">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
