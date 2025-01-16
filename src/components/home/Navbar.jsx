import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {


 
  return (
    <div>
      {/* Navbar */}
      <nav className="flex items-center justify-between p-4 shadow-md bg-white">
        {/* Logo */}
        <div className="text-2xl font-bold text-black">
          <Link to="/">
            <span className="text-red-500">Healo</span>Scope
          </Link>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center space-x-4">
          <Link to="/login" className="bg-red-500 text-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-red-600 hover: border border-red-500 transition">
            Login
          </Link>
          <Link to="/about" className="border border-red-500 text-red-500 px-6 py-2 rounded-full font-medium hover:bg-red-500 hover:text-white transition">
            About our mission
          </Link>
          <Link to="/contact" className="border border-red-500 text-red-500 px-6 py-2 rounded-full font-medium hover:bg-red-500 hover:text-white transition">
            Contact Us
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
