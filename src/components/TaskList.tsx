import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';
const TaskList = () => {
    const tasks = useSelector((state) => state.tasks);
    const filter = useSelector((state) => state.filter);

    const filteredTasks = tasks.filter(task =>
        filter === 'ALL' || task.status === filter
    );

    return (
        <div>
            {filteredTasks.map(task => (
                <div className='my-2 bg-neutral-200'>
                    <TaskItem key={task.id} task={task} />
                </div>
            ))}
        </div>
    );
};

export default TaskList;