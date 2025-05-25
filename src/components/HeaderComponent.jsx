import React from 'react'
import { useEffect, useState,useRef } from "react";
import { motion } from "framer-motion";

const HeaderComponent = () => {
    const headerLinks = ["Home",'Qui somme nous','Codes','Creations','Contact']
    const [activeIndex, setActiveIndex] = useState(4);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [boxStyle, setBoxStyle] = useState({ left: 0, top: 0, width: 0, height: 0 });
  const linkRefs = useRef([]);
    useEffect(() => {
    if (linkRefs.current[activeIndex]) {
      const el = linkRefs.current[activeIndex];
      const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = el;
      setBoxStyle({
        left: offsetLeft ,
        top: offsetTop ,
        width: offsetWidth*2,
        height: offsetHeight*2,
      });
    }
  }, []);
  
  const moveBox = (index) => {
    const el = linkRefs.current[index];
    if (el) {
      const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = el;
      setBoxStyle({
        left: offsetLeft - 5 ,
        top: offsetTop - 3,
       width: offsetWidth*1.15,
        height: offsetHeight*1.15,
      });
    }
  };
  return (
    <header className='w-screen flex justify-center  '>
        <nav className='w-[60%] bg-[#D9D9D9] border rounded-4xl text-white. flex gap-[2vw] justify-between  font-inter mt-[3vh]  px-[5%]  py-[1%]'>
             {headerLinks.map((item,index) => (
              <a
                key={item}
                href={'#'}
              
                 ref={(el) => (linkRefs.current[index] = el)}
            className={`relative z-10 transition-all ${
              activeIndex === index ? "text-black" : "text-gray-600"
            }`}
              onMouseEnter={() => {
              setHoveredIndex(index);
              moveBox(index);
            }}
            onMouseLeave={() => {
              setHoveredIndex(null);
              moveBox(activeIndex);
            }}
            onClick={() => {
              setActiveIndex(index);
              moveBox(index);
            }}
          
              >
                {item}
              </a>
            ))}
             <motion.div
          className="absolute border-2 border-black rounded-md pointer-events-none z-0"
          animate={boxStyle}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        />
        </nav>
         

    </header>
  )
}

export default HeaderComponent