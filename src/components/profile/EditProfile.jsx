import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    role: "",
    bio: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/users/profile/${userId}`);
        setUserData(response.data.users);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error.message);
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:8080/users/editProfile/${userId}`,
        userData
      );
      alert("Profile updated successfully!");
      navigate("/profile/" + userId);
    } catch (error) {
      console.error("Error updating profile:", error.message);
      alert("Failed to update profile.");
    }
  };

  if (loading) {
    return (
      <div className="text-center mt-5 text-lg font-medium text-gray-600">
        Loading profile data...
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-6">Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
            disabled
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2">Role</label>
          <input
            type="text"
            name="role"
            value={userData.role}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
            disabled
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2">Bio</label>
          <textarea
            name="bio"
            value={userData.bio}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            rows="5"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-red-500 text-white px-6 py-2 rounded-full font-medium hover:bg-red-600 transition"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
