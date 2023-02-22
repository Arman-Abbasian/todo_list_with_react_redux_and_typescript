import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoEditedForm from './components/TodoEditedForm';
import Todos from './components/Todos';
import { RootStore } from './redux/store';

function App() {
  const dispatch=useDispatch();
    const todoState = useSelector((state:RootStore) => state.todo);
    const sendTodoId=(id:number|string)=>{
      console.log(id)
    }
  return (
    <div className="container mx-auto max-w-xl p-3">
      <TodoEditedForm />
      <AddTodo />
      <Todos sendTodoId={sendTodoId} />
    </div>
  );
}

export default App;
