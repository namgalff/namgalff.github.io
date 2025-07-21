import React from 'react'
import card from "../assets/imageProjectHolder.png"
import { motion, AnimatePresence,useAnimate } from "framer-motion";
import { useState } from "react";
import ProjectCards from '../components/ProjectCards';
const Section4 = () => {
  const [showButton, setShowButton] = useState(true);
  const [scope, animate] = useAnimate()
  const [scope1, animate1] = useAnimate()
  const [scope2, animate2] = useAnimate()

  const showCards = ()=>{
      setShowButton(false);

  animate(scope.current, { left: "5vw" }, {
  duration: 3,
  ease: [.01,.8,.52,.95]
});
 animate1(scope1.current, { left: "0vw" }, {
  duration: 3,
  ease: [.01,.8,.52,.95]
});
 animate2(scope2.current, { left: "-5vw" }, {
  duration: 3,
  ease: [.01,.8,.52,.95]
});




}

  return (
    <div className='bg-black z-0  h-[100vh] relative flex items-center overflow-hidden justify-center  w-screen text-white   '>
          {showButton && (
  <div
    className="text-black w-[11vw] h-[11vw] flex justify-center items-center cursor-pointer bg-white rounded-full"
    onClick={showCards}
  >
    <p className='w-[80%] text-center leading-tight'>CLIQUEZ ICI</p> 
  </div>
)}

          
          



          <div className='absolute overflow-hidden w-screen top-0 left-[-100vw] flex gap-[2vw] items-center justify-center' ref={scope}>
           <ProjectCards />
             <ProjectCards />
               <ProjectCards />
                 <ProjectCards />
                   <ProjectCards />
                     <ProjectCards />
          </div>
           <div className='absolute overflow-hidden w-auto flex left-[100vw] gap-[2vw] items-center justify-center' ref={scope1}>
           <ProjectCards />
             <ProjectCards />
               <ProjectCards />
                 <ProjectCards />
                   <ProjectCards />
                     <ProjectCards />
          </div>
              <div className='absolute overflow-hidden w-screen  left-[-100vw] bottom-0 flex gap-[2vw] items-center justify-center' ref={scope2}>
           <ProjectCards />
             <ProjectCards />
               <ProjectCards />
                 <ProjectCards />
                   <ProjectCards />
                     <ProjectCards />
          </div>

          
          
    </div>
  )
}

export default Section4