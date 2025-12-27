import { useState } from 'react'
import Card from './Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=" bg-amber-200 cold-md-6 mx-auto text-center mt-5 p-5 border rounded shadow-lg">
      <h1>🐱 Cat Card</h1>
      <p>Here's a cute cat card component!</p>
      <button onClick={() => setCount(count + 1)}>
        Clicks: {count}
      </button>
;
      <Card />
    </div>
  )

}

export default App
