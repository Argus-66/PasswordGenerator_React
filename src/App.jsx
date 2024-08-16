import { useCallback, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(16);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [characterAllowed, setCharacterAllowed] = useState(true);
  const [uppercaseAllowed, setUppercaseAllowed] = useState(true);
  const [password, setPassword] = useState("");

  const passwordGeneraor = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str = +"0123456789";
    }
    if (characterAllowed) {
      str += "!@#$%^&*()_+-=[]{}|~";
    }
    if (uppercaseAllowed) {
      str = +"ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = str.charAt(char);
    }

    setPassword(pass);
  }, [
    length,
    numberAllowed,
    characterAllowed,
    ,
    uppercaseAllowed,
    setPassword,
  ]);

  return (
    <>
      <div className="w-full max-w-xl mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-6 my-5 rounded-lg"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
        </div>
      </div>
    </>
  );
}

export default App;
