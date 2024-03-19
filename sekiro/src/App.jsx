// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import Login from'./Components/Login'
import Signup from './Components/Signup'

import { BrowserRouter ,Route, Routes } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup />}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/home' element={<Login/>}></Route>
        <Route path='/' element={<Register/>}></Route>
        <Route path='/' element={<Register/>}></Route>


      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
