import React from 'react';
import { FaLightbulb, FaChalkboardTeacher, FaGlobe, FaShieldAlt, FaWallet, FaBook } from 'react-icons/fa';

const DescriptionSection = () => {
  return (
    <div className="bg-gray-100 p-12 rounded-lg shadow-lg max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Welcome to Model School</h2>
      <div className="flex flex-col md:flex-row">
        {/* Paragraph Section */}
        <div className="md:w-1/2 md:pr-8">
          <p className="text-gray-700 leading-relaxed mb-8">
            At Model School, we believe in nurturing young minds to become global citizens and lifelong learners. Our approach is rooted in fostering curiosity and a love for learning, creating a vibrant and inclusive environment where students thrive. We aim to build a foundation of knowledge and values through engaging and meaningful experiences.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Our school offers a diverse range of opportunities and a supportive community to help students excel academically and personally. At Model School, Hyderabad, we provide:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-8 pl-6">
            <li className="mb-2 flex items-center">
              <span className="text-green-500 mr-3">✔️</span>
              Enriching programs with after-school activities
            </li>
            <li className="mb-2 flex items-center">
              <span className="text-green-500 mr-3">✔️</span>
              Opportunities for hands-on scientific exploration
            </li>
            <li className="mb-2 flex items-center">
              <span className="text-green-500 mr-3">✔️</span>
              A positive and stimulating learning environment
            </li>
            <li className="mb-2 flex items-center">
              <span className="text-green-500 mr-3">✔️</span>
              Innovative learning through interactive play
            </li>
            <li className="mb-2 flex items-center">
              <span className="text-green-500 mr-3">✔️</span>
              Personalized attention with small class sizes
            </li>
          </ul>
        </div>
        {/* List Section */}
        <div className="md:w-1/2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <FaLightbulb className="text-yellow-500 mb-4" size={60} />
              <span className="text-lg">Cultivating student potential with a unique learning culture</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaChalkboardTeacher className="text-blue-500 mb-4" size={60} />
              <span className="text-lg">Dynamic and highly qualified teaching staff</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaGlobe className="text-green-500 mb-4" size={60} />
              <span className="text-lg">Global perspective integrated into the curriculum</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaShieldAlt className="text-red-500 mb-4" size={60} />
              <span className="text-lg">A safe and welcoming environment</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaWallet className="text-teal-500 mb-4" size={60} />
              <span className="text-lg">Affordable and transparent fee structure</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaBook className="text-purple-500 mb-4" size={60} />
              <span className="text-lg">Innovative and integrated curriculum</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionSection;
