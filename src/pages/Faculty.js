import React from 'react';
import facultyData from '../facultyData.json'; 

const Faculty = () => {
  return (
    <div>
      {/* Banner Section */}
      <div
        className="py-20 text-center text-black px-4" 
        style={{
          backgroundImage: 'url(/images/faculty.png)', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <h2 className="text-4xl lg:text-6xl leading-snug font-bold mb-4">Meet Our Faculty</h2>
        <p className="text-lg lg:w-1/3 mx-auto mb-6">
          Our experienced faculty are dedicated to delivering top-notch education and a supportive learning environment.
        </p>
      </div>

      {/* Faculty Profiles */}
      <div className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8">Faculty Profiles</h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {facultyData.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <h4 className="text-xl font-semibold mb-2">{member.name}</h4>
                <p className="text-md text-gray-700 mb-1">{member.role}</p>
                <p className="text-gray-500">{member.qualification}, {member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
