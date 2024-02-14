import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import AddTaskForm from "../AddTaskForm/AddTaskForm";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, removeTask, changeTextTask } from "../../store/todoSlice";

function Task({ task }) {
    const [isEdit, setIsEdit] = useState(false);
    const dispatch = useDispatch();

    const changeIsEdit = (valEdit) => setIsEdit(valEdit);

    const toggleChecked = (idTask) => dispatch(toggleComplete({idTask}));
    const deleteTask = (idTask) => dispatch(removeTask({idTask}));
    const changeText = (idTask, textTask) => dispatch(changeTextTask({idTask, textTask}));

    const handlerEditBtn = async (e) => {
        await changeIsEdit(true);
        const input = e.target.closest('li').querySelector('form input[type=text]');
        if(input) {
            input.value = task.text
            input.focus()
        }
    }

    return (
        <li className="flex gap-3 justify-between bg-gray-700 px-5 py-3 rounded-lg hover:bg-gray-600 transition-all">
            {
                isEdit 
                ? <AddTaskForm 
                    methodSubmit={changeText} 
                    idTask={task.id}
                    textCurrent={task.text}
                    offIsEdit={() => changeIsEdit(false)}
                    placeholder={"Edit task"}
                  />
                : <span className="li-num">{task.text}</span>
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
                <button onClick={() => deleteTask(task.id)}>
                    <TrashIcon className="h-7 w-7 text-rose-500 hover:scale-110 transition-all" />
                </button>
            </div>
        </li>
    )
}

export default Task;