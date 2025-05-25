import React from 'react'
import arrow from "../../assets/iconArrowRight.png";

const Section2_1 = () => {
  return (
    <div className=" h-screen w-screen bg-green-950 text-white flex flex-col items-center justify-center font-gmrkM">
            <img
                src={arrow}
                className="absolute right-[5%] w-[4vw] cursor-pointer"
            />
            <div className="flex flex-col items-center border">
              
                <div className="text-[8vw]  ">QUI SOMMES</div>
                <div className="flex text-[8vw] gap-3">
                    NOUS
                    <div className="text-[1vw] border rounded-4xl h-[60%]  px-[2vw] mt-[2%] leading-tight flex items-center">
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
  )
}

export default Section2_1