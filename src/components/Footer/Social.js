import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Social = () => {
  return (
    <div className='mb-6 md:mb-0'>
      <h2 className='text-xl font-bold mb-3 text-center text-white'>Follow Us</h2>
      <div className='flex justify-center md:justify-start space-x-4'>
        <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-white transition-colors duration-300'>
          <FaFacebookF size={24} />
        </a>
        <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-white transition-colors duration-300'>
          <FaTwitter size={24} />
        </a>
        <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-white transition-colors duration-300'>
          <FaInstagram size={24} />
        </a>
        <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-white transition-colors duration-300'>
          <FaLinkedinIn size={24} />
        </a>
      </div>
    </div>
  );
};

export default Social;
