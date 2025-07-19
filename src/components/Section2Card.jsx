import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Section2Card = ({index}) => {
   const text=["branding","w/e else","w/e else2","w/e else3","w/e else4","w/e else5","w/e else6"]

 
  return (
     
     
     
     
    <div className='relative  overflow-hidden font-gmrkM flex flex-col   items-start w-[40vw] bg-white rounded-3xl  '>
               <AnimatePresence mode="wait" custom={index}>
          <motion.div
            key={index}
            className={`gap-[3vh]   overflow-hidden font-gmrkM justify-between flex flex-col items-start w-[40vw] bg-white px-[7%] py-[5%] text-[1.3vw] rounded-3xl  text-justify`}
            initial={{ x:  "100%" , opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%" , opacity: 0 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
           <p className='opacity-60 text-[2.2vw] font-gmrkB leading-[110%]'>{index}/8 <br/> {text[index]}</p>
            <p className='opacity-[37%]'>NOS ARENES STRATEGIQUES </p>
            <p className='w-[80%] leading-[100%]   justify-last'>UNE AGENCE INNOVANTE COMME <br/>VOUS POUVEZ LE VOIR C’EST<br/> IMPECABLE CHEZ NOUS JE VOUS<br/> LE GARENTI </p>
          </motion.div>
        </AnimatePresence>
    </div>
  )
}

export default Section2Card


