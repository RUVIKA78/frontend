import React from 'react'
import Button from './Button'

const Card = (props) => {
  return (
    <div>
      <div className=' w-64 p-5 bg-gray-100 flex flex-col justify-center items-center  border-[1px] border-slate-400 rounded-lg '>

        <img className='h-48 w-48 rounded-lg bg-red-300'          src="" alt="profile" />
        <p>{props.fullName}</p>
        <p>{props.post}</p>
        <p>{props.department}</p>
        <p>{props.salary}</p>
        <p>{props.yearOfJoining} </p>

        <div className='flex gap-5 mt-8 justify-between'>
        <Button name="Edit" />
        <Button name="Delete"/>
        </div>

      </div>
    </div>
  )
}

export default Card