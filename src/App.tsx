import { useState } from 'react'
import InputField from './components/InputField'
import './App.css'

function App() {
//  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState('');

  return (
    <div className='p-4'>
      <h1 className='text-2xl mb-4'>Vite + React</h1>
      <InputField
        value={inputValue}
        onChange={setInputValue}
        width='w-1/2'
        height='h-12'
      />
      <p className="mt-4">
        You entered: {inputValue}
      </p>
    </div>
  )
}

export default App
