export const GET_TODOS_LOADING = "GET_TODOS_LOADING";
export const GET_TODOS_FAIL = "GET_TODOS_FAIL";
export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
export const ADD_TODO_LOADING = "ADD_TODO_LOADING";
export const ADD_TODO_FAIL = "ADD_TODO_FAIL";
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const EDIT_TODO_LOADING = "EDIT_TODO_LOADING";
export const EDIT_TODO_FAIL = "EDIT_TODO_FAIL";
export const EDIT_TODO_SUCCESS = "EDIT_TODO_SUCCESS";
export const DELETE_TODO_LOADING = "DELETE_TODO_LOADING";
export const DELETE_TODO_FAIL = "DELETE_TODO_FAIL";
export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS";

type getTodoType={
    id: number,
    title: string,
    completed: boolean,
    date:Date,
    dueDate:Date
}
export type addTodoType={
  title: string,
  completed: boolean,
  date:string,
  dueDate:string
}
export type editTodoType={
  title: string,
  completed: boolean,
  dueDate:Date
}
export type TodosType = {
  map: any;
  abilities: getTodoType[],
}

//get types
export interface getTodoLoading {
  type: typeof GET_TODOS_LOADING
}

export interface getTodoFail {
  type: typeof GET_TODOS_FAIL,
  payload:string
}

export interface getTodoSuccess {
  type: typeof GET_TODOS_SUCCESS,
  payload: TodosType
}
//add types
export interface addTodoLoading {
    type: typeof ADD_TODO_LOADING
  }
  export interface addTodoFail {
    type: typeof ADD_TODO_FAIL,
    payload:string
  }
export interface addTodoSuccess {
    type: typeof ADD_TODO_SUCCESS,
    payload: TodosType
  }
  //edit types
export interface editTodoLoading {
    type: typeof EDIT_TODO_LOADING
  }
  export interface editTodoFail {
    type: typeof EDIT_TODO_FAIL,
    payload:string
  }
  export interface editTodoSuccess {
    type: typeof EDIT_TODO_SUCCESS,
    payload: TodosType
  }
   //delete types
export interface deleteTodoLoading {
    type: typeof DELETE_TODO_LOADING
  }
  export interface deleteTodoFail {
    type: typeof DELETE_TODO_FAIL,
    payload:string
  }
  export interface deleteTodoSuccess {
    type: typeof DELETE_TODO_SUCCESS,
    payload: TodosType
  }
export type GetTodoDispatchTypes = getTodoSuccess | getTodoLoading | getTodoFail
export type AddTodoDispatchTypes =addTodoLoading|addTodoSuccess|addTodoFail
export type EditTodoDispatchTypes =editTodoLoading|editTodoSuccess|editTodoFail
export type DeleteTodoDispatchTypes =deleteTodoLoading|deleteTodoSuccess|deleteTodoFail