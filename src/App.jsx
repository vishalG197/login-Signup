import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import SignupPage from './components/SignupPage'
import LoginPage from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LoginPage/>
     <SignupPage/>
    </>
  )
}

export default App
