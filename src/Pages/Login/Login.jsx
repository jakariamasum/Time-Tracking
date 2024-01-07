import { Link } from 'react-router-dom';
import login from '../../assets/login.jpg';
import { useForm } from 'react-hook-form';
import SocialLinks from '../../components/SocialLinks/SocialLinks';

const Login = () => {
    const { handleSubmit, formState: { errors }, register } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className='py-8 mx-5  flex flex-col-reverse md:flex-row gap-2 lg:mx-28 bg-white items-center'>
            <div className='flex-1'>
                <img src={login} alt="" />
            </div>
            <div className='flex-1 text-center md:text-left'>
                <h1 className='text-3xl font-semibold '>Login</h1>
                <p className='text-[#777] mt-2'>
                    Doesn't have an account yet?{' '}
                    <Link to='/register'>
                        <span className='underline text-[#FF7425]'>Sign Up</span>
                    </Link>
                </p>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='flex flex-col mt-7 gap-2'
                >
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
                            placeholder='Password'
                            className='py-3 md:py-4 px-2 mx-auto md:ml-0 md:w-1/2 rounded-sm border border-black'
                        />
                        <p style={{ color: 'red' }}>{errors.password?.message}</p>
                    </div>
                    <div className='my-4'>
                        <input
                            type='submit'
                            value='Login'
                            className='bg-[#FF7425] px-4 md:px-8 rounded-lg text-white cursor-pointer py-3 md:py-4'
                        />
                    </div>
                    <SocialLinks/>
                </form>
            </div>
        </div>
    );
};

export default Login;
