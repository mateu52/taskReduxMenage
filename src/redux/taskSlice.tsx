import { createSlice } from '@reduxjs/toolkit';
const initialState = [
    { id: 1, title: 'Sample Task 1', description: 'This is a sample task.', status: 'Pending' },
    { id: 2, title: 'Sample Task 2', description: 'This is another task.', status: 'Completed' },
];
const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    updateTask: (state, action) => {
        const { id, title, description, status } = action.payload;
        const existingTask = state.find((task) => task.id === id);
        if (existingTask) {
          existingTask.title = title;
          existingTask.description = description;
          existingTask.status = status;
        }
      },      
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, updateTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
