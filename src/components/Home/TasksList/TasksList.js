// deps
import React, { useState } from "react";

// styles
import './TasksList.css';

function TasksList({ tasks }) {

    return (
        <div className="home-container">
            <div className="tasks-container">
                <ul className="tasks-list">
                    {tasks.map((task, key) => (
                        <li key={key}>{task}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default TasksList;