// deps
import React, { useState } from "react";

// styles
import './Home.css';

// components
import TasksList from "../../components/Home/TasksList/TasksList";
import AddTask from "../../components/Home/AddTask/AddTask";
import Pet from "../../components/Home/Pet/Pet";

function Home() {

    const [tasks, setTasks] = useState(['Do dishes', 'Clean Room']);

    return (
        <div className="home-container">
            <Pet />
            <TasksList tasks={tasks} setTasks={setTasks} />
            <AddTask setTasks={setTasks} />
        </div>
    );
}

export default Home;