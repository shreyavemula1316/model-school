import React from "react";

const Vision = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-4xl font-bold text-center mb-12">Our Vision, Mission, and Values</h3>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h4 className="text-2xl font-semibold mb-4">Our Vision</h4>
            <p className="text-lg text-gray-700">
              To be a trailblazer in education, nurturing young minds to become innovative thinkers and leaders. We aspire to create a future where every student is prepared to tackle global challenges with confidence and competence.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h4 className="text-2xl font-semibold mb-4">Our Mission</h4>
            <p className="text-lg text-gray-700">
              To deliver a comprehensive and engaging education that balances academic rigor with personal development. We aim to equip students with the skills and knowledge needed to excel in a rapidly changing world.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h4 className="text-2xl font-semibold mb-4">Our Values</h4>
            <p className="text-lg text-gray-700">
              We are guided by core values of Integrity, Excellence, Innovation, Respect, and Collaboration. These principles shape our educational practices and foster a positive and inclusive community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
