import React from "react";
import logo from "../assets/logo.png";
import coin from "../assets/imageCoin.png";
import { motion } from "framer-motion";
import { useEffect, useState,useRef } from "react";
import bg from "../assets/bgSection1.png"

const Section1 = () => {
  


  const [position, setPosition] = useState({ x: 0, y: 0 });
   useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
   // window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
    return (
        <div className="w-screen h-[100vh] flex flex-col items-center justify-center text-white bg-black  ">
            <img src={bg} className="  absolute  z-0 top-[0%] w-[86vw]"/>
             <motion.img
          src={coin} 
          alt="cursor"
          className="w-[10vw] absolute top-0 left-0 hidden"
          initial={false}
          animate={{
            x: position.x - 12 , // center image
            y: position.y - 12,
            rotateY: [0, 360],

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
            <div className="flex flex-col justify-center  items-center mb-[-7%]  z-20">
                
                <img src={logo} className="w-[5vw] " />
                <p className="font-gmrkB text-[4vw]">TIME SELLER</p>
                <p className="font-gmrkM text-[1vw] mt-[2vh]">
                    we don t do it like others{" "}
                </p>
                <p className="font-gmrkL text-[01vw]  w-[70%] leading-tight text-center mt-[1%] opacity-80">
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
