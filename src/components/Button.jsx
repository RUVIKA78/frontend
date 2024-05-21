import React from 'react'

const Button = (props) => {
  return (
      <div>
          <button className='bg-yellow-400 font-semibold rounded-lg p-2 text-xl'>{ props.name}</button>

    </div>
  )
}

export default Button