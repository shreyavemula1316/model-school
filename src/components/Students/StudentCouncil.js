
import React from "react";
import { FaUsers } from "react-icons/fa";

const councilMembers = [
  { role: 'President', name: 'Aadhya Reddy', grade: 'Grade 12', textColor: 'text-blue-600' },
  { role: 'Vice President', name: 'Ravi Kumar', grade: 'Grade 12', textColor: 'text-green-600' },
  { role: 'Secretary', name: 'Saanvi Patel', grade: 'Grade 11', textColor: 'text-purple-600' },
  { role: 'Treasurer', name: 'Arjun Sharma', grade: 'Grade 11', textColor: 'text-red-600' },
  { role: 'Event Coordinator', name: 'Maya Devi', grade: 'Grade 10', textColor: 'text-orange-600' },
];

const StudentCouncil = () => {
  return (
    <section className="py-12 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold text-center mb-8">Student Council</h3>
        <div className="flex flex-wrap -m-4">
          {councilMembers.map((member, index) => (
            <div key={index} className="p-4 w-full sm:w-1/2 lg:w-1/3">
              <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-200 mr-4">
                  <FaUsers className={`text-4xl ${member.textColor}`} />
                </div>
                <div>
                  <h4 className={`text-2xl font-semibold mb-1 ${member.textColor}`}>{member.role}</h4>
                  <p className="text-lg font-medium mb-1">{member.name}</p>
                  <p className="text-gray-700">{member.grade}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentCouncil;
