import{createSlice,nanoid} from '@reduxjs/toolkit';

const initialState ={
    todos:[
        {
            id :1,
            text:"fuck",
        }
    ]
}
export const todoSlice= createSlice({
    name:'todo',
    initialState ,
    reducers:{
        addTodo :(state,action)=>{},
        removeTodo :()=>{},

    }
})