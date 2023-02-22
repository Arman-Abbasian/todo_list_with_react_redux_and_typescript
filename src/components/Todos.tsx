import React, { useEffect } from "react";
import { BsCircle,BsCheck,BsTrash } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../redux/store";
import { DeleteTodos, EditTodoCompleted, EditTodos, GetTodos } from "../redux/todo/todoActions";
import Todo, { ShowITodo } from "./Todo";
import { getTodoType } from "../redux/todo/todoTypes";


const Todos = () => {
    const dispatch = useDispatch();
  const todoState = useSelector((state:RootStore) => state.todo);
  console.log(todoState.todos instanceof Array)
  useEffect(()=>{
    dispatch(GetTodos())
  },[])
  console.log(typeof todoState)
  const changeCompletedCondition=(id:number|string)=>(event: any)=>{
    if(todoState.todos instanceof Array){
      console.log(todoState.todos)
      const itemm:getTodoType|any=todoState.todos.find((item:getTodoType)=>item.id===id) 
      itemm.completed=!itemm.completed
      dispatch(EditTodoCompleted(itemm.id,itemm))
         
    }
  }
    return ( 
        <div className="flex flex-col gap-3 justify-between items-center mb-10">
               {todoState.todos &&  todoState.todos instanceof Array &&
                todoState.todos.map((item:ShowITodo)=>{
                  return <div key={item.id} className={`flex justify-between items-center bg-cyan-200 py-2 px-4 rounded gap-6 w-full ${item.completed?'bg-cyan-700 opacity-30':''}`}>
                    {/* <p>{item.title}</p>
                    <p>{item.dueDate}</p>
                    <p>{item.completed}</p>
                    <div className="flex items-center gap-2">
                      {item.completed===false ? 
                      <BsCircle className="cursor-pointer" onClick={changeCompletedCondition(item.id)}  /> 
                      : 
                      <BsCheck className="cursor-pointer text-cyan-900" onClick={changeCompletedCondition(item.id)} />
                      }
                    <BsTrash className="cursor-pointer text-red-600" onClick={()=>dispatch(DeleteTodos(item.id))} />
                  </div> */}
                  </div>
                })
               }
        </div>
     );
}
 
export default Todos;