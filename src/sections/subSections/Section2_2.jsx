import React from "react";
import arrow from "../../assets/iconArrowRightBlack.png";
import Section2Card from "../../components/Section2Card";
import { useState } from "react";
import BottomTextComponent from "../../components/BottomTextComponent";

const Section2_2 = () => {
  const [cardN, setcardN] = useState(0);
  return (
    <div className="bg-[#E5E5E5] h-[100vh] ">
      <div className="w-screen h-[60vh] md:h-screen flex-col md:flex-row flex  mt-[15vh] md:mt-[0vh] items-center justify-around gap-[3vw] md:px-[1vw] -z-20">
        {/* <img
          src={arrow}
          className=" hidden lg:block right-[5%] w-[4vw] cursor-pointer z-50"
          onClick={() => {
            setcardN((l) => l + 1);
          }}
        /> */}

        <div className="w-screen h-[70vh] md:h-[20vw] flex-col md:flex-row flex items-center justify-around gap-[3vw] md:px-[1vw] ">
          <p className="w-[80vw] md:w-full text-right text-outline text-[9vw] md:text-[5vw] font-gmrkB leading-none">
            NOS <br /> ARENES <br /> STRATEGIQUES
          </p>
          <div
            className="z-50 md:h-full"
            onClick={() => {
              setcardN((l) => l + 1);
            }}
          >
            <Section2Card index={cardN} />
          </div>
        </div>
        <img
          src={arrow}
          className="  w-[4vw] md:w-[2vw] md:mr-[3vw] cursor-pointer z-5"
          onClick={() => {
            setcardN((l) => l + 1);
          }}
        />
      </div>
    </div>
  );
};

export default Section2_2;
