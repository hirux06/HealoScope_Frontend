import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginUser = async (loginData) => {
    try {
        const response = await axios.post("http://localhost:8080/users/login", loginData);
        console.log("Login successful:", response.data);

        if (response.data.token) {
          localStorage.setItem("token", response.data.token); 
          localStorage.setItem("userId", response.data.user.id); 
          navigate("/feed"); 
        }
    } catch (error) {
        console.error("Error during login:", error.response?.data?.message || error.message);
        throw error;
    }
};

  const handleLogin = (e) => {
    e.preventDefault();
    const loginData = { email, password };

    // Call API for user login
    console.log("User Login Data:", loginData);

    loginUser(loginData);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-lg rounded-lg p-8 w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-red-500">
          Login
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
