import React from "react";

const About = () => {
  return (
    <div className="p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">About HealoScope</h1>
      <p className="text-lg text-gray-700 mb-4">
        Welcome to HealoScope, your trusted source for health and wellness insights. Our mission is to empower individuals with reliable health information and connect them with experts who care.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        At HealoScope, we believe that everyone deserves access to accurate and up-to-date health information. Our blog covers a wide range of topics, from nutrition and fitness to mental health and medical advancements. Our team of experts is dedicated to providing you with the knowledge you need to make informed decisions about your health.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Our platform offers a variety of functionalities to enhance your experience:
      </p>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
        <li>In-depth articles on health and wellness topics</li>
        <li>Expert advice and tips from healthcare professionals</li>
        <li>Interactive tools to track your health progress</li>
        <li>Community forums to connect with others on similar journeys</li>
      </ul>
      <p className="text-lg text-gray-700">
        Join us on our mission to promote health and wellness for all. Together, we can achieve a healthier, happier world.
      </p>
    </div>
  );
};

export default About;
