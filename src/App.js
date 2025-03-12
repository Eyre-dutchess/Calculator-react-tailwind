import React from 'react'

import { BtnSec } from "./component/BtnSec";
import { Header } from "./component/Header";
import { useGlobalContext } from './context';

function App() {
  const {prevOperand, curOperand, operation, formatInt} = useGlobalContext()
  return (
    <div className='w-full max-w-[2520px] flex items-center justify-center mx-auto min-h-[100vh] px-[calc(1vw_+_0.5em)] md:px-[calc(1.5vw_+_0.75em)] lg:px-[calc(2vw_+_1em)] xl:px-[calc(2.5vw_+_1.5em)]'>
      <Header />
      <div className='relative z-50 flex items-center justify-center  w-full h-[55vh] sm:h-[65vh] md:h-[70vh]'>
        <div className='p-2 w-2/3 h-full max-w-[500px] rounded-md bg-blue-100/25 shadow-md shadow-blue-800/25 aspect-4/5 md:aspect-[6/7] '>
          <div className='w-full h-full p-1 rounded-md flex flex-col gap-3 bg-blue-100/25 shadow-sm shadow-blue-200/50'>
              <div className='w-full h-[25%] relative rounded-md shadow-inner shadow-blue-800/50 bg-blue-800/25 text-blue-100  flex flex-col '>
                <div className=' w-full h-[45%] flex items-end justify-end pr-4  text-lg md:text-lg opacity-75'>{prevOperand?`${formatInt(prevOperand)}${operation}`:""}</div>
                <div className='absolute bottom-0 left-0  w-full h-[50%] flex items-center justify-end pr-4 text-3xl md:text-3xl'>{curOperand?`${formatInt(curOperand)}`:""}</div>
              </div>
            <BtnSec />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
