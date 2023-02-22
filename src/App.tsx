import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {
  return (
    <div className="container mx-auto max-w-xl p-3">
      <Todos />
      <AddTodo />
    </div>
  );
}

export default App;
