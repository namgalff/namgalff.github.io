import React from 'react'
import EventsCarouselle from '../components/EventsCarouselle'

const aha = () => {
  return (
    <div className='h-screen  text-white w-screen flex flex-col justify-center  gap-[10vh] lg:gap-0  lg:justify-around  items-left z-30  p-[5%] '>
        <div className='flex flex-col items-left text-left gap-[4vh]'>
            <div className=''>
                <h1 className='font-gmrkB text-[11vw] lg:text-[5vw]'>NOS EVENTS </h1>
                <p className='font-gmrkL text-[4vw] lg:text-[1.5vw]'>WHAT YOU SEE IS WHAT YOU GET </p>
            </div>
            < p className='text-[4vw] w-[90%] lg:text-[1vw] lg:leading-7'>Nous créons des expériences immersives qui marquent les esprits. Chaque événement est pensé pour renforcer le lien entre la marque et son public, avec impact et émotion.
            </p>
        </div>
        <div>
            <EventsCarouselle/>
        </div>
       
   
         


            


    </div>
  )
}

export default aha