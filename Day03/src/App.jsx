import React, { useState } from 'react'
import './App.css'
import "./index.css";
import Marks from './Marks';
import Search from './Search';

export const App = () => {

  const [box, setbox] = useState(0)

  const [number, setnumber] = useState(0)

  const btnClick = () => {
   setnumber(number + 1)
  }


  const [User, setUser] = useState('Samrat')

  const changeUser = ()=> {
    setUser('John Doe')
  }

  return (
    <div className="flex justify-center items-center h-screen flex-col gap-5">
      <div>


      <p className=' text-6xl font-bold'>
        {number}
      </p>
    <h1 className="text-4xl  font-bold ">
      APP
    </h1>

    <button onClick={ btnClick }
     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded">
      click me
      </button> 
      </div>
      <div>

        <h1 className=' text-3xl font-semibold mb-4'>
         User : { User }
        </h1>
        
        <button className=' bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-6 rounded'
        onClick={ changeUser }>
          Change User
        </button>
      </div>

      <Marks/>
      <Search/>

      </div>
  )
}

export default App