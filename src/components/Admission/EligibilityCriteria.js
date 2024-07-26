
import React from "react";

const eligibilityData = [
  { grade: 'Nursery', age: '3 years 6 months by 31st March' },
  { grade: 'Prep. (L.K.G. / PP I)', age: '4 years 6 months by 31st March' },
  { grade: 'Prep. (U.K.G. / PP 2)', age: '5 years 6 months by 31st March' },
  { grade: 'Class I', age: '6 years and 6 months by 31st March' },
  { grade: 'Class II', age: '7 years and 6 months by 31st March' },
  { grade: 'Class III', age: '8 years and 6 months by 31st March' },
  { grade: 'Class IV', age: '9 years and 6 months by 31st March' },
  { grade: 'Class V', age: '10 years and 6 months by 31st March' },
  { grade: 'Class VI', age: '11 years and 6 months by 31st March' },
  { grade: 'Class VII', age: '12 years and 6 months by 31st March' },
  { grade: 'Class VIII', age: '13 years and 6 months by 31st March' },
  { grade: 'Class IX', age: '14 years and 6 months by 31st March' },
  { grade: 'Class X', age: '15 years and 6 months by 31st March' },
  { grade: 'Class XI', age: '16 years and 6 months by 31st March' },
];

const EligibilityCriteria = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold text-center mb-12">Eligibility Criteria</h3>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Please check the following chart to know if your child can be admitted to the school for the next academic year 2023-24.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full bg-white border border-gray-300 rounded-lg shadow-md">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-4 text-left">Grade</th>
                <th className="p-4 text-left">Age</th>
              </tr>
            </thead>
            <tbody>
              {eligibilityData.map((item, index) => (
                <tr key={index}>
                  <td className="p-4 border-b">{item.grade}</td>
                  <td className="p-4 border-b">{item.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default EligibilityCriteria;
