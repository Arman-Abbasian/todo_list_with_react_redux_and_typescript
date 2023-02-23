import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoEditedForm from './components/TodoEditedForm';
import Todos from './components/Todos';
import { RootStore } from './redux/store';
import {useState} from 'react'

function App() {
  const [showEdit,setShowEdit]=useState(false)
  const dispatch=useDispatch();
    const todoState = useSelector((state:RootStore) => state.todo);
    const changeEditForm=(id:number|string)=>{
      console.log(id)
    }
  return (
    <div className="container mx-auto max-w-xl p-3">
      <div className={``}>
      <TodoEditedForm />
      </div>
      <AddTodo />
      <Todos changeEditForm={changeEditForm} showEdit={showEdit} />
    </div>
  );
}

export default App;
