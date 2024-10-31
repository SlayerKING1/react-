import { useState } from 'react'

import './App.css'

function App() {
  const [counter, setCounter]= useState(15)
  //let counter = 15
  const addValue = () =>{
      setCounter(counter + 1)
  }
  const remValue = () =>{
      setCounter(counter - 1)
  }
  return (
    <>
      <h1>Learning from Hitesh </h1>
      <h2>Counter : {counter} </h2>
      <button onClick={addValue}>Add value</button>{" "}
      <button onClick={remValue}>Remove value</button>
      <p>footer</p>
    </>
  )
}

export default App
