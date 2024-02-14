import { createSlice } from "@reduxjs/toolkit";
import { v1 } from "uuid";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: []
    },
    reducers: {
        addTask (state, action) {
            const task = {
                id: v1(),
                text: action.payload.text,
                completed: false
            };
            state.todos.push(task);
        },
        toggleComplete(state, action) {
            const findTask = state.todos.find(task => task.id === action.payload.idTask);
            if (findTask) findTask.completed = !findTask.completed;
        },
        removeTask(state, action) {
            state.todos = state.todos.filter(task => task.id !== action.payload.idTask)
        },
        changeTextTask(state, action) {
            state.todos = state.todos.map(task => task.id === action.payload.idTask ? {...task, text: action.payload.textTask} : task)
        }
    }
});

export const {addTask, removeTask, toggleComplete, changeTextTask} = todoSlice.actions;
export default todoSlice.reducer;