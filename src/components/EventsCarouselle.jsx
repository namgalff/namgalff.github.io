import React, { useRef, useState, useEffect } from "react";
import { motion,AnimatePresence  } from "framer-motion";
import EventCarouselleItem from './EventCarouselleItem'
import DONGFENG1 from '../assets/DONGFENG1.png'
import DONGFENG2 from '../assets/DONGFENG2.png'
import DONGFENG3 from '../assets/DONGFENG3.png'
import NARDI1 from '../assets/NARDI1.png'
import NARDI2 from '../assets/NARDI2.png'
import IFRUIT1 from '../assets/IFRUIT1.png'
import IFRUIT2 from '../assets/IFRUIT2.png'
import IFRUIT3 from '../assets/IFRUIT3.png'
import PHILIP1 from '../assets/PHILIP1.png'
import PHILIP2 from '../assets/PHILIP2.png'
import HEINEKEN1 from '../assets/HEINEKEN1.png'
import HEINEKEN2 from '../assets/HEINEKEN2.png'
import HEINEKEN3 from '../assets/HEINEKEN3.png'
import HEINEKEN4 from '../assets/HEINEKEN4.png'
import  HISENS1 from   '../assets/HISENS1.png'
import  HISENS2 from   '../assets/HISENS2.png'
import  HISENS3 from   '../assets/HISENS3.png'
import arrow from '../assets/iconArrowRight.png'


const content =[
    {
        client : 'DONGFENG',
        description : ['Aménagement','showroom','1800 M2'],
        domaine : ['Conception','Fabrication'],
        assets : [{type:'image',src:DONGFENG1},{type:'image',src:DONGFENG2},{type:'image',src:DONGFENG3}]
    },
      {
        client : 'HEINEKEN',
        description : ['Lancement AMSTEL','Alger'],
        domaine : ['Conception','Fabrication','hActivation'],
        assets : [{type:'image',src:HEINEKEN1},{type:'image',src:HEINEKEN2},{type:'image',src:HEINEKEN3},{type:'image',src:HEINEKEN4}]
    },
    //   {
    //     client : 'IFRUIT',
    //     description : ['Activation des plages','Alger, Oran, Béjaïa, Annaba, Jijel'],
    //     domaine : ['Conception','Fabrication'],
    //     assets : [{type:'image',src:IFRUIT1},{type:'image',src:IFRUIT2},{type:'image',src:IFRUIT3}]
    // },
      {
        client : 'NARDI',
        description : ['Activation PVD','Électroménager','180M2'],
        domaine : ['Fabrication'],
        assets : [{type:'video',src:'u31qwQUeGuM',thumbnail : NARDI1},{type:'image',src:NARDI2}]
    },
      {
        client : 'PHILIP MORRIS',
        description : ['Aménagement','Alger, Oran, Setif, ','Constantine'],
        domaine : ['Conception','Fabrication'],
        assets : [{type:'image',src:PHILIP1},{type:'image',src:PHILIP2}]
    },
      {
        client : 'HISENS',
        description : ['Activation','campagne TV ','Alger, Oran, Setif, Constantine'],
        domaine : ['Conception','Fabrication','Activation'],
        assets : [{type:'video',src:'u31qwQUeGuM',thumbnail : HISENS1},{type:'video',src:'u31qwQUeGuM',thumbnail : HISENS2},{type:'image',src : HISENS3}]
    }
]
const EventsCarouselle = () => {
  const total = content.length
  const [ContentIndex, setContentIndex] = useState(0)
    const handlePrev = () =>
    setContentIndex((prev) => (prev > 0 ? prev - 1 : total-1));
  const handleNext = () =>
    setContentIndex((prev) => (prev < total - 1 ? prev + 1 : 0));

  return (
    <div className='flex flex-col items-center gap-4 lg:h-[50vh] lg:p-[2%] '>
         <AnimatePresence mode="wait">
      <motion.div
        key={ContentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className=" ml-[10vw]"
      >
        <EventCarouselleItem content={content[ContentIndex]} />
      </motion.div>
    </AnimatePresence>
       <div className="w-screen  flex items-center justify-center gap-2 py-4">
      <img
        className="w-[5vw] lg:w-[2vw]  rotate-180 cursor-pointer"
        src={arrow}
        onClick={handlePrev}
      />
      {Array.from({ length: total }).map((_, i) => (
        <motion.div
          key={i}
          initial={false}
          animate={{
            width: i === ContentIndex ? "15vw" : "4vw",
            backgroundColor: i === ContentIndex ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.25)",
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="h-[1.5vh] rounded-l-full rounded-r-full"
        />
      ))}
      <img
        className="w-[5vw] lg:w-[2vw] cursor-pointer"
        src={arrow}
        onClick={handleNext}
      />
    </div>
    </div>
  )
}

export default EventsCarouselle