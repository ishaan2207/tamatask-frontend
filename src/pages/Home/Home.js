// deps
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// styles
import './Home.css';

// components
import TasksList from "../../components/Home/TasksList/TasksList";
import AddTask from "../../components/Home/AddTask/AddTask";
import Pet from "../../components/Home/Pet/Pet";
import TaskModal from "../../components/Home/TaskModal/TaskModal";

// icons
import PersonIcon from '@mui/icons-material/Person';
import PetsIcon from '@mui/icons-material/Pets';

function Home() {
    const navigate = useNavigate();

    const [tasks, setTasks] = useState(['Do dishes', 'Clean Room']);
    const [showTaskModal, setShowTaskModal] = useState(false);
    
    return (
        <div className="home-container">
            <div className="home-buttons-container">
                <div classname='pet-page-button' onClick={() => navigate('/pet')}><PetsIcon /></div>
                <div classname='profile-page-button' onClick={() => navigate('/profile')}><PersonIcon /></div>
            </div>
            <Pet />
            <TasksList tasks={tasks} setTasks={setTasks} />
            <TaskModal setTasks={setTasks} showTaskModal={showTaskModal} setShowTaskModal={setShowTaskModal}/>
            <button onClick={() => setShowTaskModal(true)}>Add Task</button>
        </div>
    );
}

export default Home;