import React from "react";
import aboutImg from "../assets/about.jpg";
const About = () => {
  return (
    <section id="#about" className="py-20 bg-white px-5 md:px-28">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 uppercase">
            About Us
          </h2>
          <div className="w-24 h-1 bg-green-700 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={aboutImg}
              className="rounded-3xl shadow-xl w-full"
              alt=""
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
              mollitia officiis, deserunt aliquam modi in nam enim. Soluta, quod
              voluptatum?
            </p>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium quo repellendus atque voluptatum eum officiis porro
              delectus amet totam cumque, odio earum commodi eos tempora?
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-green-50 rounded-2xl">
                <p className="text-4xl font-bold text-green-700 mb-2">50+</p>
                <p className="text-gray-600">Year Experience</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-2xl">
                <p className="text-4xl font-bold text-green-700 mb-2">30+</p>
                <p className="text-gray-600">Store Wordwide</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-2xl">
                <p className="text-4xl font-bold text-green-700 mb-2">100M+</p>
                <p className="text-gray-600">Happy Customers</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-2xl">
                <p className="text-4xl font-bold text-green-700 mb-2">80+</p>
                <p className="text-gray-600">Coffees Served Daily</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
