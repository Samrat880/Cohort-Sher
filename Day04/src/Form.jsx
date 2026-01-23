import React, { useState } from 'react'

function Form() {

    const [name, setname] = useState('');
    
        const [allUser, setallUser] = useState([])
    
        const submitHandler = (e) => {
            e.preventDefault()
    
            const newAllUsers = ([...allUser,name])

            console.log(newAllUsers)
    
            setallUser(newAllUsers)
    
            setname('');
        }


  return (
    <div>
        <form onSubmit={ (e) => {
            submitHandler(e);
        }
             } className=' flex flex-col gap-4 w-96 mx-auto mt-10 '>
            <input
             onChange={(e) => {
                setname(e.target.value)
            }} 
             type="text"
              placeholder=' Enter your name '
               className=' border border-gray-300 p-2 rounded '/>


            <button type="submit" className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded '> Submit </button>

        </form>
        {allUser.map( (user,index) => {

            return <h1 key={index}> {user} </h1>
        })}
    </div>
  )
}

export default Form