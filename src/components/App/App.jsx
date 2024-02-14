import './App.css'
import AddTaskForm from '../AddTaskForm/AddTaskForm';
import Delimiter from '../Delimiter/Delimiter';
import TaskList from '../Task/TaskList';
import { v1 } from 'uuid';
import { useState } from 'react';

const initialTodos = [
    {
        id: v1(),
        text: 'Buy milk',
        completed: false
    },
    {
        id: v1(),
        text: 'Buy meat',
        completed: false
    },
    {
        id: v1(),
        text: 'Buy bread',
        completed: false
    },
    {
        id: v1(),
        text: 'Buy sugar',
        completed: false
    }
]

function App() {
    const [todos, setTodos] = useState(initialTodos);

    const addTask = (text) => {
        setTodos([{
            id: v1(),
            text: text,
            completed: false
        }, ...todos])
    }

    return (
        <div className='max-w-screen-lg mx-auto px-4'>
            <AddTaskForm methodSubmit={addTask} />
            <Delimiter />
            <TaskList todos={todos} setTodos={setTodos} />
        </div>
    )
}

export default App
