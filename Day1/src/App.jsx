import { useState } from 'react'
import Card from './Card'
import  Navbar  from './components/Navbar.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    < div>
      <Navbar/>
      <h1>🐱 Cat Card</h1>
      <p>Here's a cute cat card component!</p>

      <Card />
    </div>
  )

}

export default App
