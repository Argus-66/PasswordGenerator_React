import { useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(16)
  const [numberAllowed, setNumberAllowed] = useState(true)
  const [characterAllowed, setCharacterAllowed] = useState(true)
  const [uppercaseAllowed, setUppercaseAllowed] = useState(true)
  const [specialCharacterAllowed, setSpecialCharacterAllowed] = useState(true)
  const [password, setPassword] = useState('')


  const [passwordGeneraor] = () => {}

  return (
    <>
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>
    </>
  )
}

export default App
