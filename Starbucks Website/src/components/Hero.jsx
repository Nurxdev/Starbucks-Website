import React from "react";
import HeroBg from "../assets/hero.png";
const Hero = () => {
  return (
    <section
      id="#home"
      className="min-h-screen bg-gradient-to-br from bg-green-50 to-green-100 flex justify-center items-center px-5 md:px-28"
    >
      <div className="container mx-auto w-full sm:pt-0 pt-32">
        <div className="flex md:flex-row flex-col items-center gap-20">
          <div className="md:w-1/2 w-full">
            <h1 className="text-4x sm:text-5xl md:text-7xl font-bold text-gray-900 mb-6 uppercase">
              It's not just Coffee
              <span className="text-green-700">It's Starbucks</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              illum, aspernatur architecto vero, doloremque mollitia expedita
              voluptas accusantium nemo quaerat sapiente nulla eius suscipit
              odio tempore incidunt, sint distinctio omnis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-full font-semibold transition text-lg cursor-pointer">
                Order Now
              </button>
              <button className="border-2 border-green-700 hover:bg-green-700 hover:text-white px-8 py-4 rounded-full font-semibold transition text-lg cursor-pointer">
                Explore Menu
              </button>
            </div>
          </div>

          <div className="relative ">
            <img src={HeroBg} className="md:w-[500px] w-full " alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
