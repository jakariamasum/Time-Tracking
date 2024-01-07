import { useForm } from "react-hook-form";

const PasswordField = () => {
    const { formState: { errors }, register } = useForm();
    return (
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
    );
};

export default PasswordField;