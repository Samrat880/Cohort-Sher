import React, { useState } from 'react'

function Car() {

    const [name, setname] = useState('');

    const [allUser, setallUser] = useState([])

    const submitHandler = (e) => {
        e.preventDefault()

        const newAllUsers = [...allUser]
        newAllUsers.push(name)

        setallUser(newAllUsers)

        setname('');
    }

  return (
    <div>



    </div>
  )
}

export default Car