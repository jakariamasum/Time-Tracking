import { BiCheckCircle } from 'react-icons/bi'
import Button from '../Button/Button';
const PlanCard = ({ price, type }) => {
    return (
        <div className='px-6 rounded-lg py-10 bg-white shadow-2xl'>
            <div className='flex justify-between  items-center'>
                <div className='flex flex-col gap-1'>
                    <p className='text-[#FF7425] font-bold'>{type}</p>
                    <p className='text-5xl font-bold'>${price}</p>
                </div>
                <p className='rounded-lg bg-[#FF7425] px-3 py-1 text-white'>Monthly</p>
            </div>
            <div className="border-b my-5"></div>
            <div className='flex flex-col gap-3'>
                <div className='flex gap-2'>
                    <BiCheckCircle size={25} />
                    <p className='text-[#959795]'>Aliquam quis justo at lorem</p>
                </div>
                <div className='flex gap-2'>
                    <BiCheckCircle size={25} />
                    <p className='text-[#959795]'>Aliquam quis justo at lorem</p>
                </div>
                <div className='flex gap-2'>
                    <BiCheckCircle size={25} />
                    <p className='text-[#959795]'>Aliquam quis justo at lorem</p>
                </div>
                <div className='flex gap-2'>
                    <BiCheckCircle size={25} />
                    <p className='text-[#959795]'>Aliquam quis justo at lorem</p>
                </div>
                <div className='flex gap-2'>
                    <BiCheckCircle size={25} />
                    <p className='text-[#959795]'>Aliquam quis justo at lorem</p>
                </div>
            </div>
            <Button />
        </div>
    );
};

export default PlanCard;