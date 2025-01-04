import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks } from '../redux/taskSlice';
import { Link } from 'react-router-dom';
import TaskList from '../components/TaskList';

const HomePage = () => {
  const tasks = useSelector((state) => state.tasks.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      <h1>To-Do List</h1>
      <Link to="/add-task">Add New Task</Link>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default HomePage;
