import React from "react";

const History = () => {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-4xl font-bold text-center mb-12">Our History</h3>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1">
            <p className="text-lg text-gray-700 mb-4">
              Established in 2013, Model School has quickly built a legacy of educational excellence. From our early days, we have evolved into a leading institution, committed to providing exceptional learning experiences and fostering an environment of innovation and success.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Over the years, we have significantly expanded our facilities and diversified our academic programs. Our ongoing dedication to enhancing our educational offerings has allowed us to support and nurture the growth of countless students.
            </p>
          </div>
          <div className="flex-shrink-0 mb-6 lg:mb-0">
            <img
              src="/images/history.png" 
              alt="Historical Overview"
              className="w-full max-w-xs h-48 object-cover rounded shadow-md" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
