import React from 'react'

export const Header = () => {
  return (
    <div className='fixed top-0 left-0 w-screen h-[70vh] z-0'>
        <h1 className='z-10 relative w-full h-max text-center text-8xl font-bold text-white/50'>Calculator</h1>
        <div className='z-0 absolute top-0 left-0 w-full h-full bg-gradient-to-b from-orange-600/75 via-blue-600/75 to-blue-100/5'></div>
    </div>
  )
}
