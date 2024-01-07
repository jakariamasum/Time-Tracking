import { useForm } from "react-hook-form";

const EmailField = () => {
    const { formState: { errors }, register } = useForm();

    return (
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
    );
};

export default EmailField;