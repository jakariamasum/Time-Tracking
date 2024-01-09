import { FaArrowRight } from 'react-icons/fa'
const Button = () => {
    return (
        <div className="w-[150px] rounded-lg cursor-pointer bg-[#FF7425] text-white flex gap-3 items-center py-3 px-4 font-bold mt-4">
            <p>Get Started</p>
            <FaArrowRight />
        </div>
    );
};

export default Button;