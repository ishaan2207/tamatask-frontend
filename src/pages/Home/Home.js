// deps
import React, { useState } from "react";

// styles
import './Home.css';

// components
import TasksList from "../../components/Home/TasksList/TasksList";
import AddTask from "../../components/Home/AddTask/AddTask";

function Home() {

    const [tasks, setTasks] = useState(['Do dishes', 'Clean Room']);

    return (
        <div className="home-container">
            <TasksList tasks={tasks} />
            <AddTask setTasks={setTasks} />
        </div>
    );
}

export default Home;