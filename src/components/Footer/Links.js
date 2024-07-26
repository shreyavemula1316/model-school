import React from 'react';

const Links = () => {
  return (
    <div className='mb-6 md:mb-0'>
      <div className='flex flex-col items-center'>
        <h2 className='text-xl font-bold mb-3 text-white text-center'>Quick Links</h2>
        <div className='max-w-md w-full'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <ul className='space-y-2 text-gray-400 text-center md:text-left'>
              <li><a href='/' className='hover:text-white'>Home</a></li>
              <li><a href='/about' className='hover:text-white'>About Us</a></li>
              <li><a href='/academics' className='hover:text-white'>Academics</a></li>
              <li><a href='/gallery' className='hover:text-white'>Gallery</a></li>
            </ul>
            <ul className='space-y-2 text-gray-400 text-center md:text-left'>
              <li><a href='/contact' className='hover:text-white'>Contact Us</a></li>
              <li><a href='/admissions' className='hover:text-white'>Admissions</a></li>
              <li><a href='/student-activities' className='hover:text-white'>Student Activities</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
