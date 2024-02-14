import { useCallback } from "react";
import Task from "./Task";

function TaskList({ todos, setTodos }) {
    const toggleChecked = useCallback((idTask) => {
        const todos_ = [...todos],
            findTask = todos_.find(task => task.id === idTask);
        if (findTask) findTask.completed = !findTask.completed;
        setTodos(todos_);
    }, [todos])

    const removeTask = (idTask) => {
        setTodos(todos.filter(task => task.id !== idTask))
    }

    const changeTextTask = (idTask, textTask) => 
        setTodos(todos.map(task => task.id === idTask ? {...task, text: textTask} : task));

    const todoList = todos.map(
        task => <Task key={task.id}
            task={task}
            toggleChecked={toggleChecked}
            removeTask={removeTask}
            changeTextTask={changeTextTask}
        />)

    if (todos.length > 0) {
        return (
            <ul className="ul-num font-bold flex flex-col gap-3">
                {todoList}
            </ul>
        )
    } else {
        return (
            <p className="font-bold text-center">Add your first task</p>
        )
    }
}

export default TaskList;