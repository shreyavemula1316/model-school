import React from "react";

const Curriculum = () => {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-4xl font-semibold text-center mb-12">Curriculum Overview</h3>
        <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:bg-gray-50 transition duration-300">
            <h4 className="text-2xl font-bold mb-4">Primary Education (Grades 1-5)</h4>
            <p className="text-lg text-gray-700">
              Our primary curriculum builds a strong foundation with English, Mathematics, Science, Social Studies, Art, and Physical Education. We focus on interactive and hands-on learning to spark curiosity.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:bg-gray-50 transition duration-300">
            <h4 className="text-2xl font-bold mb-4">Secondary Education (Grades 6-10)</h4>
            <p className="text-lg text-gray-700">
              The secondary curriculum includes core subjects like English, Mathematics, Science, Social Studies, and Computer Science. We emphasize practical experiences and critical thinking skills.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:bg-gray-50 transition duration-300">
            <h4 className="text-2xl font-bold mb-4">Senior Secondary Education (Grades 11-12)</h4>
            <p className="text-lg text-gray-700 mb-2"><strong>Science Stream:</strong> Physics, Chemistry, Biology, Mathematics, Computer Science, and English.</p>
            <p className="text-lg text-gray-700"><strong>Commerce Stream:</strong> Accountancy, Business Studies, Economics, Mathematics, and English.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
