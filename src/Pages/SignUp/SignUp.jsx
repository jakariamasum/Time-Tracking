import img1 from '../../assets/register.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import SocialLinks from '../../components/SocialLinks/SocialLinks';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/Authprovider';
import Swal from 'sweetalert2';

const Register = () => {
    const {
        register,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // const [err, setErr] = useState('');
    const navigate = useNavigate();
    const { createUser, logOut } = useContext(AuthContext);
    // const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (data) => {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        createUser(email, password)
            .then(res => {
                Swal.fire({
                    position: 'text-center',
                    icon: 'success',
                    title: 'Registration Successful! Please login',
                    showConfirmButton: false,
                    timer: 1500
                })
                .then(() => {
                    logOut()
                    navigate('/login')
                }).catch((error) => {
                    console.log(error.message)
                });

            })
            .catch(error => console.log(error.message))
    }

    // const onSubmit = (data) => {
    //     console.log(data);
    // };
    const password = watch('password');

    return (
        <div className='mx-3 pt-8 pb-12 flex flex-col-reverse md:flex-row gap-2 lg:mx-28 bg-white items-center'>
            <div className='flex-1'>
                <img src={img1} alt='' />
            </div>
            <div className='flex-1 text-center md:text-left'>
                <h1 className='text-3xl font-semibold'>Sign Up</h1>
                <p className='text-[#777] mt-2'>
                    Already have an account?{' '}
                    <Link to='/login'>
                        <span className='underline text-[#FF7425]'>Sign In</span>
                    </Link>
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col mt-7 gap-2'>
                    <div className='flex flex-col gap-1'>
                        <label className='text-xl text-[#232323] font-semibold'>
                            Full Name
                        </label>
                        <input
                            type='text'
                            {...register("name", {
                                required: 'This field is required',

                            })}
                            placeholder='John Doe'
                            className='py-3 md:py-4 px-2 mx-auto md:ml-0 md:w-1/2 rounded-sm border border-black'
                        />
                        <p style={{ color: 'red' }}>{errors.email?.message}</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='text-xl text-[#232323] font-semibold'>
                            Email
                        </label>
                        <input
                            type='email'
                            {...register("email", {
                                required: 'This field is required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Invalid email address',
                                },

                            })}
                            placeholder='you@example.com'
                            className='py-3 md:py-4 px-2 mx-auto md:ml-0 md:w-1/2 rounded-sm border border-black'
                        />
                        <p style={{ color: 'red' }}>{errors.email?.message}</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='text-xl text-[#232323] font-semibold'>
                            Password
                        </label>
                        <input
                            type='password'
                            {...register("password", {
                                required: 'This field is required',
                                minLength: {
                                    value: 7,
                                    message: 'Password must be at least 7 characters',
                                },
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]*$/,
                                    message: 'Must include at least one uppercase letter, one lowercase letter, one digit, and one special symbol',
                                },
                            })}
                            placeholder='*******'
                            className='py-3 md:py-4 px-2 mx-auto md:ml-0 md:w-1/2 rounded-sm border border-black'
                        />
                        <p style={{ color: 'red' }}>{errors.password?.message}</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='text-xl text-[#232323] font-semibold'>
                            Confirm Password
                        </label>
                        <input
                            type='password'
                            {...register("confirmPassword", {
                                required: 'This field is required',
                                minLength: {
                                    value: 7,
                                    message: 'Password must be at least 7 characters',
                                },
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]*$/,
                                    message: 'Must include at least one uppercase letter, one lowercase letter, one digit, and one special symbol',
                                },
                            })}
                            placeholder='*******'
                            className='py-3 md:py-4 px-2 mx-auto md:ml-0 md:w-1/2 rounded-sm border border-black'
                        />
                        <p style={{ color: 'red' }}>{errors.confirmPassword?.message}</p>
                        {!errors.confirmPassword && password && password !== watch('confirmPassword') && (
                            <p style={{ color: 'red' }}>Passwords do not match</p>
                        )}
                    </div>

                    <div className='my-4'>
                        <input
                            type='submit'
                            value='Sign Up'
                            className='bg-[#FF7425] px-4 md:px-8 rounded-lg text-white cursor-pointer py-3 md:py-4'
                        />
                    </div>
                    <SocialLinks />
                </form>
            </div>
        </div>
    );
};

export default Register;
