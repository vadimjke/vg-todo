import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import TasksList from './components/TasksList'

function App() {
  return (
    <div>
      <AppNavbar />
      <TasksList />
    </div>
  );
}

export default App;
