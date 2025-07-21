import React from "react";
import arrow from "../../assets/iconArrowRight.png";
import BottomTextComponent from "../../components/BottomTextComponent";
const Section2_1 = () => {
  return (
    <div className="flex flex-col">
      <div className=" h-screen w-screen   text-white flex flex-col items-center justify-around ">
        
        <div className="flex flex-col items-center  font-gmrkB leading-none">
          {/* <div className="text-[12vw] md:text-[8vw] w-[70vw] mb-[-3%]   ">
            QUI SOMMES <label className="lg:hidden">NOUS</label>
          </div>
          <div className="hidden font-gmrkM lg:flex text-left text-[13vw] md:text-[8vw] gap-3 ">
            NOUS
            <div className=" justify-last text-[1vw] rounded-l-full rounded-r-full  font-gmrkM border r h-[60%] py-[4%]  px-[2vw] mt-[2%] leading-tight lg:flex items-center">
              <p className="">
                UNE AGENCE INNOVANTE COMME <br />
                VOUS POUVEZ LE VOIR C’EST <br /> IMPECABLE CHEZ NOUS JE VOUS
                <br /> LE GARENTI
              </p>
            </div>
            ?
          </div> */}
          <div className="flex flex-col items-center ">
            <div className="flex w-[70vw] flex-col h-fit md:w-[65vw]">
              <div className="text-[13vw] md:text-[8vw] w-full flex justify-between flex-col md:flex-row">
                <div>QUI</div>
                <div>SOMMES</div>
              </div>
              <div className="flex text-[13vw] md:text-[8vw] gap-3 w-full h-fit justify-between items-center">
                NOUS
                <div className="text-[1.2vw] h-full border rounded-full w-full justify-center text-justify px-[3vw] py-[1vw]  leading-[1.5vw] hidden md:flex  items-center">
                  <p className="font-gmrkM ">
                    UNE AGENCE INNOVANTE COMME VOUS POUVEZ LE VOIR C’EST
                    IMPECABLE CHEZ NOUS JE VOUS LE GARENTI
                  </p>
                </div>
                ?
              </div>
            </div>
          </div>
          <div className="md:hidden font-gmrkM text-[3.5vw] w-[70vw] mt-[15%]">
            <p
              className="justify-last 
            "
            >
              UNE AGENCE INNOVANTE <br /> COMME VOUS POUVEZ LE VOIR <br /> C’EST
              IMPECABLE CHEZ NOUS <br />
            </p>
            JE VOUS LE GARENTI
          </div>
        </div>

        <img src={arrow} className="  w-[4vw] cursor-pointer md:hidden" />
      </div>
    </div>
  );
};

export default Section2_1;
