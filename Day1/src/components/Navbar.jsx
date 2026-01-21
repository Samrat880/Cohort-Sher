import React from 'react'

const Navbar = (props) => {

  return (
    <div style={{background:props.color}} className=  'mb-1 flex items-center justify-between text-white px-6 py-3'>
      <h2>
      {props.title}
      </h2>
      
      <div className='flex gap-9'>
        {props.link.map((item,index) => {
          return <h4 key={index} className='' >{item}</h4>
        })}
      </div>
      </div>
  )
}

export default Navbar