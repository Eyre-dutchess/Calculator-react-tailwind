import React from 'react'

export const Button = ({label,ariaLabel, gridSpan="col-span-1", onClick}) => {
  return (
    <button className={`w-full text-xl sm:text-4xl rounded-md bg-blue-100/95 text-blue-400/75  cursor-pointer scale-105 hover:scale-100 transition
        ${gridSpan} row-span-1  hover:shadow-blue-200/75 hover:-outline-offset-2 sm:hover:-outline-offset-4 outline outline-blue-200/50 -outline-offset-2 sm:-outline-offset-3 shadow-md shadow-blue-800/25 
        `}  aria-label={ariaLabel} onClick={onClick}>
        {label}
    </button>
  )
}
