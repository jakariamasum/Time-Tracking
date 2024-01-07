import { useState } from 'react';
import { FaHome, FaList, FaSignInAlt, FaUserPlus, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <FaHome className="text-white mr-2" />
                    <span className="text-white text-lg font-bold">ScynChronize</span>
                </div>

                <div className="hidden md:flex items-center space-x-4">
                    <Link to="#" className="text-white hover:text-gray-300">
                        <FaList />
                        <span className="ml-1">Features</span>
                    </Link>

                    <Link to="#" className="text-white hover:text-gray-300">
                        <FaSignInAlt />
                        <span className="ml-1">Login</span>
                    </Link>

                    <Link to="#" className="text-white hover:text-gray-300">
                        <FaUserPlus />
                        <span className="ml-1">Signup</span>
                    </Link>
                </div>

                <div className="md:hidden flex items-center">
                    {isMenuOpen ? (
                        <FaTimes className="text-white cursor-pointer" onClick={toggleMenu} />
                    ) : (
                        <FaBars className="text-white cursor-pointer" onClick={toggleMenu} />
                    )}
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-gray-700 p-4">
                    <Link to="#" className="block text-white py-2" onClick={closeMenu}>
                        Features
                    </Link>
                    <Link to="#" className="block text-white py-2" onClick={closeMenu}>
                        Login
                    </Link>
                    <Link to="#" className="block text-white py-2" onClick={closeMenu}>
                        Signup
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
