import React from "react";
import Section3Card from "../components/Section3Card";
import Section3CardsMobile from "../components/Section3CardsMobile";
import { useState } from "react";
const Section3 = () => {
  const [tab, setTab] = useState(0);
  const clickTab = (id) => {
    return () => setTab(id);
  };
  return (
    <div
      className="flex flex-col mt-[5vh] items-center w-screen   h-[100vh] py-[2%] text-white font-gmrkM justify-around z-[100] "
      name="CODES"
    >
      <div className="mb-[10vh] font-gmrkB text-[9vw]  text-left lg:text-[4vw] w-[78%]   leading-[100%] lg:w-[50%]">
        NOS CODES D’EXCELLENCE
      </div>
      <div className="hidden lg:block w-[60vw] ">
        <div className="text-white flex text-[1.2vw]  justify-items-start  ">
          <p
            className={`cursor-pointer w-[20%] text-center py-[1%] rounded-t-3xl ${
              tab === 0 ? "bg-white/25" : ""
            }`}
            onClick={clickTab(0)}
          >
            {" "}
            LES 3U{" "}
          </p>
          <p
            className={`cursor-pointer w-[20%] text-center py-[1%] rounded-t-3xl ${
              tab === 1 ? "bg-white/25" : ""
            }`}
            onClick={clickTab(1)}
          >
            LES 4C{" "}
          </p>
          <p
            className={`cursor-pointer w-[40%] text-center py-[1%] rounded-t-3xl ${
              tab === 2 ? "bg-white/25" : ""
            }`}
            onClick={clickTab(2)}
          >
            IQ ENGAGEMENT QUALITY{" "}
          </p>
          <p
            className={`cursor-pointer w-[20%] text-center py-[1%] rounded-t-3xl ${
              tab === 3 ? "bg-white/25" : ""
            }`}
            onClick={clickTab(3)}
          >
            WYSIWYG{" "}
          </p>
        </div>
        <div className=" clip-custom h-[30vw] flex w-full justify-center rounded-4xl py-[7%] px-[3%]   bg-white/25  rounded-t-none   ">
          <Section3Card index={tab} />
        </div>
      </div>

      <div className="lg:hidden ">
        <Section3CardsMobile />
      </div>
    </div>
  );
};

export default Section3;
