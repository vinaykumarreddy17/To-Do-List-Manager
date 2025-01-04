import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
  return response.data;
});

export const addTask = createAsyncThunk('tasks/addTask', async (task) => {
  const response = await axios.post('https://jsonplaceholder.typicode.com/todos', task);
  return response.data;
});

export const updateTask = createAsyncThunk('tasks/updateTask', async ({ id, completed }) => {
  const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, { completed });
  return response.data;
});

const taskSlice = createSlice({
  name: 'tasks',
  initialState: { list: [], status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const index = state.list.findIndex((task) => task.id === action.payload.id);
        if (index !== -1) state.list[index] = action.payload;
      });
  },
});

export default taskSlice.reducer;
