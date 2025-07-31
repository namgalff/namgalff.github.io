import React from "react";
import logo from "../assets/logo.png";
import insta from "../assets/iconInsta.png";
import youtube from "../assets/iconYoutube.png";
import dribble from "../assets/iconDribble.png";
import linkedin from "../assets/iconLinkedin.png";
import toast from "react-hot-toast";
import emailjs from "emailjs-com";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

const Section5 = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    // Send email using EmailJS
    emailjs
      .send(
        "service_qbsfdnu",
        "template_y0r4e6k",
        formData,
        "jf3CXSArOvTpJu7dL"
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        toast.success("Message sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        toast.error("An error occurred while sending the message.");
      });
  };

  return (
    <div
      name="CONTACT"
      className="  h-[150vh] md:h-[120vh] overflow-hidden flex flex-col md:flex-row items-center justify-between gap-[15vh] md:gap-[2vw] text-white font-gmrkM md:px-[15vw] py-[10vh] "
    >
            <Toaster></Toaster>

      <div className=" h-[130vh] md:h-fit overflow-hidden flex flex-col md:items-stretch md:flex-row items-center justify-between gap-[15vh] md:gap-[2vw] text-white font-gmrkM  z-[100] ">
        <div className="z-20 flex rounded-4xl pb-[25%] md:pb-0 pt-[5%] h-[70vh] md:h-auto w-[60vw] md:w-[40%]  flex-col items-center justify-around md:justify-start md:gap-[4vh]  bg-[#E6E6E6]/25 ">
          <img className="w-[15vw] mb-[30%] md:mb-0 md:w-[8vw]" src={logo} />
          <p className="text-[7vw] md:text-[2.5vw]  mb-[20%] md:mb-0  w-[70%] md:py-[3vw] text-center leading-none">
            BUSINESS INFO
          </p>
          <div className="flex flex-col mt-[7%]  md:mt-0 text-[3vw] md:text-[1.5vw] gap-[3vh]">
            <div className="w-[100%] text-center leading-tight">
              <p className="text-white/25">phone</p>
              <p>+213 xxx xxx xxx</p>
            </div>
            <div className="w-[100%]  text-center leading-tight">
              <p className="text-white/25">mail</p>
              <p>contact@moon.inc</p>
            </div>
            <div>
              <p className="text-white/25 text-center z-20">socials </p>
              <div className="flex items-center  justify-center gap-[3.5vw] md:gap-[2vw]">
                <a
                  href="https://www.instagram.com/agence_mooninc/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-[5vw] md:w-[2.5vw] z-20 cursor-pointer"
                    src={insta}
                  />
                </a>
                <a
                  href="https://dz.linkedin.com/company/moon-inco?trk=public_profile_topcard-current-company"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <img
                    className="w-[5vw] z-20 md:w-[2.5vw] cursor-pointer"
                    src={dribble}
                  />
                </a>
                <a
                  href="https://www.youtube.com/@AgenceMoonInc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-[5vw] md:w-[2.5vw] cursor-pointer z-20"
                    src={youtube}
                  />
                </a>
                <a
                  href="https://dz.linkedin.com/company/moon-inco?trk=public_profile_topcard-current-company"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="cursor-pointer z-20 w-[5vw] md:w-[2.5vw]"
                    src={linkedin}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center  gap-[3vh] w-[80vw] md:w-[60%] h-[85vh] md:h-fit z-20">
          <div className="flex flex-col md:flex-row w-full md:gap-[1vw]">
            <div className="flex justify-between w-[100%] leading-tight md:w-[60%]">
              <p className=" justify-last leading-none text-[9vw] md:text-[4vw] w-[50vw]  font-gmrkB ">
                PARLONS DE VOUS
              </p>
            </div>
            <div className="text-[3vw] md:text-[1.3vw] text-white/50 w-[80vw] md:w-full leading-[3vw] md:leading-none md:py-0 py-[2vw]">
              <p className="justify-last uppercase">
                Des idees qui resonnent. Une execution qui <br /> performe.
                Ecrivons la suite <br /> ensemble.
              </p>
            </div>
          </div>

          <form
            className=" flex flex-col gap-4 md:gap-2 h-[100vh]  md:h-fit w-[100%] text-[3vw] md:text-[1.5vw]"
          >
            <div>
              <input
                name="name"
                onChange={handleChange}
                type="text"
                className=" w-full px-0 py-1 bg-transparent border-0 border-b focus:border-gray-300 border-gray-500 focus:outline-none focus:ring-0"
                placeholder="name"
              />
            </div>

            <div>
              <input
                name="company"
                type="text"
                className=" w-full px-0 py-1 bg-transparent border-0 border-b  focus:border-gray-300 border-gray-500  focus:outline-none focus:ring-0"
                placeholder="company"
              />
            </div>

            <div>
              <input
                name="email"
                onChange={handleChange}
                type="email"
                className=" w-full px-0 py-1 bg-transparent border-0 border-b  focus:border-gray-300 border-gray-500  focus:outline-none focus:ring-0"
                placeholder="email"
              />
            </div>

            <div>
              <input
                name="phone"
                onChange={handleChange}
                type="tel"
                className=" w-full px-0 py-1 bg-transparent border-0 border-b  focus:border-gray-300 border-gray-500  focus:outline-none focus:ring-0"
                placeholder="phone"
              />
            </div>
            <div>
              <textarea
                name="message"
                onChange={handleChange}
                rows="6"
                type="text"
                className="placeholder-bottom  w-full px-0 py-1 bg-transparent border-0 border-b  focus:border-gray-300 border-gray-500  focus:outline-none focus:ring-0"
                placeholder="message"
              />
            </div>

            <div className="border flex-end text-center  rounded-4xl text-[3vw] md:text-[1.5vw] py-[2%] cursor-pointer z-20" onClick={handleSubmit}>
              
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
