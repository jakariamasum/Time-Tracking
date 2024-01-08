import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='flex justify-center mx-auto text-center pt-24 pb-5'>
            <div>
                <h1 className='text-[#3D485] text-4xl'>The most popular free <span className='text-[#FF7425]'>time tracker</span> for teams</h1>
                <p className='text-[20px] text-[#5A6B7B] w-[650px]'>Time tracking software used by millions. Clockify is a time tracker and timesheet app that lets you track work hours across projects. Unlimited users, free forever.</p>
                <Link to='/login'><button className="inline-block px-8 w-fit py-3 md:p-30 md:pt-15 mt-25 mb-20 rounded-5  bg-[#FF7425] uppercase text-white border-b-4 border-[#FF7425] mt-4 rounded-xl">Access Now</button></Link>
            </div>
        </div>
    );
};

export default Banner;