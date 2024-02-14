import './App.css'
import AddTaskForm from '../AddTaskForm/AddTaskForm';
import Delimiter from '../Delimiter/Delimiter';
import TaskList from '../Task/TaskList';
import TextInfo from '../TextInfo/TextInfo';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../../store/todoSlice';

function App() {
    const todos = useSelector(state => state.todos.todos);
    const dispatch = useDispatch();

    const addNewTask = (text) => dispatch(addTask({text}));

    return (
        <div className='max-w-screen-lg mx-auto px-4'>
            <AddTaskForm methodSubmit={addNewTask} placeholder={"Enter task"} />
            <Delimiter />
            {todos.length > 0
                ? <TaskList />
                : <TextInfo text={"Add your first task"} />
            }
        </div>
    )
}

export default App
