import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [count, setCount] = useState(5)
  const AddValue =()=>{
    console.log(count);
    setCount(count+1)
  }

  const removeValue =()=>{
    if(count==0){
      
    }
      else{
        setCount(count-1)
      }

  }

  return (
    <>
      <h1>Counter value { count}</h1>
      <button onClick={AddValue}>Add Value</button>
      <br/>
      <br />

      <button onClick={removeValue}>remove Value</button>
    </>
  )
}

export default App
