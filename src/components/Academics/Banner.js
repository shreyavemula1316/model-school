import React from "react";

const Banner = () => {
  return (
    <div
      className="py-24 text-center text-white px-4"
      style={{
        backgroundImage: 'url("/images/academics.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}
    >
      <h2 className="text-5xl lg:text-6xl font-bold mb-4">Our Academics</h2>
      <p className="text-lg lg:w-2/4 mx-auto">
        Discover our engaging curriculum designed to promote academic excellence and foster holistic development.
      </p>
    </div>
  );
};

export default Banner;
