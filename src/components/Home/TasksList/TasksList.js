// deps
import React from "react";

// styles
import './TasksList.css';

function TasksList({ tasks, setTasks }) {

    const markTaskAsCompleted = (indexToRemove) => {
        setTasks(prevTasks => prevTasks.filter((_, index) => index !== indexToRemove));
    }

    return (
        <div className="tasks-container">
            {tasks.map((task, key) => (
                <div className="task" key={key}>
                    <div className="task-text">
                        {task}
                    </div>
                    <input className="task-completed-check" type="checkbox" onChange={() => markTaskAsCompleted(key)}></input>
                </div>
            ))}
        </div>
    );
}

export default TasksList;