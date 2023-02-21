import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddTodos } from '../redux/todo/todoActions';
const AddTodo = () => {
    const dispatch=useDispatch();
    const [formInput,setFormInput]=useState({title:"",dueDate:""});
    const changeHandler=(e: React.FormEvent<HTMLInputElement>):void=>{
        setFormInput({...formInput,[e.currentTarget.name]:e.currentTarget.value})
    }
    const submitHandler=(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        dispatch(AddTodos({...formInput,completed:false,date:new Date().toDateString()}));
        console.log(formInput)
        setFormInput({title:"",dueDate:""})
     }
    return ( 
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" name='title' value={formInput.title} onChange={changeHandler} />
                <input type="date" name='dueDate' value={formInput.dueDate} onChange={changeHandler} />
                <input type="submit" value="Add" />
            </form>
        </div>
     );
}
 
export default AddTodo;