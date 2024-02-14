import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import AddTaskForm from "../AddTaskForm/AddTaskForm";
import { useState } from "react";

function Task({ task, toggleChecked, removeTask, changeTextTask }) {
    const [isEdit, setIsEdit] = useState(false);

    const changeIsEdit = (valEdit) => setIsEdit(valEdit);

    const handlerEditBtn = async (e) => {
        await changeIsEdit(true);
        e.target.closest('li').querySelector('form input[type=text]').focus();
    }

    return (
        <li className="flex gap-3 justify-between bg-gray-700 px-5 py-3 rounded-lg hover:bg-gray-600 transition-all">
            {
                isEdit 
                ? <AddTaskForm 
                    methodSubmit={changeTextTask} 
                    idTask={task.id}
                    offIsEdit={() => changeIsEdit(false)}
                  />
                : <span className="li-num capitalize">{task.text}</span>
            }
            <div className="inline-flex items-center gap-5">
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleChecked(task.id)}
                    className="checkbox checkbox-md checkbox-warning hover:scale-110 border-2 transition-all"
                />
                <button onClick={(e) => handlerEditBtn(e)}>
                    <PencilSquareIcon className="h-7 w-7 text-green-500 hover:scale-110 transition-all" />
                </button>
                <button onClick={() => removeTask(task.id)}>
                    <TrashIcon className="h-7 w-7 text-rose-500 hover:scale-110 transition-all" />
                </button>
            </div>
        </li>
    )
}

export default Task;