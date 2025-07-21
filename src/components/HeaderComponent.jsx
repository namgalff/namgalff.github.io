import React from "react";
import { useEffect, useState, useRef } from "react";
import { Link as ScrollLink, Element } from "react-scroll";

import { motion } from "framer-motion";

const HeaderComponent = () => {
  const headerLinks = [
    "HOME",
    "QUI SOMME NOUS",
    "CODES",
    "CREATIONS",
    "CONTACT",
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [el, setEl] = useState(null);
  const [boxStyle, setBoxStyle] = useState({
    opacity: [0, 0.2, 1],
  });
  const linkRefs = useRef([]);

  useEffect(() => {
    if (linkRefs.current[activeIndex]) {
      setEl(linkRefs.current[activeIndex]);
    }
  }, []);

  // useEffect(() => {
  //     if (linkRefs.current[activeIndex]) {
  //         const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = el;
  //         setBoxStyle({
  //             left: offsetLeft - 20,
  //             top: offsetTop - 3,
  //             width: offsetWidth * 3.15,
  //             height: offsetHeight * 1.2,
  //         });
  //     }
  // }, [el]);

  const moveBox = (index) => {
    const el = linkRefs.current[index];
    if (el) {
      const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = el;
      setBoxStyle({
        left: el.offsetLeft - (el.offsetWidth * 0.4 + 20) / 2,
        top: el.offsetTop - 3,
        width: el.offsetWidth * 1.4 + 20,
        height: el.offsetHeight * 1.2,
        opacity: 1,
      });
    }
  };
  return (
    <header className="w-screen md:flex hidden justify-center absolute z-50 mt-[4vh] ">
      <nav className="w-[45%] bg-[#D9D9D9]/15 border rounded-4xl text-[0.9vw] text-white. flex gap-[2vw] justify-around  font-inter   px-[1%]  py-[.78%]">
        {headerLinks.map((item, index) => (
          <div className="flex  border-transparent border-1 rounded-full hover:border-white transition">
            <ScrollLink
              to={item}
              smooth={true}
              duration={600}
              //   key={item}
              //   href={"#"}
              //   ref={(el) => (linkRefs.current[index] = el)}
              className={`relative z-10 transition-all text-white px-[1vw] cursor-pointer`}
              //   onMouseEnter={() => {
              //     moveBox(index);
              //   }}
              //   onMouseLeave={() => {
              //     moveBox(activeIndex);
              //   }}
              //   onClick={() => {
              //     setActiveIndex(index);
              //     moveBox(index);
              //   }}
            >
              {item}
            </ScrollLink>
          </div>
        ))}
        {/* {el && (
          <motion.div
            className="absolute border-1 border-white rounded-4xl  pointer-events-none z-0
                    hidden
                    "
            animate={boxStyle}
            initial={{
              left: el.offsetLeft - (el.offsetWidth * 0.4 + 20) / 2,
              top: el.offsetTop - 3,
              width: el.offsetWidth * 1.4 + 20,
              height: el.offsetHeight * 1.1,
              opacity: 0,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          />
        )} */}
      </nav>
    </header>
  );
};

export default HeaderComponent;
