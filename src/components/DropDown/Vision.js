// src/pages/AboutTGMS.js
import React from 'react';
import Sidebar from './Sidebar';

const Vision = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-4xl font-bold mb-4">About Telangana Model School</h1>
        <p className="text-lg mb-4">
          Welcome to Telangana Model School! Our institution has been committed to providing quality education
          and fostering a nurturing environment for our students. Established in 2013, we have grown to become
          a center of excellence in academic and extracurricular achievements.
        </p>
        <p className="text-lg mb-4">
          Our mission is to create a holistic learning experience that prepares students for the challenges
          of the future while instilling values of integrity, responsibility, and empathy.
        </p>
        <p className="text-lg">
          For more information about our programs, faculty, and admission procedures, please explore the other
          sections of our website or contact us directly.
        </p>
      </div>
    </div>
  );
};

export default Vision;
