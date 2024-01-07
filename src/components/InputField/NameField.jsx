import { useForm } from "react-hook-form";

const NameField = () => {
    const { formState: { errors }, register } = useForm();

    return (
        <div className='flex flex-col gap-1'>
            <label className='text-xl text-[#232323] font-semibold'>
                Full Name
            </label>
            <input
                type='text'
                {...register("text", {
                    required: 'This field is required',

                })}
                placeholder='John Doe'
                className='py-3 md:py-4 px-2 mx-auto md:ml-0 md:w-1/2 rounded-sm border border-black'
            />
            <p style={{ color: 'red' }}>{errors.email?.message}</p>
        </div>
    );
};

export default NameField;