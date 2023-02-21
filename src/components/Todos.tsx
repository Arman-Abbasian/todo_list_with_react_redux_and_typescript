import React, { useEffect } from "react";
import { BsCircle,BsCheck,BsTrash } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../redux/store";
import { DeleteTodos, EditTodos, GetTodos } from "../redux/todo/todoActions";
import Todo, { ShowITodo } from "./Todo";


const Todos = () => {
    const dispatch = useDispatch();
  const todoState = useSelector((state:RootStore) => state.todo);
  console.log(todoState.todos instanceof Array)
  useEffect(()=>{
    dispatch(GetTodos())
  },[])
  console.log(typeof todoState)
    return ( 
        <div className="flex justify-between items-center bg-cyan-200 py-2 px-4 rounded">
               {todoState.todos &&  todoState.todos instanceof Array &&
                todoState.todos.map((item:ShowITodo)=>{
                  return <div key={item.id} className="flex justify-between items-center bg-cyan-200 py-2 px-4 rounded gap-6">
                    <p>{item.title}</p>
                    <p>{item.dueDate}</p>
                    <p>{item.completed}</p>
                    <BsTrash onClick={()=>dispatch(DeleteTodos(item.id))} />
                    <BsCircle />
                  </div>
                })
               }
        </div>
     );
}
 
export default Todos;