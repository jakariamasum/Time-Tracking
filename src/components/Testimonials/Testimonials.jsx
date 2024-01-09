import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import TestimonialCard from './TestimonialCard';
import user1 from '../../assets/user1.png'
import user2 from '../../assets/user2.png'
import user3 from '../../assets/user3.png'
import Title from '../Title/Title';
const Testimonials = () => {
    
    return (
        <div className='bg-[#EDF0F3] md:px-32 py-20 mx-2'>
            <div className='mb-10'>
                <Title title={'What Our Client Says'} subtitle={'Testimonials'} />
            </div>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                <SwiperSlide>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        <TestimonialCard img={user1} review={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod corrupti blanditiis sit enim omnis explicabo provident nisi eius facere! Odio molestiae quis ut. Accusamus rem aspernatur tempore architecto ut consequuntur?'} position={'Web Designer'} name={'Mark Champman'} />
                        <TestimonialCard img={user2} review={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod corrupti blanditiis sit enim omnis explicabo provident nisi eius facere! Odio molestiae quis ut. Accusamus rem aspernatur tempore architecto ut consequuntur?'} position={'Software Engineer'} name={'John Walker'} />
                        <TestimonialCard img={user3} review={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod corrupti blanditiis sit enim omnis explicabo provident nisi eius facere! Odio molestiae quis ut. Accusamus rem aspernatur tempore architecto ut consequuntur?'} position={'Web Developer'} name={'Darlene Dobertson'} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        <TestimonialCard img={user2} review={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod corrupti blanditiis sit enim omnis explicabo provident nisi eius facere! Odio molestiae quis ut. Accusamus rem aspernatur tempore architecto ut consequuntur?'} position={'Web Designer'} name={'Mark Champman'} />
                        <TestimonialCard img={user3} review={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod corrupti blanditiis sit enim omnis explicabo provident nisi eius facere! Odio molestiae quis ut. Accusamus rem aspernatur tempore architecto ut consequuntur?'} position={'Software Engineer'} name={'John Walker'} />
                        <TestimonialCard img={user1} review={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod corrupti blanditiis sit enim omnis explicabo provident nisi eius facere! Odio molestiae quis ut. Accusamus rem aspernatur tempore architecto ut consequuntur?'} position={'Web Developer'} name={'Darlene Dobertson'} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        <TestimonialCard img={user3} review={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod corrupti blanditiis sit enim omnis explicabo provident nisi eius facere! Odio molestiae quis ut. Accusamus rem aspernatur tempore architecto ut consequuntur?'} position={'Web Designer'} name={'Mark Champman'} />
                        <TestimonialCard img={user1} review={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod corrupti blanditiis sit enim omnis explicabo provident nisi eius facere! Odio molestiae quis ut. Accusamus rem aspernatur tempore architecto ut consequuntur?'} position={'Software Engineer'} name={'John Walker'} />
                        <TestimonialCard img={user2} review={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod corrupti blanditiis sit enim omnis explicabo provident nisi eius facere! Odio molestiae quis ut. Accusamus rem aspernatur tempore architecto ut consequuntur?'} position={'Web Developer'} name={'Darlene Dobertson'} />
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Testimonials;