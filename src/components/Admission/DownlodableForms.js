import React from "react";

const DownloadableForms = () => {
  return (
    <section>
      <h3 className="text-3xl font-bold text-center mb-8">Downloadable Admission Forms</h3>
      <p className="text-lg text-gray-700 mb-6 text-center">
        Download the admission form from the link below. Complete and submit this form as part of the admission process.
      </p>
      <div className="flex justify-center">
        <a 
          href="/admissionForm.pdf" 
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
          download
        >
          Download Admission Form
        </a>
      </div>
    </section>
  );
};

export default DownloadableForms;
