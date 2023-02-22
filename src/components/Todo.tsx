import React from "react";
import { BsCircle,BsCheck,BsTrash } from "react-icons/bs";
import { editTodoType, getTodoType } from "../redux/todo/todoTypes";
export type ShowITodo= {
    id:number
    title: string;
    dueDate:string,
    completed: boolean;
    item:getTodoType,
    changeCompleted:(id:number,todo:editTodoType)=>void
    removeTodo:(id:number)=>void
  }

const Todo = ({title,completed,id,changeCompleted,removeTodo,item}:ShowITodo) => {
    return ( 
        <div className="flex justify-between items-center bg-cyan-200 py-2 px-4 rounded">
                <p>{title}</p>
                <div className="flex gap-2 items-center">
                <span onClick={()=>changeCompleted(id,item)}>{completed ?<BsCheck />:<BsCircle/>}</span>
                <span onClick={()=>removeTodo(id)}><BsTrash /></span>
                </div>

        </div>
     );
}
 
export default Todo;