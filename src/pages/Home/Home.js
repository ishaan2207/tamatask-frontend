// deps
import React, { useState } from "react";

// styles
import './Home.css';

// components
import TasksList from "../../components/Home/TasksList/TasksList";
import AddTask from "../../components/Home/AddTask/AddTask";
import Pet from "../../components/Home/Pet/Pet";
import TaskModal from "../../components/Home/TaskModal/TaskModal";

function Home() {

    const [tasks, setTasks] = useState(['Do dishes', 'Clean Room']);
    const [showTaskModal, setShowTaskModal] = useState(false);
    
    return (
        <div className="home-container">
            <Pet />
            <TasksList tasks={tasks} setTasks={setTasks} />
            <TaskModal setTasks={setTasks} showTaskModal={showTaskModal} setShowTaskModal={setShowTaskModal}/>
            <button onClick={() => setShowTaskModal(true)}>Add Task</button>
        </div>
    );
}

export default Home;