
import React from "react";
import { FaStar, FaLeaf, FaLaptopCode } from "react-icons/fa";
import ClubCard from "./ClubCard";

const clubs = [
  {
    icon: FaStar,
    color: 'text-yellow-500',
    title: 'Literary Society',
    description: 'Explore literature and engage in discussions and writing workshops.',
  },
  {
    icon: FaLeaf,
    color: 'text-green-500',
    title: 'Environmental Club',
    description: 'Work on projects related to sustainability and environmental conservation.',
  },
  {
    icon: FaStar,
    color: 'text-blue-500',
    title: 'Astronomy Club',
    description: 'Explore the universe through stargazing and astronomy projects.',
  },
  {
    icon: FaLaptopCode,
    color: 'text-cyan-500',
    title: 'Coding Club',
    description: 'Learn programming and work on exciting coding projects.',
  },
];

const ClubAndSocieties = () => {
  return (
    <section className="py-12 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold text-center mb-8">Clubs and Societies</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubs.map((club, index) => (
            <ClubCard
              key={index}
              icon={club.icon}
              color={club.color}
              title={club.title}
              description={club.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClubAndSocieties;
