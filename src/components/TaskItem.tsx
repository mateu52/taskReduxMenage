import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../redux/taskSlice';
import { useNavigate } from 'react-router-dom';

const TaskItem = ({ task }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDelete = () => {
        if (window.confirm(`Are you sure you want to delete the task: "${task.title}"?`)) {
        dispatch(deleteTask(task.id));
        }
    };

    const handleEdit = () => {
        navigate(`/edit/${task.id}`);
    };

    return (
        <div className="task-item flex">
            <h3 className='bg-neutral-100 m-2 px-1'>{task.title}</h3>
            <p className='bg-neutral-100 m-2 px-1'>{task.description}</p>
            <p className='bg-neutral-100 m-2 px-1'><strong>Status:</strong> {task.status}</p>
            <button onClick={handleDelete} className="delete-button bg-neutral-100 m-2 px-1">Delete</button>
            <button onClick={handleEdit} className="edit-button bg-neutral-100 m-2 px-1">Edit</button>
        </div>
    );
};

export default TaskItem;