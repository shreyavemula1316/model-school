import React from "react";

const AboutBanner = () => {
  return (
    <div
      className="py-20 text-center text-black px-4" 
      style={{
        backgroundImage: 'url("/images/about.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">About Us</h2>
      <p className="text-xl lg:w-3/5 mx-auto mb-5">
        Explore Model School, where our vision and values foster both academic and personal growth. Discover our vibrant community and rich history that drive our commitment to excellence.
      </p>
    </div>
  );
};

export default AboutBanner;
