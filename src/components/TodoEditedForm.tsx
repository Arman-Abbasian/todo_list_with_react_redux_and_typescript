import { useDispatch, useSelector } from "react-redux";
import {useState,useEffect} from 'react';
import { RootStore } from "../redux/store";
import { getTodoType } from "../redux/todo/todoTypes";

const TodoEditedForm = ({id}:any) => {
    const dispatch=useDispatch();
    const todoState = useSelector((state:RootStore) => state.todo); 
    const [formInput,setFormInput]=useState({title:"",dueDate:""});
    useEffect(()=>{
        if(todoState.todos instanceof Array){
           const selectedTodo:getTodoType|undefined= todoState.todos.find((item:getTodoType)=>item.id===id)
           console.log(selectedTodo)
           if(selectedTodo){
        //    setFormInput({...formInput,title:selectedTodo,dueDate:selectedTodo})
        console.log(selectedTodo)
        }
        }
    },[])
    const changeHandler=(e: React.FormEvent<HTMLInputElement>):void=>{
        setFormInput({...formInput,[e.currentTarget.name]:e.currentTarget.value})
    }
    const submitHandler=(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        //dispatch(AddTodo({...formInput,completed:false}));
        console.log(formInput)
        setFormInput({title:"",dueDate:""})
     }
    return ( 
        <div className='w-full mb-10'>
            <form onSubmit={submitHandler} className='flex flex-col gap-4'>
                <input type="text" name='title' value={formInput.title} onChange={changeHandler} className='rounded border-cyan-600 focus:border-none focus:ring-1 focus:ring-cyan-400' />
                <input type="date" name='dueDate' value={formInput.dueDate} onChange={changeHandler} className='rounded border-cyan-600 focus:border-none focus:ring-1 focus:ring-cyan-400' />
                <input type="submit" value="Add" className='w-full rounded p-2 bg-cyan-500 hover:bg-cyan-300 cursor-pointer' />
            </form>
        </div>
     );
}
 
export default TodoEditedForm;