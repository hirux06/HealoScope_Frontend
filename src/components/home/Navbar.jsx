import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthStatus from "../hooks/useAuthStatus";

const Navbar = () => {
  

  const { isLoggedIn, handleLogout } = useAuthStatus();
 

  
  

  return (
    <div>
      <nav className="flex items-center justify-between p-4 shadow-md bg-white">
        
        <div className="text-2xl font-bold text-black">
          <Link to="/">
            Healo<span className="text-red-500">Scope</span>
          </Link>
        </div>

        
        <div className="flex items-center space-x-4">
          
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-red-600 hover:border border-red-500 transition"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-red-500 text-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-red-600 hover:border border-red-500 transition"
            >
              Login
            </Link>
          )}

          
          <Link
            to="/about"
            className="border border-red-500 text-red-500 px-6 py-2 rounded-full font-medium hover:bg-red-500 hover:text-white transition"
          >
            About our mission
          </Link>
          <Link
            to="/contact"
            className="border border-red-500 text-red-500 px-6 py-2 rounded-full font-medium hover:bg-red-500 hover:text-white transition"
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;