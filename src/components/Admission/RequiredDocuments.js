import React from "react";

const RequiredDocuments = () => {
  return (
    <section>
      <h3 className="text-2xl font-bold text-center mb-8">Required Documents</h3>
      <ul className="list-disc list-inside text-lg text-gray-700">
        <li className="mb-3">Birth Certificate (for age verification)</li>
        <li className="mb-3">Proof of Residence (e.g., utility bill or lease agreement)</li>
        <li className="mb-3">Previous School Records (report cards and certificates)</li>
        <li className="mb-3">Parent/Guardian ID Proof</li>
        <li className="mb-3">Passport-sized Photographs (4-6 copies)</li>
        <li className="mb-3">Medical Certificate (if applicable)</li>
        <li className="mb-3">Admission Form (completed and signed)</li>
      </ul>
    </section>
  );
};

export default RequiredDocuments;
