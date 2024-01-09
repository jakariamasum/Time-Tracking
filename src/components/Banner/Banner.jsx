import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className='lg:mt-16 flex flex-col items-center justify-center mx-auto text-center pt-10 pb-5 md:pt-24'>
      <div className="max-w-screen-md">
        <h1 className='text-[#3D485] text-3xl md:text-5xl font-bold mb-5'>
          The most popular free <span className='text-[#FF7425]'>time tracker</span> for teams
        </h1>
        <p className='text-sm md:text-base text-[#5A6B7B] mb-5 md:mb-10'>
          Time tracking software used by millions. SynChronize is a time tracker and timesheet app that lets you track work hours across projects. Unlimited users, free forever.
        </p>
        <Link to='/login'>
          <button className="inline-block px-6 md:px-8 w-fit py-3 md:p-4 md:pt-3 mb-5 md:mb-20 rounded-lg bg-[#FF7425] uppercase text-white border-b-4 border-[#FF7425] rounded-md">
            Access Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
