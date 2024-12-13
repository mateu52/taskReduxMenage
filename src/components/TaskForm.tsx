import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, updateTask } from '../redux/taskSlice';
import { useNavigate, useParams } from 'react-router-dom';

const TaskForm = () => {
  const { taskId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const taskToEdit = useSelector((state) =>
        state.tasks.find((task) => task.id === Number(taskId))
    );

    const [taskData, setTaskData] = useState({
        title: '',
        description: '',
        status: 'Pending',
    });

    useEffect(() => {
        if (taskToEdit) {
        setTaskData(taskToEdit);
        }
    }, [taskToEdit]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTaskData((prev) => ({
        ...prev,
        [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskId) {
        // Edytuj zadanie
        dispatch(updateTask({ id: Number(taskId), ...taskData }));
        } else {
        // Dodaj nowe zadanie
        dispatch(addTask({ id: Date.now(), ...taskData }));
        }
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit}>
        <h2>{taskId ? 'Edit Task' : 'Add Task'}</h2>
        <input
            type="text"
            name="title"
            value={taskData.title}
            onChange={handleChange}
            placeholder="Title"
            required
        />
        <textarea
            name="description"
            value={taskData.description}
            onChange={handleChange}
            placeholder="Description"
            required
        />
        <select
            name="status"
            value={taskData.status}
            onChange={handleChange}
            required
        >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
        </select>
        <button type="submit">{taskId ? 'Save Changes' : 'Add Task'}</button>
        <button type="button" onClick={() => navigate('/')}>
            Cancel
        </button>
        </form>
    );
};

export default TaskForm;
