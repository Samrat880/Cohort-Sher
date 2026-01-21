import React from 'react'
import { useState } from 'react'

function Search() {

    const [Gender, setGender] = useState('Male')

    function changeGender (){
        if( Gender == 'Male' ){
            setGender('Female')
        }else{
            setGender('Male')
        }
    }

  return (
    <div className=' flex gap-12 p-6 '>

        <h1 className=' text-3xl font-semibold '> {Gender} </h1>
        <button onClick={changeGender}
         className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded">
            Change Gender
        </button>
        {/* <div>
        <input type="radio" name='gender' id='male' />
        <label htmlFor="Male">Male</label>
        </div>

        <div>
        <input type="radio" name='gender' id='Female' />
        <label htmlFor="Female">Female</label>
        </div> */}
    </div>
  )
}

export default Search