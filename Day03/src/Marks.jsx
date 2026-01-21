import React from 'react'
import { useState } from 'react'

const Marks = () => {

    const [marks, setMarks] = useState([78, 85, 90, 67, 88, 33, 23,12])

    function graceMarks ( ){
        const newMarks = marks.map( function(elm){
            return elm + 5
        })
        setMarks(newMarks)
    }

    const [graceGiven, setgraceGiven] = useState(false)

    function graceMarks(){
        if (!graceGiven) {
            setMarks (marks.map (mark => mark + 5))
            setgraceGiven (true)
        }
    }


  return (
    <div>

        {marks.map((elm,index) => {
            return <h1 key={index} className=' text-2xl font-medium mb-2'>
                Student {index + 1} : {elm}  ({elm >=33 ? 'PASS':'FAIL'})
            </h1>
        })}
        
        <button
        disabled = {graceGiven}
        onClick={graceMarks}
         className=' text-2xl py-2 px-4 bg-red-500 rounded-lg hover:bg-red-700 text-white font-bold mt-4'>
            {graceGiven ? 'Grace Marks Given' : 'Give Grace Marks'}
        </button>

    </div>
  )
}

export default Marks