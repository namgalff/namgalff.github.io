import React from "react";
import logo from "../assets/logo.png";
import insta from "../assets/iconInsta.png";
import youtube from "../assets/iconYoutube.png";
import dribble from "../assets/iconDribble.png";
import linkedin from "../assets/iconLinkedin.png";

const Section5 = () => {
  return (
    <div name='CONTACT' className="  h-[200vh] md:h-[120v] overflow-hidden flex flex-col md:flex-row items-center justify-between gap-[15vh] md:gap-[2vw] text-white font-gmrkM md:px-[15vw] py-[10vh] ">
      <div className=" h-[200vh] md:h-[80vh] overflow-hidden flex flex-col md:flex-row items-center justify-between gap-[15vh] md:gap-[2vw] text-white font-gmrkM  ">
        <div className="flex  rounded-4xl pb-[25%] md:pb-0 pt-[5%] h-[70vh] md:h-full w-[60vw] md:w-[40%]  flex-col items-center justify-between md:justify-start md:gap-[4vh]  bg-[#E6E6E6]/10 z-50">
          <img className="w-[15vw] md:w-[8vw]" src={logo} />
          <p className="text-[7vw] md:text-[2.5vw] w-[70%] md:py-[5vh] text-center leading-none">
            BUSINESS INFO
          </p>
          <div className="flex flex-col mt-[7%] md:mt-0 text-[3vw] md:text-[1.5vw] gap-[3vh]">
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
              <div className="flex items-center  justify-center gap-[3.5vw] md:gap-[2vw]">
                <a href="https://www.instagram.com/agence_mooninc/" target="_blank" rel="noopener noreferrer"><img className="w-[5vw] md:w-[2.5vw] cursor-pointer" src={insta} /></a>
                <a href="https://dz.linkedin.com/company/moon-inco?trk=public_profile_topcard-current-company" target="_blank" rel="noopener noreferrer"> <img className="w-[5vw] md:w-[2.5vw] cursor-pointer" src={dribble} /></a>
                 <a href="https://www.youtube.com/@AgenceMoonInc" target="_blank" rel="noopener noreferrer"><img className="w-[5vw] md:w-[2.5vw] cursor-pointer" src={youtube} /></a>
                 <a href="https://dz.linkedin.com/company/moon-inco?trk=public_profile_topcard-current-company" target="_blank" rel="noopener noreferrer"><img className="cursor-pointer w-[5vw] md:w-[2.5vw]" src={linkedin} /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center  gap-[3vh] w-[80vw] md:w-[60%]  md:h-fit z-50">
          <div className="flex flex-col md:flex-row w-full md:gap-[1vw]">
            <div className="flex justify-between w-[100%] leading-tight md:w-[60%]">
              <p className=" justify-last leading-none text-[9vw] md:text-[4vw] w-[50vw]  font-gmrkB ">
               PARLONS DE VOUS
              </p>
            </div>
            <div className="text-[3vw] md:text-[1.3vw] text-white/50 w-[80vw] md:w-full leading-none">
              <p className="justify-last">
               Des idées qui résonnent. Une exécution qui <br/> performe. Écrivons la  suite  <br/> ensemble.
              </p>
             
            </div>
          </div>

          <form className=" flex flex-col gap-4 md:gap-2 h-[100vh]  md:h-fit w-[100%] text-[3vw] md:text-[1.5vw]">
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
                className="placeholder-bottom  w-full px-0 py-1 bg-transparent border-0 border-b  focus:border-gray-300 border-gray-500  focus:outline-none focus:ring-0"
                placeholder="message"
              />
            </div>

            <div className="border flex-end text-center  rounded-4xl text-[3vw] md:text-[1.5vw] py-[2%] cursor-pointer">
              GET IN TOUCH
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
//
//
//
export default Section5;
