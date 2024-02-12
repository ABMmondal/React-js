import InputBox from "./components/Inputbox";
import useCurrencyInfo from "./hooks/useCurrencyinfo";
import './App.css'
import { useState } from "react";

function App() {
  const [amount ,setAmount] =useState(0)
  const [from ,setForm] =useState("usd")
  const [to, setTo] = useState("inr")
  const [convertAmount, setconvertAmount]=useState(0)
  const currencyInfo =useCurrencyInfo(from)
  const options =Object.keys(currencyInfo)

  const swap =()=>{
    setForm(to)
    setTo(from)
    setconvertAmount(amount)
    setAmount(convertAmount)
  }
  const convert =()=>{
    setconvertAmount(amount*currencyInfo[to])
  }

  return (
    <>
        <h1 className=' '>hiii</h1>
        <InputBox/>
    </>
  )
}

export default App
