import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-transparent shadow-md">
      <Link to="/" className="text-3xl font-bold">
        Healo<span className="text-red-500">Scope</span>
      </Link>
      <div className="space-x-4">
      <Link
          to="/login"
          className="bg-red-500 text-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-red-600 hover: border border-red-500 transition"
        >
          Login
        </Link>
        <Link
          to="/about"
          className="text-red-500 border border-red-500 px-4 py-2 rounded-full font-medium hover:bg-red-500 hover:text-white transition"
        >
          About our mission
        </Link>
        <Link
          to="/contact"
          className="text-red-500 border border-red-500 px-4 py-2 rounded-full font-medium hover:bg-red-500 hover:text-white transition"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
