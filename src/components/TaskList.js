import React from 'react';
import { Link } from 'react-router-dom';

const TaskList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <h3>{task.title}</h3>
          <p>Status: {task.completed ? 'Completed' : 'Pending'}</p>
          <Link to={`/edit-task/${task.id}`}>Edit</Link>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
