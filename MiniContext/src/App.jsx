
import './App.css'
import Login from './component/Login'
import Profile from './component/Profile'
import UserContextProvider from './context/UserContextProv'

function App() {

  return (
    <UserContextProvider>
      <h1>HIiiii</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
