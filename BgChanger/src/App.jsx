import React ,{useState}from "react"

function App() {
  const [color, setcolor]=useState("#ffe3e3")
  return (
    <div className="w-screen h-screen duration-200" style={{backgroundColor:color}}>
    <div className="fixed flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex min-w-2 justify-center content-center space-x-5 shadow-lg bg-white px-3 py-2 rounded-3xl ">
        <button onClick={()=>{setcolor("red")}} className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:"red"}} >red</button>

        <button onClick={()=>{setcolor("Green")}} className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:"Green"}} >Green</button>

        <button onClick={()=>{setcolor("blue")}} className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:"blue"}} >blue</button>

        <button onClick={()=>{setcolor("black")}} className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:"Black"}} >Black</button>

        
        </div>

    </div>
    </div>
  )
}

export default App
