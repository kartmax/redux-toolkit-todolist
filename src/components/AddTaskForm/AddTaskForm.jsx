import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { taskShemas } from "./shemas";


function AddTaskForm({ methodSubmit, idTask = null, offIsEdit = null }) {
    const [isLoading, setIsLoading] = useState(false);

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        mode: "onChange",
        resolver: yupResolver(taskShemas)
    });

    const onSubmit = (data) => {
        setIsLoading(true);
        idTask ? methodSubmit(idTask, data.text_task) : methodSubmit(data.text_task);
        offIsEdit && offIsEdit();
        setIsLoading(false);
        // UserAPI.createNewUser(data)
        // .then(() => {
        //       setIsLoading(false);
        //       props.setIsSuccessTrue();
        //    })
        //    .catch (err => console.log(err));
        reset();
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex justify-center'
        >
            <div className='max-w-md w-full inline-flex items-center justify-center gap-2 relative'>
                <div className="relative w-full">
                    <input
                        {...register('text_task')}
                        type="text"
                        placeholder='Enter task'
                        className='w-full pl-4 pr-12 py-3 bg-white text-gray-800 rounded-md focus:outline-none focus:ring focus:ring-violet-400 transition-all'
                    />
                    {<span className="absolute text-sm left-1 -bottom-6">{errors.text_task?.message}</span>}
                </div>
                <button className='absolute right-2' disabled={isLoading}>
                    <PlusCircleIcon className='h-8 w-8 text-rose-500 hover:scale-105 hover:text-rose-600 transition-all' />
                </button>
            </div>
        </form>
    )
}

export default AddTaskForm;