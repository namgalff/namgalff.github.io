import React from "react";
import card from "../assets/imageProjectHolder.png";
import { motion, AnimatePresence, useAnimate } from "framer-motion";
import { useState } from "react";
import ProjectCards from "../components/ProjectCards";
const Section4 = () => {
  const [showButton, setShowButton] = useState(true);
  const [scope, animate] = useAnimate();
  const [scope1, animate1] = useAnimate();
  const [scope2, animate2] = useAnimate();

  const showCards = () => {
    setShowButton(false);

    animate(
      scope.current,
      { left: "-10vw" },
      {
        duration: 3,
        ease: [0.01, 0.8, 0.52, 0.95],
      }
    );
    animate1(
      scope1.current,
      { left: "0vw" },
      {
        duration: 3,
        ease: [0.01, 0.8, 0.52, 0.95],
      }
    );
    animate2(
      scope2.current,
      { left: "-10vw" },
      {
        duration: 3,
        ease: [0.01, 0.8, 0.52, 0.95],
      }
    );
  };

  return (
    <div className="bg-black    md:h-[55vw] h-[105vw] relative flex items-center overflow-hidden justify-center  w-screen text-white   " name="CREATIONS">
      {showButton && (
        <div
          className="text-black lg:w-[11vw] z-[100] lg:h-[11vw] w-[30vw] h-[30vw] flex justify-center items-center cursor-pointer bg-white rounded-full"
          onClick={showCards}
        >
          <p className="w-[80%]  text-center leading-tight ">CLIQUEZ ICI</p>
        </div>
      )}

      <div
        className="absolute overflow-x-auto w-[110vw] md:w-[110vw] top-0 left-[-110vw] flex flex-nowrap flex-row-reverse gap-[2vw] items-end px-[2vw] py-[3vw] no-scrollbar"
        ref={scope}
      >
        <ProjectCards image={"/images/cc1.jpg"} />
        <ProjectCards image={"/images/cc2.jpg"} />
        <ProjectCards image={"/images/cc3.jpg"} />
        <ProjectCards image={"/images/fx1.jpg"} />
        <ProjectCards image={"/images/fx2.jpg"} />
        <ProjectCards image={"/images/fx3.jpg"} />
        <ProjectCards image={"/images/qua1.jpg"} />
        <ProjectCards image={"/images/qua2.jpg"} />
      </div>

      <div
        className="absolute overflow-x-auto w-[110vw] md:w-[110vw] flex flex-nowrap left-[110vw] gap-[2vw] items-center px-[2vw] py-[3vw] no-scrollbar"
        ref={scope1}
      >
        <ProjectCards image={"/images/ifr1.jpg"} />
        <ProjectCards image={"/images/ifr2.jpg"} />
        <ProjectCards image={"/images/ifr3.jpg"} />
        <ProjectCards image={"/images/kla1.jpg"} />
        <ProjectCards image={"/images/kla2.jpg"} />
        <ProjectCards image={"/images/kla3.jpg"} />
        <ProjectCards image={"/images/qua3.jpg"} />
        <ProjectCards image={"/images/taa1.jpeg"} />
      </div>
      <div
        className="absolute overflow-x-auto w-[110vw] md:w-[110vw] bottom-0 left-[-110vw] flex flex-nowrap flex-row-reverse gap-[2vw] items-end px-[2vw] py-[3vw] no-scrollbar "
        ref={scope2}
      >
        <ProjectCards image={"/images/max1.jpg"} />
        <ProjectCards image={"/images/max2.jpg"} />
        <ProjectCards image={"/images/max3.jpg"} />
        <ProjectCards image={"/images/num1.png"} />
        <ProjectCards image={"/images/num2.png"} />
        <ProjectCards image={"/images/num3.png"} />
        <ProjectCards image={"/images/taa2.jpeg"} />
        <ProjectCards image={"/images/taa3.jpeg"} />
      </div>
    </div>
  );
};

export default Section4;
