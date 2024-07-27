import React from 'react';
import Sidebar from './Sidebar';

const Vision = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <Sidebar />
      <div className="p-6 flex-1 text-black">
        <section className="bg-white shadow rounded p-5 mb-10">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2 bg-custom-red p-2 rounded">
              Vision and Mission
            </h1>
          </header>

          <div className="text-base leading-6 mb-6">
            <p className="mb-4">
              Kendriya Vidyalayas are known for quality education across India and the world. Inspired by the success of KV schools, the Government of India initiated the establishment of Model Schools in the 6000 Educationally Backward Blocks (EBBs) with low female literacy rates. These schools aim to provide free, quality education primarily to SC, ST, and OBC students residing in these EBBs. Model Schools function under the Telangana Model Schools Secondary Education Society.
            </p>
            <p className="mb-4">
              With increasing demand for English-medium education, Model Schools in our state are designed to offer instruction in English from classes VI to Intermediate, following the State Syllabi. These schools are envisioned to bring transformative change in rural areas by providing advanced infrastructural and instructional facilities for high-quality education.
            </p>
            <p className="mb-4">
              Model Schools aim to:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Play a pace-setting role in EBBs.</li>
              <li>Provide holistic education through curricular and co-curricular activities.</li>
              <li>Develop communicative skills and implement Continuous and Comprehensive Evaluation (CCE).</li>
              <li>Sustain girls’ enrollment by providing hostels with a capacity for 100 students.</li>
              <li>Offer student-centric, outcome-based education with moral and ethical values.</li>
              <li>Encourage learning by doing and setting correct benchmarks for all levels.</li>
              <li>Conduct scholastic and co-scholastic competitions to foster a healthy competitive environment.</li>
              <li>Develop as a “Centre of Excellence” in the mandal, district, and state.</li>
              <li>Initiate research and case studies focusing on educating the girl child and their role in societal and national growth.</li>
              <li>Adapt to future challenges and contribute to the country’s development vision.</li>
              <li>Restructure institutional values to align with global changes.</li>
              <li>Encourage students to think innovatively and pursue research in Agriculture, Science, and Technology.</li>
              <li>Educate students about current socio-economic and political situations and their roles as citizens.</li>
              <li>Organize seminars and workshops for farmers to improve the implementation of the WATER, LAND, AND TREES ACT – 2002.</li>
              <li>Conduct regular health check-ups for pregnant, lactating, and anemic women with support from PHCs and health workers.</li>
              <li>Provide wholesome, holistic, and Indianized English-medium education for deprived rural India in the context of globalization.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Vision;
