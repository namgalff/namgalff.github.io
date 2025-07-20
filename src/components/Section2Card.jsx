import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Section2Card = ({index}) => {
   const text=["branding","w/e else","w/e else2","w/e else3","w/e else4","w/e else5","w/e else6"]

 
  return (
     
     
     
     
    <div className='  overflow-hidden w-[80vw]  font-gmrkM flex flex-col   bg-white rounded-2xl '>
               <AnimatePresence mode="wait" custom={index}>
          <motion.div
            key={index}
            className={`gap-[3vh] text-[4vw]   overflow-hidden font-gmrkM justify-between flex flex-col  bg-white px-[9%] py-[7%]   `}
            initial={{ x:  "100%" , opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%" , opacity: 0 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
           <p className='opacity-60  font-gmrkB leading-[110%]'>{index}/8 <br/> {text[index]}</p>
            <p className='opacity-[37%] text-[5vw] '>NOS ARENES STRATEGIQUES </p>
            <p className='leading-none text-[3.3vw]  '>UNE AGENCE INNOVANTE COMME <br/>VOUS POUVEZ LE VOIR C’EST<br/> IMPECABLE CHEZ NOUS JE VOUS<br/> LE GARENTI </p>
          </motion.div>
        </AnimatePresence>
    </div>
  )
}

export default Section2Card


