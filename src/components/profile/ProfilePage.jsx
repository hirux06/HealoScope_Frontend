import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import userImg from "../../assets/default.jpeg";

const ProfilePage = ({ currentUser }) => {
  const [user, setUser] = useState(null);
  const [isFollowing, setIsFollowing] = useState(false);
  const { userId } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/users/profile/${userId}`);
        const userData = response.data;

        setUser(userData);

        
        // if (userData.users.followers.includes(currentUser)) {
        //   setIsFollowing(true);  
        // } else {
        //   setIsFollowing(false);
        // }
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchUserData();
  }, [userId, currentUser]);

  // const handleFollow = async () => {
  //   const url = isFollowing
  //     ? `http://localhost:8080/users/unfollow/${userId}`
  //     : `http://localhost:8080/users/follow/${userId}`;
  
  //   try {
  //     const response = await axios.put(
  //       url,
  //       {userId}
  //     );
  
  //     setIsFollowing(!isFollowing);
  //     setUser((prevUser) => ({
  //       ...prevUser,
  //       followers: response.data.followers,
  //       following: response.data.following,
  //     }));
  //   } catch (error) {
  //     console.error("Error following/unfollowing:", error.message);
  //   }
  // };
  
  
  if (!user) {
    return <div className="loader">Loading...</div>;
  }

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
            <h1 className="text-3xl font-bold text-red-600">
              {user?.users?.name || "Unknown User"}
            </h1>
            <p className="text-lg text-gray-700">{user?.users?.email}</p>
            <p className="text-sm text-gray-500">
              {user?.users?.createdAt ? new Date(user.users.createdAt).toLocaleDateString() : "N/A"}
            </p>
            <button
              // onClick={handleFollow}
              className={`px-4 py-2 rounded ${
                isFollowing ? "bg-gray-300" : "bg-blue-500 text-white"
              }`}
            >
              {isFollowing ? "Unfollow" : "Follow"}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <p className="font-semibold text-red-600">
              {/* {user?.users?.followers.length || 0} */}0
            </p>
            <p className="text-gray-600">Followers</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-red-600">
              {/* {user?.users?.following.length || 0} */}0
            </p>
            <p className="text-gray-600">Following</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-red-600">
              {/* {user?.users?.experienceYears || 0} Years */}0
            </p>
            <p className="text-gray-600">Experience</p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">About Me</h2>
          <p className="text-gray-700">
            {user?.users?.bio || "No bio available."}
          </p>
        </div>

        <div className="text-center mt-6">
          <button
            className="bg-red-600 text-white py-2 px-6 rounded-full font-semibold hover:bg-red-700 transition-colors"
            onClick={() => navigate("/editProfile")}
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
