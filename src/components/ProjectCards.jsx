import { useState } from "react";
import { motion } from "framer-motion";
import img from "../assets/imageProjectHolder.png"

export default function ExpandingCard() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{ width: hovered ? "30vw" : "15vw" }} 
      transition={{ type: "tween", duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className=" flex items-center h-[30vh]  bg-white/25  border border-white text-white z-80   p-3 rounded-4xl overflow-hidden"
    >
      <img
        src={img}
        alt="Image"
    
        className="w-[14vw] h-full  object-cover shrink-0 rounded-3xl "
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="z-80  text-sm "
      >
        <p >hehehe</p>
      </motion.div>
    </motion.div>
  );
}
