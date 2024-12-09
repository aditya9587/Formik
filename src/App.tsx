import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './Components/Signup'
import Login from './Components/Login'
import { ToastContainer } from 'react-toastify'

function App() {
  const [show, setShow] = useState<boolean>(true)

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes >
      <ToastContainer />
    </BrowserRouter >

  )
}

export default App
