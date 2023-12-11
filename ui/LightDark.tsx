'use client'
import { CiLight } from 'react-icons/ci'
import { BsMoonStars } from 'react-icons/bs'
import { useState,useEffect } from 'react';
import { useMyContext} from '../context/context';

export const LightDark = () => {
  const [nightLight, setnightLight] = useState(2);
  const {setdark,dark} =useMyContext();
  useEffect(() => {
    console.log(dark)
    nightLight === 2 ? setdark(false) : setdark(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nightLight])
  
  return (
    <div 
    onClick={() => nightLight === 2 ? setnightLight(40) : setnightLight(2)}
    className='relative right-0 left-0 top-0 bottom-0 m-auto z-50 w-20 h-[30px]  sm:left-auto sm:right-28 sm:mx-0 drop-shadow-lg' 
   >
      <div className={`w-[70px] border bg-green-400 h-[30px] ${nightLight === 1 ? '  bg-amber-400' : 'bg-cyan-600 '}  rounded-full relative flex justify-between items-center p-2 border border-zinc-700/20  transition-all`}>
        <div
          style={{ left: `${nightLight}px` }}
          className={`absolute top-[1px] left-0 w-[26px] h-[26px] transition-all bg-zinc-50 rounded-full `}>
        </div>

        <BsMoonStars size={17} color='rgb(19, 75, 112)' />
        <CiLight size={23} color='white' />
      </div>
    </div>
  )
}

