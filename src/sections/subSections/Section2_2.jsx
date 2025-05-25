import React from "react";
import arrow from "../../assets/iconArrowRightBlack.png";
import Section2Card from "../../components/Section2Card";
import { useState } from "react";

const Section2_2 = () => {
    const [cardN, setcardN] = useState(0)
    return (
        <div className="w-screen h-screen flex items-center justify-center bg-[#E5E5E5] gap-[3vw] ">
            <img
                src={arrow}
                className="absolute right-[5%] w-[4vw] cursor-pointer"
                onClick={()=>{setcardN((l)=>l+1)}}
            />
            <p className="w-[45vw] text-right text-outline text-[4.5vw] font-gmrkB leading-tight">NOS <br/> ARENES <br/> STRATEGIQUES</p>
            <div className="w-[50vw]">
                  <Section2Card index={cardN}/>
            </div>
          

        </div>
    );
};

export default Section2_2;
