import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import UserSignUp from './components/auth/UserSignUp.jsx';
import DoctorSignUp from './components/auth/DoctorSignUp.jsx';
import Login from "./components/auth/Login.jsx"
import BlogFeed from './components/feed/BlogFeed.jsx';
import ProfilePage from './components/profile/ProfilePage.jsx';
import Home from './components/home/Home.jsx';
import Navbar from './components/home/Navbar.jsx';
import About from './components/utitlities/About.jsx';
import Contact from './components/utitlities/Contact.jsx';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/uSign" element={<UserSignUp />} />
        <Route path="/dSign" element={<DoctorSignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<BlogFeed />} />
        <Route path="/profile/:userId" element={<ProfilePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App