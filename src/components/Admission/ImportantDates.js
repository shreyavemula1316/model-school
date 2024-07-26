
import React from "react";

const importantDates = [
  { event: 'Admission Enquiry Opens', date: 'January 1, 2024' },
  { event: 'Registration Deadline', date: 'March 31, 2024' },
  { event: 'Application Submission Deadline', date: 'April 15, 2024' },
  { event: 'Fee Payment Deadline', date: 'April 30, 2024' },
  { event: 'Orientation Program', date: 'May 15, 2024' },
  { event: 'Academic Year Starts', date: 'June 1, 2024' },
];

const ImportantDates = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold text-center mb-12">Important Dates and Deadlines</h3>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Stay informed about the important dates and deadlines for the admission process to ensure a smooth application.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full bg-white border border-gray-300 rounded-lg shadow-md">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-4 text-left">Event</th>
                <th className="p-4 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {importantDates.map((item, index) => (
                <tr key={index}>
                  <td className="p-4 border-b">{item.event}</td>
                  <td className="p-4 border-b">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ImportantDates;
