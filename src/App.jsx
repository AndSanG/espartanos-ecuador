import { useState } from 'react'
import reactLogo from './assets/ripples.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a  target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2>Loading ...</h2>
      <h1>ESPARTANOS ECUADOR</h1>
    </>
  )
}

export default App
