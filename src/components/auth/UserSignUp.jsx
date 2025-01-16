import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserImg from "../../assets/user_reg.avif";

const UserSignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const registerUser = async (userData) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/users/registerUser",
        userData
      );
      console.log("Registration successful:", response.data);
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.user._id);
        navigate("/feed");
      }
    } catch (error) {
      console.error(
        "Error during registration:",
        error.response?.data?.message || error.message
      );
      throw error;
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const userData = { name, email, username, password, role: "user" };

    console.log("User Sign-Up Data:", userData);

    registerUser(userData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-100 via-blue-50 to-teal-100 px-4">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl w-full">
        
        <div className="md:w-1/2 hidden md:flex justify-center items-center bg-transparent">
          <img
            src={UserImg}
            alt="Wellness Illustration"
            className="w-fit h-full object-cover p-3"
          />
        </div>

        
        <div className="md:w-1/2 w-full p-8">
          <h2 className="text-3xl font-extrabold mb-6 text-center text-teal-600">
            User Sign-Up
          </h2>
          <form onSubmit={handleSignUp} className="grid grid-cols-1 gap-4">
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
            </div>

            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
            </div>

            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Choose a username"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
            </div>

            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Choose a password"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
            </div>

            
            <div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-500 to-green-500 text-white py-2 rounded-lg font-semibold hover:from-teal-600 hover:to-green-600 shadow-lg transition-all duration-300"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserSignUp;
