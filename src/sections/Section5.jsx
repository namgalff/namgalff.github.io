import React from "react";
import logo from "../assets/logo.png";
import insta from "../assets/iconInsta.png";
import youtube from "../assets/iconYoutube.png";
import dribble from "../assets/iconDribble.png";
import linkedin from "../assets/iconLinkedin.png";

const Section5 = () => {
    return (
        <div className="  h-[130vh] overflow-hidden flex flex-col items-center justify-between gap-[15vh] text-white font-gmrkM">
               
            <div className="flex rounded-4xl pb-[25%] pt-[5%] h-[70vh] w-[60vw]   flex-col items-center justify-between  bg-[#E6E6E6]/10 ">
                <img className="w-[15vw]" src={logo} />
                <p className="text-[7vw] w-[70%] text-center leading-none">
                    BUSINESS INFO
                </p>
                <div className="flex flex-col mt-[7%] text-[3vw] gap-[3vh]">
                    <div className="w-[100%] text-center leading-tight">
                        <p className="text-white/25">phone</p>
                        <p>+213 xxx xxx xxx</p>
                    </div>
                    <div className="w-[100%]  text-center leading-tight">
                        <p className="text-white/25">mail</p>
                        <p>contact@moon.inc</p>
                    </div>
                    <div>
                        <p className="text-white/25 text-center ">socials </p>
                        <div className="flex items-center  justify-center gap-[3.5vw]">
                            <img className="w-[5vw]" src={insta} />
                            <img className="w-[5vw]" src={dribble} />
                            <img className="w-[5vw]" src={youtube} />
                            <img className="w-[5vw]" src={linkedin} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center  gap-[3vh] w-[80vw] h-[85vh] ">
                <div className="flex justify-between w-[100%] leading-tight">
                    <p className=" justify-last leading-none text-[9vw] w-[50vw]  font-gmrkB">
                        BOOK A CALL
                    </p>
                    
                   
                </div>
                <div className="text-[3vw] w-[80vw] leading-none">
                      <p className="justify-last">UNE AGENCE INNOVANTE COMME <br/> VOUS POUVEZ LE VOIR C’EST<br/>  IMPECABLE CHEZ NOUS JE VOUS </p>
                      <p>LE GARENTI</p>
                </div>
               
                <form className="boder flex flex-col gap-4  h-[100%] w-[100%] text-[3vw]">
                    <div>
                        <input
                            id="name"
                            type="text"
                            rows="60"
                            className=" w-full px-0 py-1 bg-transparent border-0 border-b focus:border-gray-300 border-gray-500 focus:outline-none focus:ring-0"
                            placeholder="name"
                        />
                    </div>
                   

                    <div>
                        <input
                            id="email"
                            type="email"
                            className=" w-full px-0 py-1 bg-transparent border-0 border-b  focus:border-gray-300 border-gray-500  focus:outline-none focus:ring-0"
                            placeholder="company"
                        />
                    </div>

                    <div>
                        <input
                            id="email"
                            type="email"
                            className=" w-full px-0 py-1 bg-transparent border-0 border-b  focus:border-gray-300 border-gray-500  focus:outline-none focus:ring-0"
                            placeholder="email"
                        />
                    </div>

                    <div>
                        <input
                            id="email"
                            type="email"
                            className=" w-full px-0 py-1 bg-transparent border-0 border-b  focus:border-gray-300 border-gray-500  focus:outline-none focus:ring-0"
                            placeholder="phone"
                        />
                    </div>
                    <div>
                        <textarea
                            id="email"
                            rows="6"
                            type="text"
                            className="placeholder-bottom w-full px-0 py-1 bg-transparent border-0 border-b  focus:border-gray-300 border-gray-500  focus:outline-none focus:ring-0"
                            placeholder="message"
                        />
                    </div>

                    <div className="border flex-end text-center  rounded-4xl text-[3vw] py-[2%] ">
                        GET IN TOUCH
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Section5;
