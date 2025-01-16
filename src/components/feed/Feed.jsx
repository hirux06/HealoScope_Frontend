import React, { useState, useEffect } from "react";
import BlogFeed from "./BlogFeed";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import axios from "axios";

const Feed = () => {
  const userId = localStorage.getItem("userId");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/users/profile/${userId}`);
        setUser(response.data); 
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchUserData();
  }, [userId]);

  return (
    <div className="flex justify-center p-4 bg-gray-50">
       {/* <div className="flex justify-end mb-6 h-fit w-48"> */}
      <Link
        to="/create"
        className="bg-red-500 text-white px-6 py-2 rounded-full font-medium hover:bg-white-600 transition h-fit w-40 fixed top-28 left-14"
      >
        + Create Post
      </Link>
      {/* </div>  */}
      <div className="fixed bottom-4 right-4">
        <Link
          to="/create"
          className="bg-red-300 text-black p-4 rounded-full shadow-lg hover:bg-red-600 hover:text-white transition"
          title="Create Post"
        >
          +
        </Link>
      </div>

      {/* <div className="flex w-full"> */}
         {/* Profile Section
         <div className="hidden lg:block w-2 ml-8">
          {user ? (
            <Profile user={user} id={userId} />
          ) : (
            <div className="text-gray-500 text-center mt-4">Loading profile...</div>
          )}
        </div> */}
        {/* BlogFeed Section */}
        {/* <div className="flex-1 w-1/2"> */}
          <BlogFeed />
        {/* </div> */}
        {/* <div className=""> */}
          <Profile user={user} id={userId} />
        {/* </div>  */}

       
      {/* </div> */}
    </div>
  );
};

export default Feed;
