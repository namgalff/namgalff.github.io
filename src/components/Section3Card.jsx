import React from 'react'
import { motion, AnimatePresence } from "framer-motion";

const Section3Card = ({index}) => {
  const text = ["3U","4C","3S","IQ"]
  const tet = ["LES 3U","LES 4C","LES 3 SINGES","QUALITY "]
  return (
     <div className='w-[100%] relative  overflow-hidden   items-start  '>
         <AnimatePresence mode="wait" custom={index}>
    <motion.div className='relative flex w-[100%] justify-center items-center' initial={{ x:  "100%" , opacity: 0 }}
    key={index}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%" , opacity: 0 }}
            transition={{ type: "tween", duration: 0.2 }}>
       
      
       <div className=' text-[15vw] opacity-55  font-gmrkB  w-[45%] text-center mr-[-1%] '>{text[index]}</div>
                    <div className=' flex flex-col justify-center  w-[45%] '>
                            <p className='text-[4vw] font-gmrkB mb-[4%] mt-[-9%]'>LES 3U</p>
                            <p className='text-[1.3vw] opacity-55 mb-[3%]'>c’est quoi en vrai?</p>
                            <p className='justify-last text-[1.2vw] leading-[100%] '>UNE AGENCE  INNOVANTE COMME <br/> VOUS POUVEZ LE VOIR C’EST <br/> IMPECABLE CHEZ NOUS JE VOUS <br/> LE GARENTI</p>

                    </div>
    </motion.div>
    </AnimatePresence>
    </div>
  )
}

export default Section3Card