import React from 'react';
import FeatureItem from './FeatureItem';
import img from '../../assets/time.png';
import img2 from '../../assets/report.png';
import img3 from '../../assets/manage.png';

const Features = () => {
    return (
        <div className='text-center mx-32'>
            <h1 className="mb-5 font-semibold text-[#3D4853] text-center text-3xl">Time management features</h1>
            <p className='w-[600px] mb-14 mx-auto text-[#5A6B7B] text-[18px]'>Track productivity, attendance, and billable hours with a simple time tracker and timesheet.</p>
            <div className='mx-auto  text-center my-10'>
                <h1 className='font-bold uppercase text-2xl text-left ml-24 text-[#FF7425]'>timekeeping</h1>
                <div className='flex gap-8 items-center'>
                    <div className='text-left mx-auto'>
                        <FeatureItem title={'Timer'} subtitle={'Track work hours in real time.'} />
                        <FeatureItem title={'Timesheet'} subtitle={'Enter time in a weekly timesheet.'} />
                        <FeatureItem title={'Calendar'} subtitle={'Visually block out and manage time.'} />
                        <FeatureItem title={'Auto tracker'} subtitle={'Track apps and websites you use.'} />
                        <FeatureItem title={'Kiosk'} subtitle={'Clock in from a shared device.'} />
                    </div>
                    <div className='mx-auto'> 
                        <img src={img} alt="image" />
                    </div>
                </div>
                <h1 className='text-right mr-52 mb-0 font-bold uppercase text-2xl ml-24 text-[#FF7425]'>reporting</h1>
                <div className='flex gap-8 items-center'>
                    <div className='mx-auto'> 
                        <img src={img2} alt="image"/>
                    </div>
                    <div className='text-left mx-auto'>
                        <FeatureItem title={'Reporting'} subtitle={'Analyze and export tracked time.'} />
                        <FeatureItem title={'Activity'} subtitle={'See who works on what.'} />
                        <FeatureItem title={'Rates'} subtitle={'See earnings, cost, and profit.'} />
                        <FeatureItem title={'Projects'} subtitle={'Track project estimates and budget.'} />
                        <FeatureItem title={'Location'} subtitle={'See visited sites and routes.'} />
                    </div>
                </div>
                <h1 className='font-bold uppercase text-2xl text-left ml-24 text-[#FF7425]'>management</h1>
                <div className='flex gap-8 items-center'>
                    <div className='text-left mx-auto'>
                        <FeatureItem title={'Scheduling'} subtitle={'Schedule work, assignments, and shifts.'} />
                        <FeatureItem title={'Time off'} subtitle={'Manage leaves and holidays.'} />
                        <FeatureItem title={'Approval'} subtitle={'Submit and approve timesheets.'} />
                        <FeatureItem title={'Invoicing'} subtitle={'Create invoices from billable time.'} />
                        <FeatureItem title={'Expenses'} subtitle={'Record project expenses and fees.'} />
                    </div>
                    <div className='mx-auto'> 
                        <img src={img3} alt="image"/>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Features;
