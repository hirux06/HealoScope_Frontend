import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuthStatus = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const checkLoginStatus = () => {
    const userId = localStorage.getItem("userId");
    setIsLoggedIn(!!userId);
  };

  useEffect(() => {
    checkLoginStatus();

    window.addEventListener("storage", checkLoginStatus);

    return () => {
      window.removeEventListener("storage", checkLoginStatus);
    };
  });

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("role");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return { isLoggedIn, handleLogout };
};

export default useAuthStatus;
