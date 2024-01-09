import { useContext, useState } from 'react';
import { FaHome, FaList, FaSignInAlt, FaUserPlus, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from "../../Provider/Authprovider";
import Swal from 'sweetalert2';

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };
    const handleLogOut = () => {
        logOut()
            .then((res) => {
                Swal.fire({
                    position: "center",
                    icon: "warning",
                    title: "See you later!!",
                    showConfirmButton: false,
                    timer: 1500,
                });
            })
            .catch((error) => console.log(error.message));
    };

    return (
        <nav className="lg:fixed top-0 left-0 right-0 z-10  text-black p-4">
            <div className="mx-28 flex justify-between text-2xl font-semibold items-center relative">
                <div className="flex items-center">
                    <span className="text-[#FF7425] text-lg font-bold mr-5">ScynChronize</span>
                </div>

                <div className="hidden md:flex items-center space-x-4">
                    <Link to="/" className="hover:text-[#FF7425]">
                        <span className="ml-1">Home</span>
                    </Link>

                    <Link to="/features" className="hover:text-[#FF7425]">
                        <span className="ml-1">Features</span>
                    </Link>
                    <Link to="/contact" className="hover:text-[#FF7425]">
                        <span className="ml-1">Contact</span>
                    </Link>

                    {
                        user ? <>
                            <Link to="/dashboard" className="hover:text-[#FF7425] ">
                                <span className="ml-1">Dashboard</span>
                            </Link>

                            <Link to="/" onClick={handleLogOut} className="hover:text-[#FF7425] h">
                                <span className="ml-1">Logout</span>
                            </Link>

                        </> : <>

                            <Link to="/login" className="hover:text-[#FF7425] ">
                                <span className="ml-1">Login</span>
                            </Link>

                            <Link to="/register" className="text-[#FF7425] hover:text-gray-300">
                                <span className="ml-1">Signup</span>
                            </Link>
                        </>
                    }
                </div>

                <div className="md:hidden flex items-center">
                    {isMenuOpen ? (
                        <FaTimes className="text-[#FF7425] cursor-pointer" onClick={toggleMenu} />
                    ) : (
                        <FaBars className="text-[#FF7425] cursor-pointer" onClick={toggleMenu} />
                    )}
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-gray-700 p-4">
                    <Link to="/" className="block text-white py-2" onClick={closeMenu}>
                        Home
                    </Link>
                    <Link to="/features" className="block text-white py-2" onClick={closeMenu}>
                        Features
                    </Link>
                    {
                        user ? <>
                            <Link to="/dashboard" className="block text-white py-2" onClick={closeMenu}>
                                Dashboard
                            </Link>
                            <Link to="/" onClick={handleLogOut} className="block text-white py-2">
                                Logout
                            </Link>
                        </> :
                            <>
                                <Link to="/login" className="block text-white py-2" onClick={closeMenu}>
                                    Login
                                </Link>
                                <Link to="/register" className="block text-white py-2" onClick={closeMenu}>
                                    Signup
                                </Link>
                            </>
                    }
                </div>
            )}
        </nav>
    );
};

export default Navbar;
