import React from 'react';

const Contact = () => {
  return (
    <div className='mb-6 md:mb-0'>
      <h2 className='text-xl font-bold mb-3 text-white text-center md:text-left'>Contact Us</h2>
      <p className='mb-2 text-center md:text-left'>Textile Park, Sircilla</p>
      <p className='mb-2 text-center md:text-left'>Phone: (123) 456-7890</p>
      <p className='text-center md:text-left'>Email: <a href='mailto:info@modelschool.com' className='text-blue-400 hover:underline'>info@modelschool.com</a></p>
    </div>
  );
};

export default Contact;
