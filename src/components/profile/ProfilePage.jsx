import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import userImg from "../../assets/default.jpeg"


const ProfilePage = () => {
  const [user, setUser] = useState(null);

  const {userId} = useParams();

  // Fetch user data based on userId
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/users/profile/${userId}`);
        setUser(response.data); // Store user data in state
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };
    
    fetchUserData();
  }, [userId]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="bg-red-100 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        
        <div className="flex items-center mb-8">
          <img
            src={userImg}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-red-500 object-cover"
          />
          <div className="ml-6">
            <h1 className="text-3xl font-bold text-red-600">{user.users.name}</h1>
            <p className="text-lg text-gray-700">{user.users.email}</p>
            <p className="text-sm text-gray-500">{user.users.createdAt}</p>
          </div>
        </div>

        
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <p className="font-semibold text-red-600">{user.users.followers}</p>
            <p className="text-gray-600">Followers</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-red-600">{user.users.following}</p>
            <p className="text-gray-600">Following</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-red-600">{user.users.experienceYears} Years</p>
            <p className="text-gray-600">Experience</p>
          </div>
        </div>

        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">About Me</h2>
          <p className="text-gray-700">{user.users.bio || "No bio available."}</p>
        </div>

        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">Role and Specialization</h2>
          <p className="text-gray-700">Role: {user.users.role || "User"}</p>
          <p className="text-gray-700">Specialization: {user.users.specialization || "Not Available"}</p>
        </div>

        
        <div className="text-center mt-6">
          <button
            className="bg-red-600 text-white py-2 px-6 rounded-full font-semibold hover:bg-red-700 transition-colors"
            onClick={() => alert("Redirect to Edit Profile")}
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
