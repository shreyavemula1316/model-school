import React from 'react';
import Info from '../components/Footer/Info';
import Links from '../components/Footer/Links';
import Contact from '../components/Footer/Contact';
import Social from '../components/Footer/Social';
import Bottom from '../components/Footer/Bottom';

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-gray-300'>
      <div className='px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
        <Info />
        <div className='flex flex-col md:flex-row justify-between'>
          <Links />
          <Contact />
          <Social />
        </div>
        <Bottom />
      </div>
    </footer>
  );
};

export default Footer;
