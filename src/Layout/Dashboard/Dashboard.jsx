import { Link, Outlet } from 'react-router-dom';
import { FaClock, FaCalendar, FaChartBar, FaComments, FaBars, FaHome, FaUserMinus, FaMinus } from 'react-icons/fa';
import { useState } from 'react';

const Dashboard = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 left-0 right-0 bottom-0 bg-gray-800 text-white p-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <ul>
          <li className="mb-2">
            <Link to="/dashboard/time-tracking" className="flex items-center" onClick={closeMobileMenu}>
              <FaClock className="mr-2" />
              Time Tracking
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/dashboard/calendar" className="flex items-center" onClick={closeMobileMenu}>
              <FaCalendar className="mr-2" />
              Calendar
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/dashboard/dashboard" className="flex items-center" onClick={closeMobileMenu}>
              <FaChartBar className="mr-2" />
              Dashboard
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/dashboard/project" className="flex items-center" onClick={closeMobileMenu}>
              <FaComments className="mr-2" />
              Project Management
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
              <FaHome className="mr-2" />
              Back to Home
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
              <FaUserMinus className="mr-2" />
              Logout
            </Link>
          </li>
        </ul>
      </div>

      {/* Left Sidebar (desktop) */}
      <nav className="w-64 bg-gray-800 text-white p-4 hidden md:block">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <ul>
          <li className="mb-2">
            <Link to="/dashboard/time-tracking" className="flex items-center">
              <FaClock className="mr-2" />
              Time Tracking
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/dashboard/calendar" className="flex items-center">
              <FaCalendar className="mr-2" />
              Calendar
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/dashboard/dashboard" className="flex items-center">
              <FaChartBar className="mr-2" />
              Dashboard
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/dashboard/project" className="flex items-center">
              <FaComments className="mr-2" />
              Project Management
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/" className="flex items-center">
              <FaHome className="mr-2" />
              Back to Home
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/" className="flex items-center">
              <FaMinus className="mr-2" />
              Logout
            </Link>
          </li>
        </ul>
      </nav>

      {/* Content */}
      <div className="flex-1 p-8">
        {/* Hamburger Menu Icon (mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white">
            <FaBars color='black'/>
          </button>
        </div>

        <h1 className="text-3xl font-bold mb-4">Welcome to the Dashboard!</h1>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
