
import React from "react";

const Map = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-8">Our Location</h3>
        <div className="relative overflow-hidden rounded-lg shadow-lg mx-auto" style={{ maxWidth: '500px', height: '300px' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d121211.75020983811!2d78.6449778!3d18.3076806!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bccfb007f8cd059%3A0xcc3efd0675efe0c7!2sTSMS%20Mandepally%2CSircilla!5e0!3m2!1sen!2sin!4v1721817609514!5m2!1sen!2sin" // Replace with your Google Maps URL
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Google Maps Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Map;
