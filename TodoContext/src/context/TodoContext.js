import {createContext,useContext} from 'react'
 export const ToDoContext =createContext({
    todos:[
        {
            id :1,
            todo:"fuck",
            completed:false,
        }
    ],
    addToDo:(todo)=>{},
    UpdateToDo:(id,todo)=>{},
    deleteToDo :(id)=>{},
    toggleComplete : (id) =>{},
 })

 export const UseToDo = ()=>{
    return useContext(ToDoContext)
 }

 export const ToDoProvider =ToDoContext.Provider; 