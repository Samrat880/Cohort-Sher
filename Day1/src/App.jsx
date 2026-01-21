import { useState } from 'react'
import Card from './Card'
import Men from './components/Men.jsx'
import Women  from './components/Women.jsx'
import  Navbar  from './components/Navbar.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const user1 = {
    name: "Samrat",
    age: 22,
    city: "Patna",
    Gender: "Male"
  }
  const user2 = {
    name: "Ayasha",
    age: 22,
    city: "Patna",
    Gender: "Female"
  }

  function btnClick(){
    console.log("Button Clicked")
  }

  return (
    <div>
      <Navbar
        title="Samrat"
        color= 'rgb(101, 58, 180)'
        link={["Home", "About", "Account", "Contact"]}
      />
      
      <div className='flex justify-center items-center relative gap-10'>
      <Men />
      <Women/>
      </div>

      <button 
      onClick={btnClick}
      className='active:scale-95 bg-purple-600 text-white text-3xl px-12 py-8 rounded-lg mt-5 ml-5 font-bold hover:bg-purple-800 transition-all '
      >
        Click Me
      </button>

    </div>
  );

}

export default App
