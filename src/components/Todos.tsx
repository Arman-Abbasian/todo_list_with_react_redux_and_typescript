import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../redux/store";
import { DeleteTodos, EditTodoCompleted, EditTodos, GetTodos } from "../redux/todo/todoActions";
import Todo, { ShowITodo } from "./Todo";
import { editTodoType, getTodoType } from "../redux/todo/todoTypes";
import TodoEditedForm from "./TodoEditedForm";


const Todos = ({sendTodoId}:any) => {
    const dispatch = useDispatch();
  const todoState = useSelector((state:RootStore) => state.todo);
  const [showEdit,setShowEdit]=useState(false)
  console.log(todoState.todos instanceof Array)
  useEffect(()=>{
    dispatch(GetTodos())
  },[]);
  const changeCompletedCondition=(id:number|string)=>(event: any)=>{
    if(todoState.todos instanceof Array){
      const item:editTodoType|any=todoState.todos.find((item:getTodoType)=>item.id===id);
      if(item) {
      item.completed=!item.completed
      dispatch(EditTodoCompleted(item.id,item))
    }  
    }
  }
  const changeEditForm=(id:number|string)=>{
    setShowEdit(!showEdit)
    sendTodoId(id)
  }
    return ( 
        <div className="flex flex-col gap-3 justify-between items-center mb-10">
               {todoState.todos &&  todoState.todos instanceof Array &&
                todoState.todos.map((item:ShowITodo)=>{
                  return <>
                  <Todo key={item.id}  title={item.title} completed={item.completed} id={item.id} dueDate={item.dueDate} changeCompleted={changeCompletedCondition(item.id)}  
                  removeTodo={()=>dispatch(DeleteTodos(item.id))} editTodo={()=>changeEditForm(item.id)} />
                  <div className={`fixed flex justify-center items-center w-screen h-screen top-0 right-0 bg-opacity-90 bg-gray-800 ${showEdit?'flex':'hidden'}`}>
          </div>
          </>
                })
               }
        </div>
     );
}
 
export default Todos;