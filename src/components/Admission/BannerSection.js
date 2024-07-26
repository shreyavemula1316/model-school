
import React from "react";

const BannerSection = () => {
  return (
    <div
      className="py-24 text-center text-black px-4"
      style={{
        backgroundImage: 'url("/images/admission.png")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">Admission Process</h2>
      <p className="text-xl lg:w-2/3 mx-auto mb-5">
        Knowing about the admission system and registering early helps avoid compromises. Siddhartha Public School offers a simple procedure for registration, admission, and application.
      </p>
    </div>
  );
};

export default BannerSection;
