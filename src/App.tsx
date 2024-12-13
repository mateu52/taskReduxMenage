import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {

  return (
    <Provider store={store}>
      <div className='bg-neutral-300 w-1/2'>
        <Router>
        <h1 className='bg-neutral-100'>Task menager</h1>
        <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/edit/:taskId" element={<TaskForm />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  )
}

export default App
