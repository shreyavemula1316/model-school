import React from "react";

const Conduct = () => {
  return (
    <section className="py-16 px-4 bg-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
        {/* Text Content */}
        <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-8">
          <h3 className="text-4xl font-semibold text-center lg:text-left mb-12">Code of Conduct</h3>
          <div className="text-lg text-gray-800">
            <p className="mb-4">
              Our Code of Conduct outlines the expectations for student behavior and academic integrity, ensuring a respectful and inclusive environment.
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Respect for others and their property.</li>
              <li>Adherence to academic integrity and honesty.</li>
              <li>Compliance with school rules and regulations.</li>
              <li>Responsibility for one's own learning and behavior.</li>
            </ul>
            <p>
              We strive to create a positive learning environment where students are expected to uphold these standards and contribute to a supportive community.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="lg:w-1/2">
          <img
            src="https://t3.ftcdn.net/jpg/05/12/77/30/360_F_512773061_DTndOGWrBuFPjJ3e7dzqYFyCKTA3AEqv.jpg"
            alt="Code of Conduct"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Conduct;
