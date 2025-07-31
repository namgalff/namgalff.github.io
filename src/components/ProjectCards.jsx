import { useState } from "react";
import { motion } from "framer-motion";
import img from "../assets/imageProjectHolder.png"

export default function ExpandingCard({image}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHovered(false)}
      onHoverEnd={() => setHovered(false)}
      // animate={{ width: hovered ? "30vw" : "15vw" }} 
      transition={{ type: "tween", duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className=" flex flex-nowrap relative items-center md:h-[15vw] h-[30vw] md:w-[15vw] w-[30vw] min-w-[30vw] md:min-w-[15vw]  bg-white/25  border border-white text-white z-80   p-3 rounded-4xl overflow-hidden"
    >
      <img
        src={image}
        alt="Image"
    
        className="md:w-[14vw] w-full h-full  object-cover shrink-0 rounded-3xl "
      />

      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="z-80  text-sm "
      >
        <p className="">CONTENT</p>
      </motion.div> */}
    </motion.div>
  );
}
