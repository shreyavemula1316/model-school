
import React from "react";

const Banner = () => {
  return (
    <div
      className="py-24 text-center text-black px-4"
      style={{
        backgroundImage: 'url("/images/contact.png")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h2 className="text-4xl lg:text-6xl leading-snug font-bold mb-4">Contact Us</h2>
      <p className="text-lg lg:w-2/3 mx-auto mb-4">
        Reach out to us for any inquiries or assistance. We're here to help!
      </p>
    </div>
  );
};

export default Banner;
