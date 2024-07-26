import React from "react";

const PrincipalMessage = () => {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-4xl font-bold text-center mb-12">Message from the Principal</h3>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-shrink-0 mb-6 lg:mb-0">
            <img
              src="images/principal.png" 
              alt="Principal"
              className="w-48 h-48 rounded-full mx-auto shadow-md"
            />
          </div>
          <div className="flex-1">
            <p className="text-lg text-gray-700 mb-4">
              "It is my pleasure to welcome you to Model School, where we pride ourselves on providing a nurturing and challenging environment for our students. Our dedicated team strives to offer the highest quality education and support to foster both academic and personal growth. We are committed to nurturing curiosity, creativity, and a love for learning in every student."
            </p>
            <p className="text-lg text-gray-700">
              - Principal [Principal's Name]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;
