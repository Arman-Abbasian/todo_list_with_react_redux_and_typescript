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
        <div className='w-full'>
            <form onSubmit={submitHandler} className='flex flex-col gap-4'>
                <input type="text" name='title' value={formInput.title} onChange={changeHandler} className='rounded' />
                <input type="date" name='dueDate' value={formInput.dueDate} onChange={changeHandler} className='rounded' />
                <input type="submit" value="Add" className='w-full rounded p-2 bg-cyan-500 cursor-pointer' />
            </form>
        </div>
     );
}
 
export default AddTodo;