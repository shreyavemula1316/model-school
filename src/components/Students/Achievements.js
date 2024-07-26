
import React from "react";

const achievements = [
  { name: 'Ravi Kumar', achievement: 'National Level Math Olympiad Winner' },
  { name: 'Ananya Reddy', achievement: 'Gold Medalist in State Swimming Championship' },
  { name: 'Tech Innovators Club', achievement: 'Winners of Inter-School Robotics Competition' },
  { name: 'Priya Sharma', achievement: 'First Place in National Science Fair' },
  { name: 'Vikram Reddy', achievement: 'Winner of State-Level Essay Writing Competition' },
  { name: 'Sarita Devi', achievement: 'Best Performer in Regional Dance Competition' },
  { name: 'Avinash Kumar', achievement: 'Top Scorer in State Mathematics Olympiad' },
  { name: 'Nisha Patel', achievement: 'Award for Excellence in Environmental Projects' },
  { name: 'Deepak Reddy', achievement: 'Outstanding Contribution to Community Service' },
  { name: 'Meera Reddy', achievement: 'Best Performer in National Debate Competition' },
];

const Achievements = () => {
  return (
    <section className="py-12 px-4 bg-blue-50">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-4xl font-bold text-center mb-8">Achievements</h3>
        <div className="bg-white p-8 rounded-lg shadow-md flex flex-col lg:flex-row items-center lg:space-x-8">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <ul className="list-disc pl-6 space-y-4 text-lg text-gray-700">
              {achievements.map((item, index) => (
                <li key={index}><strong>{item.name}:</strong> {item.achievement}</li>
              ))}
            </ul>
          </div>
          <img
            src="https://media.istockphoto.com/id/1148232057/photo/teachers-applauding-for-student-at-awards-ceremony.jpg?s=612x612&w=0&k=20&c=xNbdqOiAc8DvMvlZP7VQNlykiGIwi6AdMfLKrOrj12k="
            alt="Achievements"
            className="w-full lg:w-1/2 h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Achievements;
