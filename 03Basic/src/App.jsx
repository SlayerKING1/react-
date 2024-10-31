import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Lets work with tailwind in react</h1>
      < Card username = "Vishal"/>
      < Card username = "Vivek"/>
      < Card username = "Raj"/>
    </>
  )
}

export default App
