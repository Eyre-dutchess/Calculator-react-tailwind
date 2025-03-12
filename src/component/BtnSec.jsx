import React from 'react'
import { Button } from './Button'
import { useGlobalContext } from '../context'

export const BtnSec = () => {
  const {appendNum, clear, delDigit, chooseOperation, compute} = useGlobalContext()

  const handleClick = (e)=>{
    e.stopPropagation()
    const target = e.target 
    const fnsLabel = target.ariaLabel 

      if(fnsLabel === "clear-btn"){
        clear()
      }
      if(fnsLabel === "del-btn"){
        delDigit()
      }
      if(fnsLabel === "equal-btn"){
        compute()
      }
      if(fnsLabel === "operation-btn"){
        chooseOperation(target.innerText)
      }
      if(fnsLabel === "number-btn"){
        appendNum(target.innerText)
      }  
  }
  
  return (
    <div className=' w-full h-full rounded-md shadow-inner shadow-blue-800/25'>
        <div className='w-full h-full grid grid-cols-4 grid-rows-5 gap-3 p-2 md:gap-4 md:p-3'>
            <Button label="A/C" ariaLabel="clear-btn" gridSpan="col-span-2" onClick={handleClick}/>
            <Button label="DEL" ariaLabel="del-btn"  onClick={handleClick}/>
            <Button label="+" ariaLabel="operation-btn"  onClick={handleClick}/>
            <Button label="1" ariaLabel="number-btn"  onClick={handleClick}/>
            <Button label="2" ariaLabel="number-btn"  onClick={handleClick}/>
            <Button label="3" ariaLabel="number-btn"  onClick={handleClick}/>
            <Button label="-" ariaLabel="operation-btn"  onClick={handleClick}/>
            <Button label="4" ariaLabel="number-btn"  onClick={handleClick}/>
            <Button label="5" ariaLabel="number-btn"  onClick={handleClick}/>
            <Button label="6" ariaLabel="number-btn"  onClick={handleClick}/>
            <Button label="x" ariaLabel="operation-btn"  onClick={handleClick}/>
            <Button label="7" ariaLabel="number-btn"  onClick={handleClick}/>
            <Button label="8" ariaLabel="number-btn"  onClick={handleClick}/>
            <Button label="9" ariaLabel="number-btn"  onClick={handleClick}/>
            <Button label="÷" ariaLabel="operation-btn"  onClick={handleClick}/>
            <Button label="." ariaLabel="number-btn"  onClick={handleClick}/>
            <Button label="0" ariaLabel="number-btn" gridSpan="col-span-2" onClick={handleClick}/>
            <Button label="=" ariaLabel="equal-btn"  onClick={handleClick}/>
        </div>
    </div>
  )
}
