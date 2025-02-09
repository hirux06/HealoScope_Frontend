import React, { useState, useEffect } from "react";
import BlogFeed from "./BlogFeed";
import Profile from "./Profile";
import { Link } from "react-router-dom"; 
import axios from "axios";
const BASE_URL = import.meta.env.VITE_BACKEND_URL;


const Feed = () => {
  const userId = localStorage.getItem("userId");
  const [user, setUser] = useState(null);
  const userRole = localStorage.getItem("role");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/users/profile/${userId}`);
        setUser(response.data); 
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchUserData();
  }, [userId]);

  return (
    <div className="flex justify-center p-4 bg-gray-50">
      
      {userRole === "doctor" ? (
        <Link
        to="/create"
        className="bg-red-500 text-white px-6 py-2 rounded-full font-medium hover:bg-white-600 transition h-fit w-40 absolute top-28 left-14"
      >
        + Create Post
      </Link>) : null}
      
      <div className="fixed bottom-4 right-4">
        <Link
          to="/create"
          className="bg-red-300 text-black p-4 rounded-full shadow-lg hover:bg-red-600 hover:text-white transition"
          title="Create Post"
        >
          +
        </Link>
      </div>

      
          <BlogFeed />
      
          <Profile user={user} id={userId} className={"ml-8"}/>
        

       
      
    </div>
  );
};

export default Feed;
