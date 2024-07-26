
import React from "react";

const ContactInfo = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
          <h4 className="text-2xl font-semibold mb-4">Address</h4>
          <p className="text-lg text-gray-700">
            Model School,<br />
            Textile Park,<br />
            Sircilla,505301
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
          <h4 className="text-2xl font-semibold mb-4">Phone</h4>
          <p className="text-lg text-gray-700">
            +1 (123) 456-7890
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
          <h4 className="text-2xl font-semibold mb-4">Email</h4>
          <p className="text-lg text-gray-700">
            <a href="mailto:info@springdale.edu" className="text-blue-500 hover:underline">
            info@modelschool.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
