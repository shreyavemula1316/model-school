
import React from "react";
import { FaMusic, FaTheaterMasks, FaPaintBrush, FaRobot, FaBook } from "react-icons/fa";
import { IoMdFootball } from "react-icons/io";
import ActivityCard from "./ActivityCard";

const activities = [
  {
    icon: FaMusic,
    color: 'text-blue-500',
    title: 'Music',
    description: 'Join our music program to explore various genres and participate in performances.',
  },
  {
    icon: IoMdFootball,
    color: 'text-green-500',
    title: 'Sports',
    description: 'Participate in a range of sports activities from football to athletics.',
  },
  {
    icon: FaRobot,
    color: 'text-gray-600',
    title: 'Robotics',
    description: 'Engage in hands-on robotics projects and competitions.',
  },
  {
    icon: FaPaintBrush,
    color: 'text-red-500',
    title: 'Art',
    description: 'Express creativity through drawing, painting, and sculpture.',
  },
  {
    icon: FaTheaterMasks,
    color: 'text-purple-500',
    title: 'Drama',
    description: 'Participate in theater productions and develop your acting skills.',
  },
  {
    icon: FaBook,
    color: 'text-orange-500',
    title: 'Debate Club',
    description: 'Enhance your public speaking and argumentation skills through debates.',
  },
];

const Activities = () => {
  return (
    <section className="py-12 px-4 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold text-center mb-8">Extracurricular Activities</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <ActivityCard
              key={index}
              icon={activity.icon}
              color={activity.color}
              title={activity.title}
              description={activity.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
