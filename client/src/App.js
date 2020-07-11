import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppNavbar from './components/AppNavbar';
import TasksList from './components/TasksList'

import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
    <div>
      <AppNavbar />
      <TasksList />
    </div>
    </Provider>
  );
}

export default App;
