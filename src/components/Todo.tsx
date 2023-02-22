import React from "react";
import { BsCircle,BsCheck,BsTrash,BsPencilSquare } from "react-icons/bs";
import { editTodoType, getTodoType } from "../redux/todo/todoTypes";
export type ShowITodo= {
    id:number|string,
    title: string,
    dueDate:string,
    completed: boolean;
    changeCompleted:(id:number|string)=>void
    editTodo:(id:number|string)=>void
    removeTodo:(id:number|string)=>void
  }

const Todo = ({title,completed,id,dueDate,changeCompleted,removeTodo,editTodo}:ShowITodo) => {
    return ( 
        <div className="flex justify-between items-center bg-cyan-200 py-2 px-4 rounded w-full">
                <p>{title}</p>
                <p>{dueDate}</p>
                <div className="flex gap-2 items-center">
                <span className="cursor-pointer" onClick={()=>changeCompleted(id)}>{completed ?<BsCheck className="text-cyan-900" />:<BsCircle className="text-cyan-900"/>}</span>
                <span onClick={()=>editTodo(id)} className="cursor-pointer"><BsPencilSquare className="text-cyan-800" /></span>
                <span onClick={()=>removeTodo(id)}><BsTrash className="cursor-pointer text-red-600" /></span>
                </div>
        </div>
     );
}
 
export default Todo;