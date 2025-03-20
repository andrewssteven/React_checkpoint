import React from 'react'

const Button = ({text, className}) => {
  return (
    <button className={`px-6 py-1 rounded-md cursor-pointer ${className}`}>
        {text}
    </button>
  )
}

export default Button