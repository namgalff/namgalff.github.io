import React from 'react'
import arrow from "../../assets/iconArrowRight.png";
import BottomTextComponent from '../../components/BottomTextComponent';
const Section2_1 = () => {
  return (
    <div className='flex flex-col'>
    <div className=" h-screen w-screen   text-white flex flex-col items-center justify-around ">
            <img
                src={arrow}
                className="absolute hidden lg:block right-[5%] w-[4vw] cursor-pointer"
            />
            <div className="flex flex-col items-center  font-gmrkB leading-none">
              
                <div className="text-[12vw] w-[70vw] mb-[-3%]   ">QUI SOMMES <label className='lg:hidden'>NOUS</label></div>
                <div className="hidden font-gmrkM lg:flex text-left text-[13vw] gap-3 ">
                    NOUS
                    <div className=" justify-last text-[1vw] rounded-l-full rounded-r-full  font-gmrkM border r h-[60%] py-[4%]  px-[2vw] mt-[2%] leading-tight lg:flex items-center">
                        <p className="">
                            UNE AGENCE INNOVANTE COMME <br />
                            VOUS POUVEZ LE VOIR C’EST <br /> IMPECABLE CHEZ NOUS
                            JE VOUS
                            <br /> LE GARENTI
                        </p>
                    </div>
                    ?
                </div>
                    <div className='lg:hidden font-gmrkM text-[3.5vw] w-[70vw] mt-[15%]'>
                 <p className='justify-last 
            '>
                UNE AGENCE INNOVANTE <br/> COMME  VOUS POUVEZ LE VOIR <br/> C’EST IMPECABLE CHEZ NOUS <br/> 
                
            </p>
                JE VOUS LE GARENTI
            </div>
        
            </div>
       
           
            
             <img
                src={arrow}
                className="  w-[4vw] cursor-pointer"
            />

            
        </div>

         </div>
  )
}

export default Section2_1