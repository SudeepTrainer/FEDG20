import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let message = "Hello React!"

function Hello() {
  return <h1>{message}</h1>
}

//Function component
function App() {
  //JSX syntax
  return (
    <div>
      <Hello />
      <Hello />
    </div>
  )
}

export default App
