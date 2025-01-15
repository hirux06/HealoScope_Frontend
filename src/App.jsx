import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import UserSignUp from './UserSignUp.jsx';
import DoctorSignUp from './DoctorSignUp.jsx';
import Login from "./Login.jsx"
import BlogFeed from './BlogFeed.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/uSign" element={<UserSignUp />} />
        <Route path="/dSign" element={<DoctorSignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<BlogFeed />} />

      </Routes>
    </Router>
  )
}

export default App