import { useState } from 'react'
import './App.css'
import ControlledInput from './components/ControlledInput';

function App() {
  const [text, setText] = useState<string>("veselý koník");

  return (
    <>
      <ControlledInput value={text} inputAction={setText} />
      <p>{text}</p>
    </>
  )
}

export default App
