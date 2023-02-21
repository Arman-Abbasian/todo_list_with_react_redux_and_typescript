import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <Todos />
      <AddTodo />
    </div>
  );
}

export default App;
