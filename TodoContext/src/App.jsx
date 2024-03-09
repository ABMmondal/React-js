import { useState ,useEffect} from 'react'
import './App.css'
import { ToDoProvider } from './context/index'
export default function App() {
  const [todos, setTodos] = useState([])

  const addToDo =(todo)=>{
    setTodos((prev)=>[...prev,{id: Math.random().toString(), todo}])
  }

  const UpdateToDo =(id,todo)=>{
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id=== id ?todo:prevTodo)))
  }

  const deleteToDo =(id)=>{
    setTodos((prev)=> prev.filter((val) => val.id !== id))
  }

  const toggleComplete=(id)=>{
    setTodos((prev)=>prev.map((item)=>item.id === id? {...item,completed :!item.completed} :  item) )
  }

  useEffect(() => {
   const todos = JSON.parse(localStorage.getItem("todos")) 
   if (todos && todos.length>0) {
    setTodos(todos)
  } 
  }, [])
  
  useEffect(()=>{
    localStorage.setItem('todos ',JSON.stringify(todos))
  },[todos])


  

  return (
    <ToDoProvider value={{ todos, addToDo, deleteToDo, UpdateToDo ,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </ToDoProvider>
  )
}