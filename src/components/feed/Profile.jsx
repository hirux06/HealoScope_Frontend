import React from "react";
import { useNavigate } from "react-router-dom";

const ProfileCard = ({ user, id, className }) => {
  const navigate = useNavigate();

  if (!user) return null;
  const classs = "bg-white shadow-md rounded-md p-4 w-80 h-fit " + className;

  return (
    <div className={classs} >
      <div className="flex items-center">
        <div className="w-14 h-14 rounded-full flex justify-center items-center text-white text-xl font-bold">
            {user.users.profilePicture ? <img
            src={user?.users?.profilePicture}
            alt="Profile"
          /> : <div className="w-14 h-14 rounded-full border-none bg-green-400 flex justify-center items-center text-white text-xl font-bold">
          {user.users.name ? user.users.name[0].toUpperCase() : "U"}
        </div>}
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-semibold">{user.users.name}</h3>
          <p className="text-sm text-gray-600">{user.users.email}</p>
        </div>
      </div>
      <button
        onClick={() => navigate(`/profile/${id}`)}
        className="mt-4 w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition"
      >
        View Profile
      </button>
    </div>
  );
};

export default ProfileCard;
