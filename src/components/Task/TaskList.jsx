import Task from "./Task";
import { useSelector } from "react-redux";

function TaskList() {
    const todos = useSelector(state => state.todos.todos);

    return <ul className="ul-num font-bold flex flex-col gap-3">
        { todos.map(task => <Task key={task.id} task={task} />) }
    </ul>
}

export default TaskList;