import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import RegImg from "../../assets/reg_img.avif"

const DoctorSignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [bio, setBio] = useState("");
  const [experienceYears, setExperienceYears] = useState("");
  const navigate = useNavigate();

  const registerDoctor = async (doctorData) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/users/registerUser",
        doctorData
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
    const doctorData = {
      name,
      email,
      username,
      password,
      specialization,
      bio,
      experienceYears,
      role: "doctor",
    };

    console.log("Doctor Sign-Up Data:", doctorData);

    registerDoctor(doctorData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-2xl overflow-hidden max-w-4xl w-full">
        
        <div className="md:w-1/2 hidden md:flex justify-center items-center">
          <img
            src={RegImg} 
            alt="Doctor Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        
        <div className="md:w-1/2 w-full p-6">
          <h2 className="text-3xl font-extrabold mb-6 text-center text-red-600">
            Doctor Sign-Up
          </h2>
          <form onSubmit={handleSignUp} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400"
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
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400"
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
                placeholder="Choose a password"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400"
                required
              />
            </div>

            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Specialization
              </label>
              <input
                type="text"
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)}
                placeholder="Enter your specialization"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>

            
            <div className="col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Bio
              </label>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="Write a short bio"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400"
              ></textarea>
            </div>

            
            <div>
              <label className="block w-29 text-sm font-semibold text-gray-700 mb-1">
                Years of Experience
              </label>
              <input
                type="number"
                value={experienceYears}
                onChange={(e) => setExperienceYears(e.target.value)}
                placeholder="Enter your years of experience"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>

            
            <div className="col-span-2">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-red-600 hover:to-pink-600 shadow-lg transition-all duration-300"
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

export default DoctorSignUp;
