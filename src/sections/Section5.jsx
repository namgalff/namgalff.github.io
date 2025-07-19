import React from "react";
import logo from "../assets/logo.png";
import insta from "../assets/iconInsta.png";
import youtube from "../assets/iconYoutube.png";
import dribble from "../assets/iconDribble.png";
import linkedin from "../assets/iconLinkedin.png";

const Section5 = () => {
    return (
        <div className=" relative h-screen overflow-hidden flex items-center justify-center gap-[1vw] text-white font-gmrkM">
               
            <div className="flex h-[85vh] rounded-4xl pb-[15vh]   flex-col items-center justify-around  bg-[#E6E6E6]/10 w-[23vw]">
                <img className="w-[5vw]" src={logo} />
                <p className="text-[2.1vw] w-[50%] text-center leading-tight">
                    BUSINESS INFO
                </p>
                <div className="flex flex-col gap-[3vh]">
                    <div className="w-[100%] text-center leading-tight">
                        <p className="text-white/25">phone</p>
                        <p>+213 xxx xxx xxx</p>
                    </div>
                    <div className="w-[100%] text-center leading-tight">
                        <p className="text-white/25">mail</p>
                        <p>contact@moon.inc</p>
                    </div>
                    <div>
                        <p className="text-white/25 text-center">socials</p>
                        <div className="flex items-center justify-center gap-[1.5vw]">
                            <img className="w-[2vw]" src={insta} />
                            <img className="w-[2vw]" src={dribble} />
                            <img className="w-[2vw]" src={youtube} />
                            <img className="w-[2vw]" src={linkedin} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center not-first-of-type:  w-[50vw] h-[85vh] ">
                <div className="flex justify-between w-[100%] leading-tight">
                    <p className=" justify-last text-[4vw] w-[24vw]  font-gmrkB">
                        BOOK A CALL
                    </p>
                    <div className="text-[1.05vw] justify-last  w-[24vw] text-white/25">
                        <p>UNE AGENCE</p>
                        <p>INNOCANTE COMME</p>
                        <p>VOUS POUVEZ LE</p>
                        <p>VOIR C EST </p>
                        <p>IMPECABLE CHEZ</p>
                        <p>NOUS JE VOUS LE </p>
                        <p>GARENTI</p>
                    </div>
                </div>
                <form className="boder flex flex-col gap-4  h-[100%] w-[100%] text-[1.2vw]">
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

                    <div className="border flex-end text-center mt-auto  rounded-4xl text-[1.4vw] py-[2%] ">
                        GET IN TOUCH
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Section5;
