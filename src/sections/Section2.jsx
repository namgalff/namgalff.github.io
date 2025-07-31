import React from "react";
import Section2_1 from "./subSections/Section2_1";
import Section2_2 from "./subSections/Section2_2";
import arrow from "../assets/iconArrowRight.png";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Section2 = () => {
  const [showFirst, setShowFirst] = useState(true);

  return (
    <motion.div className="w-full mb-[5vh] h-screen md:h-fit border" layout name='QUI SOMME NOUS'>
      <AnimatePresence mode="wait">
        {showFirst ? (
          <>
            <motion.div
              key="first"
              className="h-screen md:h-[100vh]  flex items-center justify-center cursor-pointer "
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              onClick={() => setShowFirst(false)}
            >
              <Section2_1 />
              <img
                src={arrow}
                className="absolute hidden lg:block right-[5%] w-[4vw] cursor-pointer z-50"
              />
            </motion.div>
          </>
        ) : (
          <motion.div
            key="second"
            className="h-screen flex items-center justify-center "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            //onClick={() => setShowFirst(true)}
          >
            <Section2_2 />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Section2;
