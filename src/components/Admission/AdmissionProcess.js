import React from "react";

const processSteps = [
  {
    step: '1',
    title: 'Inquiry',
    description: 'Submit an enquiry form at school. Our team will help with your questions and provide information about our academic offerings.',
    color: 'bg-blue-100',
  },
  {
    step: '2',
    title: 'Registration',
    description: 'Get the school prospectus and provide a passport-sized photo of the child and parents, along with a self-attested birth certificate.',
    color: 'bg-blue-100',
  },
  {
    step: '3',
    title: 'Principal Meeting & School Tour',
    description: 'Meet with Principal Dr. Vinayashree.C to discuss admission details and visit the campus to see the classroom environment.',
    color: 'bg-blue-100',
  },
  {
    step: '4',
    title: 'Submit Admission Form',
    description: 'Complete the admission form with all required documents. Inform us if your child needs special attention.',
    color: 'bg-blue-100',
  },
  {
    step: '5',
    title: 'Fee Payment',
    description: 'Pay the fees after receiving the admission offer, based on your child’s grade.',
    color: 'bg-blue-100',
  },
  {
    step: '6',
    title: 'Orientation',
    description: 'Attend the orientation program before the academic year starts to learn about our programs and activities.',
    color: 'bg-blue-100',
  },
];

const AdmissionProcess = () => {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold text-center mb-12">Simplified Admission Process</h3>
        <div className="space-y-8">
          {processSteps.map((item) => (
            <div key={item.step} className={`p-6 rounded-lg shadow-md flex items-start space-x-6 ${item.color}`}>
              <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold">
                {item.step}
              </div>
              <div>
                <h4 className="text-2xl font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdmissionProcess;
