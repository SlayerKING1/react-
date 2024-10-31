import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive');

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Let's work with Tailwind CSS in React</h1>
      <h2 className='text-4xl my-4 underline'>Choose the background color you want.</h2>
      <div className='w-full h-screen duration-200 flex justify-center items-center' style={{ backgroundColor: color }}>
        <div className="flex -left-20 -top-10 justify-center items-center ml-56 mt-10 bg-slate-400 rounded-full w-80 h-80 relative shadow-zinc-700 shadow-xl">
          <button
            className="w-28 h-28 bg-blue-500 text-white rounded-full absolute hover:bg-blue-400 shadow-xl shadow-black"
            style={{ transform: 'rotate(0deg) translate(120px) rotate(-0deg)' }}
            onClick={() => setColor("blue")}
          >
            Blue
          </button> 
          <button
            className="w-28 h-28 bg-red-500 text-white rounded-full absolute hover:bg-red-400 shadow-xl shadow-black"
            style={{ transform: 'rotate(120deg) translate(120px) rotate(-120deg)' }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="w-28 h-28 bg-green-500 text-white rounded-full absolute hover:bg-green-400 shadow-xl shadow-black"
            style={{ transform: 'rotate(240deg) translate(120px) rotate(-240deg)' }}
            onClick={() => setColor("green")}
          >
            Green
          </button>
        </div>
      </div>
    </>
  )
}

export default App
