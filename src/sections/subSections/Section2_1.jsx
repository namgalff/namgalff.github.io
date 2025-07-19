import React from 'react'
import arrow from "../../assets/iconArrowRight.png";
import BottomTextComponent from '../../components/BottomTextComponent';
const Section2_1 = () => {
  return (
    <div className='flex flex-col'>
    <div className=" h-screen w-screen  text-white flex flex-col items-center justify-center ">
            <img
                src={arrow}
                className="absolute right-[5%] w-[4vw] cursor-pointer"
            />
            <div className="flex flex-col items-center  font-gmrkB leading-tight">
              
                <div className="text-[8vw] mb-[-3%] ">QUI SOMMES</div>
                <div className="flex text-[8vw] gap-3">
                    NOUS
                    <div className="justify-last text-[1vw] rounded-l-full rounded-r-full  font-gmrkM border r h-[60%] py-[4%]  px-[2vw] mt-[2%] leading-tight flex items-center">
                        <p className="">
                            UNE AGENCE INNOVANTE COMME <br />
                            VOUS POUVEZ LE VOIR C’EST <br /> IMPECABLE CHEZ NOUS
                            JE VOUS
                            <br /> LE GARENTI
                        </p>
                    </div>
                    ?
                </div>
            </div>
            
        </div>
       
         <BottomTextComponent text={["FULLY DIGITAL AGENCY","WHO ARE WE?","SCROLL AHEAD PLEASE"]} />
         </div>
  )
}

export default Section2_1