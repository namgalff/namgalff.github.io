import React from "react";
import logo from "../assets/logo.png";
import coin from "../assets/imageCoin.png";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import bg from "../assets/bgSection1.png";

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
    <div className="w-screen h-[100vh]  md:h-[110vh] flex flex-col items-center justify-center text-white bg-black  " name='HOME'>
      <div className="h-[20vh] flex w-full"></div>
      <img
        src={bg}
        className="  absolute  z-0 top-[8%] md:top-[0%] w-[90vw] md:w-[80vw]"
      />
      {/* <motion.img
        src={coin}
        alt="cursor"
        className="w-[10vw] absolute top-0 left-0 "
        initial={false}
        animate={{
          x: position.x - 12, // center image
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
      /> */}
      <div className=" h-full md:w-full mt-[20%] md:mt-[0%] flex flex-col gap-[4vh] md:gap-0 items-center mb-[-7%] md:mb-0 md:pt-[25vh] z-20">
        <img src={logo} className=" w-[22vw] md:w-[8vw]  md:mb-[1vh]" />
        <p className="font-gmrkB text-[12vw] md:text-[4vw] w-[60%] md:w-[40%] text-center leading-none mt-[10%] md:mt-[0%]">
          TIME SELLER
        </p>
        <p className="font-gmrkM text-[3.5vw] md:text-[1vw] w-[40%] md:w-[30%] text-center  mt-[2vh]">
         Car chaque seconde compte.{" "}
        </p>
        <p className="font-gmrkL text-[4vw] md:text-[0.8vw]  w-[50%] md:w-[30vw] leading-tight text-center mt-[1%] opacity-80 ">
          Lorsqu&#39;une personne accorde du temps à une marque, elle y investit déjà une part d&#39;elle meme.
        </p>
        <div className="font-gmrkM cursor-pointer border text-[4vw] md:text-[1vw] md:px-[2vw] md:py-[0.5vw] px-[14%] py-[2%] rounded-4xl mt-[5%] hover:bg-white hover:text-black transition">
          Discutons-en{" "}
        </div>
      </div>
    </div>
  );
};

export default Section1;
