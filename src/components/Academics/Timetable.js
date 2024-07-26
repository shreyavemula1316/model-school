import React from "react";

const Timetable = () => {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-4xl font-semibold text-center mb-12">Academic Timetable</h3>
        <div className="text-lg text-gray-800">
          <p className="mb-4 text-center">Stay organized with our academic timetable, featuring key dates, term schedules, and examination periods.</p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white border border-gray-300 rounded-lg shadow-lg">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-4 text-left">Term</th>
                  <th className="p-4 text-left">Start Date</th>
                  <th className="p-4 text-left">End Date</th>
                  <th className="p-4 text-left">Exams</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 border-b">Term 1</td>
                  <td className="p-4 border-b">August 1, 2024</td>
                  <td className="p-4 border-b">October 31, 2024</td>
                  <td className="p-4 border-b">Mid-November 2024</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 border-b">Term 2</td>
                  <td className="p-4 border-b">November 1, 2024</td>
                  <td className="p-4 border-b">February 29, 2025</td>
                  <td className="p-4 border-b">Mid-March 2025</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 border-b">Term 3</td>
                  <td className="p-4 border-b">March 1, 2025</td>
                  <td className="p-4 border-b">June 30, 2025</td>
                  <td className="p-4 border-b">Early July 2025</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timetable;
