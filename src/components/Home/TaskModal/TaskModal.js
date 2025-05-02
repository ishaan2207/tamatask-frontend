// deps
import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from "@mui/material";

// styles
import './TaskModal.css';

function TaskModal({setTasks, showTaskModal, setShowTaskModal}) {
    
    
    const [newTask, setNewTask] = useState("");

    const handleAddTask = () => {
        setTasks(prev => [...prev, newTask]);
        setNewTask("");
        setShowTaskModal(false);
    };

    //called when modal closed without adding a task
    const handleClose = () => {
        setShowTaskModal(false);
    }

    return (
        <Dialog open ={showTaskModal} onClose={handleClose}>
            {/*Title of modal*/}
            <DialogTitle>Add New Task</DialogTitle>

            {/*Input field*/}
            <DialogContent> 
                <TextField
                    autoFocus
                    margin="dense"
                    label="Task"
                    fullWidth
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
            </DialogContent>

            {/*Actions:Cancel/add buttons*/}
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleAddTask} variant="contained">Add Task</Button>
            </DialogActions>
        </Dialog>
    );
}

export default TaskModal;