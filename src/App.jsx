import { useCallback, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(16)
  const [numberAllowed, setNumberAllowed] = useState(true)
  const [characterAllowed, setCharacterAllowed] = useState(true)
  const [uppercaseAllowed, setUppercaseAllowed] = useState(true)
  const [password, setPassword] = useState('')


  const [passwordGeneraor] = useCallback(()=> {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) {
      str =+ "0123456789"
    }
    if (characterAllowed) {
      str += "!@#$%^&*()_+-=[]{}|~"
    }
    if (uppercaseAllowed) {
      str =+ "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }

    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass = str.charAt(char)

    }

    setPassword(pass)


  }, [length, numberAllowed, characterAllowed, , uppercaseAllowed, setPassword]) 

  return (
    <>
      <div className='w-full max-w-md mx-autop shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
      test
      </div>
    </>
  )
}

export default App
