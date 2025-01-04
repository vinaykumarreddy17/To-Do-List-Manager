import React from 'react';
import { useDispatch } from 'react-redux';
import { updateTask } from '../redux/taskSlice';
import { useParams, useNavigate } from 'react-router-dom';

const EditTaskPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleStatusChange = (completed) => {
    dispatch(updateTask({ id, completed }));
    navigate('/');
  };

  return (
    <div>
      <h1>Edit Task</h1>
      <button onClick={() => handleStatusChange(true)}>Mark as Completed</button>
      <button onClick={() => handleStatusChange(false)}>Mark as Pending</button>
    </div>
  );
};

export default EditTaskPage;
