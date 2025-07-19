import React from "react";
import Section2_1 from "./subSections/Section2_1";
import Section2_2 from "./subSections/Section2_2";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Section2 = () => {
      const [showFirst, setShowFirst] = useState(true);


    return (
       <div className="w-full h-screen border">
      <AnimatePresence mode="wait">
        {showFirst ? (
          <motion.div
            key="first"
            className="h-screen  flex items-center justify-center "
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            onClick={() => setShowFirst(false)}
          >
            <Section2_1 />
          </motion.div>
        ) : (
          <motion.div
            key="second"
            className="h-screen flex items-center justify-center "
            initial={{  opacity:0 }}
            animate={{   opacity:1  }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            //onClick={() => setShowFirst(true)}
          >
           <Section2_2 />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    );
};

export default Section2;
