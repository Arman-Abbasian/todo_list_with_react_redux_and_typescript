import { AddTodoDispatchTypes, ADD_TODO_FAIL, ADD_TODO_LOADING, ADD_TODO_SUCCESS, DeleteTodoDispatchTypes, DELETE_TODO_FAIL, DELETE_TODO_LOADING, DELETE_TODO_SUCCESS, EditTodoDispatchTypes, EDIT_TODO_FAIL, EDIT_TODO_LOADING, EDIT_TODO_SUCCESS, GetTodoDispatchTypes, GET_TODOS_FAIL, GET_TODOS_LOADING, GET_TODOS_SUCCESS, TodosType } from "./todoTypes";

  
  interface InitialState {
    loading: boolean,
    todos?: TodosType|[]
    error:any
  }
  
  const initialState: InitialState = {
    loading: false,
    todos:[],
    error:"",
  };
  
  const todoReducer = (state: InitialState = initialState, action: GetTodoDispatchTypes|AddTodoDispatchTypes|EditTodoDispatchTypes|DeleteTodoDispatchTypes) : InitialState => {
    switch (action.type) {
      case GET_TODOS_FAIL:
        return {
          loading: false,
          todos:[],
          error:"payload.message"
        }
      case GET_TODOS_LOADING:
        return {
          loading: true,
          todos:[],
          error:""
        }
      case GET_TODOS_SUCCESS:
        return {
          loading: false,
          todos: action.payload,
          error:""
        }
        case ADD_TODO_FAIL:
        return {
          loading: false,
          todos:[],
          error:action.payload
        }
      case ADD_TODO_LOADING:
        return {
          loading: true,
          todos:[],
          error:""
        }
      case ADD_TODO_SUCCESS:
        return {
          loading: false,
          todos: action.payload,
          error:""
        }
        case EDIT_TODO_FAIL:
        return {
          loading: false,
          todos:[],
          error:action.payload
        }
      case EDIT_TODO_LOADING:
        return {
          loading: true,
          todos:[],
          error:""
        }
      case EDIT_TODO_SUCCESS:
        return {
          loading: false,
          todos: action.payload,
          error:""
        }
        case DELETE_TODO_FAIL:
        return {
          loading: false,
          todos:[],
          error:action.payload
        }
      case DELETE_TODO_LOADING:
        return {
          loading: true,
          todos:[],
          error:""
        }
      case DELETE_TODO_SUCCESS:
        return {
          loading: false,
          todos: action.payload,
          error:""
        }
      default:
        return state
    }
  };
  
  
  export default todoReducer;