
import React from "react";

const BannerSection = () => {
  return (
    <div
      className="py-24 text-center text-black px-4"
      style={{
        backgroundImage: 'url("/images/activities.png")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h2 className="text-4xl lg:text-6xl font-bold mb-4">Student Life</h2>
      <p className="text-lg lg:w-2/3 mx-auto">
        Discover the engaging student life at Springdale, with a blend of academic and extracurricular activities.
      </p>
    </div>
  );
};

export default BannerSection;
