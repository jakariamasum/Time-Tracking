import { Link } from 'react-router-dom';

import { FiFacebook, FiInstagram, FiSend, FiTwitter } from 'react-icons/fi';

const Footer = () => {
    return (
        <div className="bg-[#1D2022] p-4 md:p-8 lg:p-16 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col gap-4">
                    <h1 className="text-[#FF7425] font-bold text-2xl md:text-4xl lg:text-4xl">SynChronize</h1>
                    <p className="text-sm md:text-base lg:text-base w-full">
                        Suspendisse non sem ante. Cras pretium gravida leo a convallis.
                        Nam malesuada interdum metus, sit amet dictum ante congue eu.
                        Maecenas ut maximus enim.
                    </p>
                </div>
                <div className="flex flex-col gap-4 ">
                    <h1 className="text-xl md:text-2xl lg:text-2xl">Our Links</h1>
                    <ul className="flex w-fit flex-col gap-2 md:text-base lg:text-base cursor-pointer">
                        <Link to='/'><li className="hover:text-[#FF7425]">Home</li></Link>
                        <Link to='/about'><li className="hover:text-[#FF7425]">About Us</li></Link>
                        <Link to='/features'><li className="hover:text-[#FF7425]">Features</li></Link>
                        <Link to='/contact'><li className="hover:text-[#FF7425]">Contact Us</li></Link>
                    </ul>
                </div>
                
                <div className="flex flex-col gap-4 ">
                    <h1 className="text-xl md:text-2xl lg:text-2xl">Subscribe Now</h1>
                    <div className="flex items-center gap-2">
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email..."
                            className="text-black h-[50px] md:w-72 lg:w-96 placeholder:pl-3 rounded-lg"
                        />
                        <FiSend size={35} fill="white" className="cursor-pointer hover:text-[#FF7425]" />
                    </div>
                    <div className="flex gap-2 cursor-pointer">
                        <FiFacebook size={22} className="hover:text-[#FF7425]" />
                        <FiTwitter size={22} className="hover:text-[#FF7425]" />
                        <FiInstagram size={22} className="hover:text-[#FF7425]" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;