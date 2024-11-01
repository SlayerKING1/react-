import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(6)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const numberRef = useRef(null)


  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvewxyz"
    if (numberAllowed) {
      str += "0123456789"
    }
    if (charAllowed) {
      str += "!@#$%^&*()_+=-[]{};':\"\\|,.<>/?"
    }
    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    numberRef.current.select()
  }

  useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, charAllowed])
  return (
    <>
      <h1 className='bg-cyan-500 flex justify-center'>Navigation</h1>
      <div className='flex flex-col w-96 ml-52 gap-5 mt-10 justify-center gap-x-10'>
        <h1 className='text-3xl  text-orange-600 font-bold '>
          Password Generator
        </h1>
        <div className='flex shadow rounded-lg overflow-hidden '>
          <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly ref={numberRef}/>
          <button onClick={copyPasswordToClipboard} className='outline-none bg-orange-600 text-black px-3 py-1 shrink-0'>
            Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input className='cursor-pointer ' type="range" min={6} max={100} value={length} onChange={(e) => setLength(e.target.value)} name="" id="" />
            <label htmlFor="length">Length : {length}</label>
          </div>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }}
            type="checkbox"
            name="" id="" />
          <label htmlFor="numberAllowed">Include Numbers</label>

          <div className='flex items-center gap-x-1'>
            <input
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
              type="checkbox"
              name="" id="" />
            <label htmlFor="charAllowed">Include Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
