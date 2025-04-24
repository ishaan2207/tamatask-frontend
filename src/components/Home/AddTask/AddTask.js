// deps
import React, { useState } from "react";

// styles
import './AddTask.css';

function AddTask({ setTasks }) {

    const [newTask, setNewTask] = useState('');

    const addNewTask = (task) => {
        setTasks(prev => [...prev, task]);
        setNewTask('');
    };

    return (
        <div className="add-task-container">
            <input type="text" placeholder="Create a new task" value={newTask}
                onChange={(event) => setNewTask(event.target.value)}>
            </input>
            <button onClick={() => addNewTask(newTask)}>Add Task</button>
        </div>
    );
}

export default AddTask;