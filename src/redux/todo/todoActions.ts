import {Dispatch} from "redux";
import axios from "axios";
import { AddTodoDispatchTypes, addTodoType,editTodoType, ADD_TODO_FAIL, ADD_TODO_LOADING, ADD_TODO_SUCCESS, DeleteTodoDispatchTypes, DELETE_TODO_FAIL, DELETE_TODO_LOADING, DELETE_TODO_SUCCESS, EditTodoDispatchTypes, EDIT_TODO_FAIL, EDIT_TODO_LOADING, EDIT_TODO_SUCCESS, GetTodoDispatchTypes, GET_TODOS_FAIL, GET_TODOS_LOADING, GET_TODOS_SUCCESS} from "./todoTypes";
import type {} from 'redux-thunk/extend-redux';

export const GetTodos = () => async (dispatch: Dispatch<GetTodoDispatchTypes>) => {
  try {
    dispatch({
      type: GET_TODOS_LOADING
    })
    const res = await axios.get(`http://localhost:4000/todos`);
    console.log(res.data)
    dispatch({
      type: GET_TODOS_SUCCESS,
      payload: res.data
    })

  } catch(err) {
    let message = 'Unknown Error'
    if (err instanceof Error){ message = err.message
    dispatch({
      type: GET_TODOS_FAIL,
      payload:err.message
    })
}
  }
};
export const AddTodos = (todo:addTodoType) => async (dispatch: Dispatch<AddTodoDispatchTypes>) => {
    try {
      dispatch({
        type: ADD_TODO_LOADING
      })
      await axios.post(`http://localhost:4000/todos`,todo)
      const res= await axios.get(`http://localhost:4000/todos`)
      console.log(res.data)
      dispatch({
        type: ADD_TODO_SUCCESS,
        payload: res.data
      })
  
    } catch(err) {
        let message = 'Unknown Error'
        if (err instanceof Error){ message = err.message
        dispatch({
          type: ADD_TODO_FAIL,
          payload:err.message
        })
    }
}
      
  };
  export const EditTodos = (id:string|number,todo:editTodoType) => async (dispatch: Dispatch<EditTodoDispatchTypes>) => {
    try {
      dispatch({
        type: EDIT_TODO_LOADING
      })
      await axios.put(`http://localhost:4000/todos/${id}`,{todo})
      const res= await axios.get(`http://localhost:4000/todos`)
      console.log(res.data)
      dispatch({
        type: EDIT_TODO_SUCCESS,
        payload: res.data
      })
  
    } catch(err) {
        let message = 'Unknown Error'
        if (err instanceof Error){ message = err.message
        dispatch({
          type: EDIT_TODO_FAIL,
          payload:err.message
        })
    }
}
  };
  export const DeleteTodos = (id:string|number) => async (dispatch: Dispatch<DeleteTodoDispatchTypes>) => {
    try {
      dispatch({
        type: DELETE_TODO_LOADING
      })
      await axios.delete(`http://localhost:4000/todos/${id}`)
      const res= await axios.get(`http://localhost:4000/todos`)
      console.log(res.data)
      dispatch({
        type: DELETE_TODO_SUCCESS,
        payload: res.data
      })
  
    } catch(err) {
        let message = 'Unknown Error'
        if (err instanceof Error){ message = err.message
        dispatch({
          type: DELETE_TODO_FAIL,
          payload:err.message
        })
    }
}
  };