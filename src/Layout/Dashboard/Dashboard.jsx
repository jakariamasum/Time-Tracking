import { Link, Outlet } from 'react-router-dom';
import { FaClock, FaCalendar, FaChartBar, FaComments } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar */}
      <nav className="w-64 bg-gray-800 text-white p-4">
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
        </ul>
      </nav>

      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Dashboard!</h1>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
