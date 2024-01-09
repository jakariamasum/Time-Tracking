import { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Provider/Authprovider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const SocialLinks = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const { googleLogin } = useContext(AuthContext)
    const handleGoogleSignIn = (event) => {
        event.preventDefault();
        googleLogin()
            .then(res => {
                console.log(res.user);
                Swal.fire({
                    position: 'text-center',
                    icon: 'success',
                    title: 'Login Successful',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/dashboard/time-tracking');
            })
            .catch(error => {
                console.log(error.message)
                setError("Invalid password or email")
            })

    }
    return (
        <div>
            <div className='flex gap-2 items-center'>
                <div className='bg-gray-500 text-gray-500 w-1/3 h-[2px]'></div>
                <p className='text-[#777] '>or login with</p>
                <div className='bg-gray-500 text-gray-500 w-1/3 h-[2px]'></div>
            </div>
            <div className='flex flex-col md:flex-row gap-2 ml-20 mt-5'>
                <div onClick={handleGoogleSignIn} className='flex gap-2 items-center border border-red-500 rounded-lg w-fit py-3 px-6 cursor-pointer text-red-500 hover:bg-[#FF7425] hover:text-white hover:border-none'>
                    <FaGoogle /> <span>Google</span>
                </div>

            </div>
        </div>
    );
};

export default SocialLinks;