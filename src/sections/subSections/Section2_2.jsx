import React from "react";
import arrow from "../../assets/iconArrowRightBlack.png";
import Section2Card from "../../components/Section2Card";
import { useState } from "react";
import BottomTextComponent from "../../components/BottomTextComponent";

const Section2_2 = () => {
    const [cardN, setcardN] = useState(0)
    return (
        <div className="bg-[#E5E5E5] ">
        <div className="w-screen h-screen flex items-center justify-center gap-[3vw] ">
            <img
                src={arrow}
                className="absolute right-[5%] w-[4vw] cursor-pointer z-50"
                onClick={()=>{setcardN((l)=>l+1)}}
            />
            <p className="w-[45vw] text-right text-outline text-[4.5vw] font-gmrkB leading-[100%]">NOS <br/> ARENES <br/> STRATEGIQUES</p>
            <div className="w-[50vw]">
                  <Section2Card index={cardN}/>
            </div>
          

        </div>
            <BottomTextComponent text={["FULLY DIGITAL AGENCY","WHO ARE WE?","SCROLL AHEAD PLEASE"]} color={5}/>
        </div>

    );
};

export default Section2_2;
