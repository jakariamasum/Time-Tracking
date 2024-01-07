import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLinks = () => {
    return (
        <div>
            <div className='flex gap-2 items-center'>
                <div className='bg-gray-500 text-gray-500 w-1/3 h-[2px]'></div>
                <p className='text-[#777] '>or login with</p>
                <div className='bg-gray-500 text-gray-500 w-1/3 h-[2px]'></div>
            </div>
            <div className='flex flex-col md:flex-row gap-2 ml-20 mt-5'>
                <div className='flex gap-2 items-center border border-red-500 rounded-lg w-fit py-3 px-6 cursor-pointer text-red-500 hover:bg-[#FF7425] hover:text-white hover:border-none'>
                    <FaGoogle /> <span>Google</span>
                </div>
                <div className='flex gap-2 items-center border border-[black] rounded-lg w-fit py-3 px-6 cursor-pointer hover:bg-[#FF7425] hover:text-white text-[black] hover:border-none'>
                    <FaGithub /> <span>Github</span>
                </div>
            </div>
        </div>
    );
};

export default SocialLinks;