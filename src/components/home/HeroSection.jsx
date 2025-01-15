import React from "react";
import HeroImage from "../../assets/hero_img.svg"; // Add your image in the `assets` folder
import { Link, useNavigate } from "react-router-dom";


const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 py-10 bg-transparent mx-16">
      
      <div className="max-w-md">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Discover reliable health insights, authored by experts.
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Connect, learn, and take charge of your well-being with{" "}
          <span className="font-bold text-red-500">HealoScope</span>.
        </p>
        <div className="space-x-4">
          <Link to="/dSign" className="bg-red-500 text-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-red-600 hover: border border-red-500 transition">
            Start Writing →
          </Link>
          <Link to="/uSign" className="border border-red-500 text-red-500 px-6 py-2 rounded-full font-medium hover:bg-red-500 hover:text-white transition">
            Read Now →
          </Link>
        </div>
      </div>

      
      <div className="mt-10 md:mt-0 bg-transparent">
        <img
          src={HeroImage}
          alt="Doctor consulting a patient"
          className="max-w-full h-auto"
        />
      </div>
    </section>
  );
};

export default HeroSection;
