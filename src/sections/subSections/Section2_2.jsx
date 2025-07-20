import React from "react";
import arrow from "../../assets/iconArrowRightBlack.png";
import Section2Card from "../../components/Section2Card";
import { useState } from "react";
import BottomTextComponent from "../../components/BottomTextComponent";

const Section2_2 = () => {
    const [cardN, setcardN] = useState(0)
    return (
        <div className="bg-[#E5E5E5] ">
        <div className="w-screen h-screen flex-col flex items-center justify-around gap-[3vw] ">
            <img
                src={arrow}
                className=" hidden lg:block right-[5%] w-[4vw] cursor-pointer z-50"
                onClick={()=>{setcardN((l)=>l+1)}}
            />
            <p className="w-[80vw] text-right text-outline text-[9vw] font-gmrkB leading-none">NOS <br/> ARENES <br/> STRATEGIQUES</p>
            <div className=""  onClick={()=>{setcardN((l)=>l+1)}}>
                  <Section2Card index={cardN}/>
            </div>
             <img
                           src={arrow}
                           className="  w-[4vw] cursor-pointer"
                       />
          

        </div>
             
        </div>

    );
};

export default Section2_2;
