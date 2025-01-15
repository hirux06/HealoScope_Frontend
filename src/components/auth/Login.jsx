import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginUser = async (loginData) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/users/login",
        loginData
      );
      console.log("Login successful:", response.data);

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.user.id);
        navigate("/feed");
      }
    } catch (error) {
      console.error(
        "Error during login:",
        error.response?.data?.message || error.message
      );
      throw error;
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const loginData = { email, password };

    console.log("User Login Data:", loginData);

    loginUser(loginData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-red-100  px-4 ">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-2xl overflow-hidden max-w-4xl w-full">
        
        <div className="md:w-1/2 hidden md:flex justify-center items-center bg-gradient-to-br from-red-300  ">
          <img
            src="https://via.placeholder.com/400x500" // Replace with your image URL
            alt="Login Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        
        <div className="md:w-1/2 w-full p-6">
          <h2 className="text-3xl font-extrabold mb-6 text-center text-red-600">
            Login
          </h2>
          <form onSubmit={handleLogin} className="grid grid-cols-1 gap-4">
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400"
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
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400"
                required
              />
            </div>

            
            <div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white py-2 rounded-lg font-semibold hover:from-red-600 hover:to-pink-600 shadow-lg transition-all duration-300"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
