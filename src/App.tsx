import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import poza_experiment1 from "../public/pexels-craig-adderley-1563355.jpg"

function App() {
  const [count, setCount] = useState(0)
  const [visible, setVisibile] = useState(true)

  function handle_click() {
    setVisibile(!visible)
  }
  
  return (
    <div>
      <img src={poza_experiment1} alt="logo"/>
      <div style={{ visibility: visible ? "visible" : "hidden" }}>
        Ehart

      </div>
      <button onClick={handle_click}>s
        Click
      </button>



    </div>
  )
}

export default App
