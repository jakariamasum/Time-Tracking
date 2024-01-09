import React from 'react';
import FeatureItem from './FeatureItem';
import img from '../../assets/time.png';
import img2 from '../../assets/report.png';
import img3 from '../../assets/manage.png';

const Features = () => {
  return (
    <div className='text-center mx-auto px-4 md:px-8 lg:px-32'>
      <h1 className="mb-5 font-semibold text-[#3D4853] text-center text-2xl md:text-3xl">Time management features</h1>
      <p className='w-full md:w-[600px] mb-8 mx-auto text-[#5A6B7B] text-[14px] md:text-[18px]'>
        Track productivity, attendance, and billable hours with a simple time tracker and timesheet.
      </p>

      <div className='mx-auto text-center my-16'>
        <h1 className='font-bold uppercase text-xl md:text-2xl text-left md:text-center text-[#FF7425] mb-4'>
          Timekeeping
        </h1>
        <div className='flex flex-col md:flex-row gap-4 items-center'>
          <div className=' text-left mx-auto'>
            <FeatureItem title={'Timer'} subtitle={'Track work hours in real time.'} />
            <FeatureItem title={'Timesheet'} subtitle={'Enter time in a weekly timesheet.'} />
            <FeatureItem title={'Calendar'} subtitle={'Visually block out and manage time.'} />
            <FeatureItem title={'Auto tracker'} subtitle={'Track apps and websites you use.'} />
            <FeatureItem title={'Kiosk'} subtitle={'Clock in from a shared device.'} />
          </div>
          <div className=' mx-auto'>
            <img src={img} alt="image" className='w-full mx-auto' />
          </div>
        </div>

        <h1 className='text-[#FF7425] font-bold uppercase text-xl md:text-2xl text-center mb-4 lg:mt-24'>Reporting</h1>
        <div className='flex flex-col md:flex-row gap-4 items-center'>
          <div className='md:w-1/2 mx-auto'>
            <img src={img2} alt="image" className='w-full mx-auto' />
          </div>
          <div className='text-left mx-auto'>
            <FeatureItem title={'Reporting'} subtitle={'Analyze and export tracked time.'} />
            <FeatureItem title={'Activity'} subtitle={'See who works on what.'} />
            <FeatureItem title={'Rates'} subtitle={'See earnings, cost, and profit.'} />
            <FeatureItem title={'Projects'} subtitle={'Track project estimates and budget.'} />
            <FeatureItem title={'Location'} subtitle={'See visited sites and routes.'} />
          </div>
        </div>

        <h1 className='font-bold uppercase text-xl md:text-2xl text-center text-[#FF7425] mb-4 lg:mt-24'>Management</h1>
        <div className='flex flex-col md:flex-row gap-4 items-center'>
          <div className='text-left mx-auto'>
            <FeatureItem title={'Scheduling'} subtitle={'Schedule work, assignments, and shifts.'} />
            <FeatureItem title={'Time off'} subtitle={'Manage leaves and holidays.'} />
            <FeatureItem title={'Approval'} subtitle={'Submit and approve timesheets.'} />
            <FeatureItem title={'Invoicing'} subtitle={'Create invoices from billable time.'} />
            <FeatureItem title={'Expenses'} subtitle={'Record project expenses and fees.'} />
          </div>
          <div className='md:w-1/2 mx-auto'>
            <img src={img3} alt="image" className='w-full mx-auto' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
