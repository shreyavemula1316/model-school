
import React from "react";

const ClubCard = ({ icon: Icon, color, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
      <Icon className={`text-6xl ${color} mb-4`} />
      <div className={`border-b-2 ${color} mb-4 w-16`}></div>
      <h4 className="text-2xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default ClubCard;
