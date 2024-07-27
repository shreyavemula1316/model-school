import React from 'react';
import Sidebar from './Sidebar';

const AboutTGMS = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <Sidebar />
      <div className="p-6 flex-1 text-black">
        <section className="bg-white shadow rounded p-5 mb-10">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2 bg-custom-red p-2 rounded">
              About TGMS
            </h1>
            <p className="text-lg text-gray-700">Telangana Model School - Shaping the Future</p>
          </header>

          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <p className="text-base leading-7 mb-3">
                Telangana Model Schools (TGMS) were established to provide quality education to students in rural areas of the state. Since its inception in 2013, TGMS has offered a balanced curriculum that includes both academics and extracurricular activities.
              </p>
              <p className="text-base leading-7 mb-3">
                Our mission is to nurture students into well-rounded individuals equipped with the skills and knowledge needed to excel in various fields. We emphasize holistic development, encouraging participation in sports, arts, and cultural activities alongside academic excellence.
              </p>
              <p className="text-base leading-7">
                At TGMS, we believe in creating an inclusive and supportive learning environment. Our dedicated faculty members inspire and motivate students to reach their full potential.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="https://via.placeholder.com/800x400" 
                alt="About TGMS" 
                className="w-full h-80 object-cover rounded shadow" // Increased height
              />
            </div>
          </div>
        </section>

        <section className="mb-10">
          <div className="bg-custom-red h-20 text-white p-5 rounded-t-lg">
            <h2 className="text-2xl font-semibold p-2 rounded">
              Objectives
            </h2>
          </div>
          <div className="bg-white shadow rounded-b-lg p-5">
            <ul className="list-disc list-inside text-base leading-7 space-y-2">
              <li>Establish at least one high-quality secondary school in every Educationally Backward Block (EBB).</li>
              <li>Serve as a model institution setting high standards in education.</li>
              <li>Implement innovative curriculum and teaching methodologies.</li>
              <li>Explore new approaches to evaluation and school governance.</li>
              <li>Provide quality secondary education to talented students in rural areas.</li>
            </ul>
          </div>
        </section>

        <section>
          <div className="bg-custom-red h-20 text-white p-5 rounded-t-lg">
            <h2 className="text-2xl font-semibold p-2 rounded">
              Implementation
            </h2>
          </div>
          <div className="bg-white shadow rounded-b-lg p-5">
            <ul className="list-disc list-inside text-base leading-7 space-y-2">
              <li><strong>Class Structure:</strong> Model Schools cater to students from grades VI to XII, with each grade having two sections following the state syllabus.</li>
              <li><strong>Medium of Instruction and Curriculum:</strong> The medium of instruction is English, following the Three Language Formula practiced in the State. Special emphasis is placed on Science and Mathematics, with teaching methodologies designed to enhance analytical and critical thinking skills.</li>
              <li><strong>Holistic Education:</strong> In addition to academic subjects, the curriculum includes non-scholastic areas such as Physical Education, Yoga, Moral Education, Work Experience, and Projects to provide a well-rounded education.</li>
              <li><strong>Financial Requirements:</strong> The estimated non-recurring cost for establishing a school based on the Kendriya Vidyalaya (KV) template is approximately Rs. 3.02 crore. The recurring annual cost for each school is around Rs. 0.75 crore.</li>
              <li><strong>Expansion:</strong> Out of 396 EBB Mandals, the Government of India sanctioned 192 Model Schools in the first phase during the 2010-11 academic year.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutTGMS;
