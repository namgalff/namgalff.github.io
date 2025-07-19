import React from 'react'
import Section3Card from '../components/Section3Card'
import { useState } from 'react'
const Section3 = () => {
        const [tab, setTab] = useState(0)
        const clickTab = (id)=>{
                return ()=>setTab(id)
        }
  return (
  
        <div className='flex flex-col items-center w-screen  h-screen py-[2%] text-white font-gmrkM justify-around'>
                <div className='font-gmrkB text-[4vw] text-center  leading-[100%] w-[50%]'>
                       NOS CODES D’EXCELLENCE 
                </div>
                <div className=' w-[60vw] '>
                <div className='text-white flex text-[1.2vw]  justify-items-start  '>
                        <p className={`cursor-pointer w-[20%] text-center py-[1%] rounded-t-3xl ${tab === 0 ? 'bg-white/12' : ''}`}  onClick={clickTab(0)}> LES 3U </p>
                        <p className={`cursor-pointer w-[20%] text-center py-[1%] rounded-t-3xl ${tab === 1 ? 'bg-white/12' : ''}`} onClick={clickTab(1)}>LES 4C </p>
                        <p className={`cursor-pointer w-[20%] text-center py-[1%] rounded-t-3xl ${tab === 2 ? 'bg-white/12' : ''}`} onClick={clickTab(2)}>LES 3 SINGES </p>
                        <p className={`cursor-pointer w-[40%] text-center py-[1%] rounded-t-3xl ${tab === 3 ? 'bg-white/12' : ''}`} onClick={clickTab(3)}>IQ ENGAGEMENT QUALITY </p>
                </div>
                <div className=' clip-custom h-[60vh] flex w-full justify-center rounded-4xl py-[7%] px-[3%]  bg-white/12  rounded-t-none   '>
                   <Section3Card index={tab}/>

                </div>
            </div>
    
            

    </div>
  )
}

export default Section3