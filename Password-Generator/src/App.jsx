import { useState, useCallback, useEffect,useRef } from "react";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [numbers, setnumbers] = useState(false);
  const [characters, setcharacters] = useState(false);
  const [password, setPassword] = useState("");

  //ref hook
  const passwordref = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbers) str += "0123456789";
    if (characters) str += "`~!@#$%^&*()";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numbers, characters, setPassword]);
    //copy fun
    const copypassword = useCallback(
      () => {  
        passwordref.current?.select();
        window.navigator.clipboard.writeText(password)
        alert('Password copied to clipboard!');
       },
      [password ,passwordref]
    )
    

  //useeffect
  useEffect(() => {
  passwordGenerator();
  }, [length, numbers, characters, setPassword, passwordGenerator])
  
  console.log();
  return (
    <>
      <h1 className=" text-4xl text-center text-white my-6">
        Password Generator
      </h1>

      <form>
        <div className="relative">
          <input
            type="text"
            value={password}
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="password"
            readOnly
            ref={passwordref}
          />
          <button
          onClick={copypassword}
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            copy
          </button>
        </div>
        <div className=" flex text-sm gap-x-2">
          <div className=" flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className="cursor-pointer my-10"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label className=" text-cyan-50" htmlFor="length">
              Length: {length}
            </label>
          </div>
          <div className="flex items-center gap-x-1 mx-3">
            <input
              type="checkbox"
              defaultChecked={characters}
              id="characterInput"
              onChange={() => {
                setcharacters((prev) => !prev);
              }}
            />
            <label className=" text-cyan-50 mx-1" htmlFor="characterInput">
              Characters
            </label>
          </div>
          <div className="flex items-center gap-x-1 mx-3">
            <input
              type="checkbox"
              defaultChecked={numbers}
              id="numbersInput"
              onChange={() => {
                setnumbers((prev) => !prev);
              }}
            />
            <label className=" text-cyan-50 mx-1" htmlFor="numbersInput">
              Number
            </label>
          </div>
        </div>
      </form>
    </>
  );
}

export default App;
