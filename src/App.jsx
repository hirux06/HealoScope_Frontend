import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Hero from './components/hero'
// import HeroPage from './components/pages/HomePage/homePage.jsx'
import './index.css'
import UserSignUp from './UserSignUp.jsx';
import DoctorSignUp from './DoctorSignUp.jsx';
import Login from "./Login.jsx"
import BlogFeed from './BlogFeed.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/us" element={<UserSignUp />} />
        <Route path="/ds" element={<DoctorSignUp />} />
        <Route path="/l" element={<Login />} />
        <Route path="/feed" element={<BlogFeed />} />

      </Routes>
    </Router>
  )
}

export default App