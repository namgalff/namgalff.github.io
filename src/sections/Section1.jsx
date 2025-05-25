import React from "react";
import logo from "../assets/logo.png";
import coin from "../assets/imageCoin.png";
import { motion } from "framer-motion";
import { useEffect, useState,useRef } from "react";

const Section1 = () => {
  
   const moveBox = (index) => {
    const el = linkRefs.current[index];
    if (el) {
      const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = el;
      setBoxStyle({
        left: offsetLeft,
        top: offsetTop,
        width: offsetWidth,
        height: offsetHeight,
      });
    }
  };

  const [position, setPosition] = useState({ x: 0, y: 0 });
   useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    //window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center text-white bg-black ">
            <div className="fixed inset-0 pointer-events-none z-[9999] cursor-none"></div>
             <motion.img
          src={coin} 
          alt="cursor"
          className="w-[10vw] absolute top-0 left-0"
          initial={false}
          animate={{
            x: position.x - 12 , // center image
            y: position.y - 12,
            rotateY: [0, 0],

          }}
           transition={{
    x: { type: "spring", stiffness: 500, damping: 30 },
    y: { type: "spring", stiffness: 500, damping: 30 },
    rotateY: {
      repeat: Infinity,
      ease: "linear",
      duration: 0.5, 
    },
  }}
        />
            <div className="flex flex-col justify-center items-center border ">
                
                <img src={logo} className="w-[10vw] " />
                <p className="font-gmrkB text-[8vw]">TIME SELLER</p>
                <p className="font-gmrkM text-[2vw]">
                    we don t do it like others{" "}
                </p>
                <p className="font-gmrkL text-[1.5vw] w-[55%] text-center mt-[1%]">
                    Through this guided 3D visit, discover all our various
                    departments in an immersive way.
                </p>
                <div className="font-gmrkM border px-[2%] py-[1.5%] rounded-4xl mt-[5%]">
                    START SAVING TIME NOW{" "}
                </div>
            </div>
          
        </div>
    );
};

export default Section1;
