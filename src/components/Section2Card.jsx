import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Section2Card = ({ index }) => {
  const titre = [
    "Le Hub Digital",
    "Le Hub Publicitaire",
    "Le Hub Evenementiel",
    "Le Studio Crea",
    "Le Studio 3D",
    "Le Motion Lab",
  ];
  const texte = [
    "Nous connectons les marques au coeur de leur époque. Maîtriser l'art de capter l'attention. De l’animation de communautes à la creation de jeux interactifs, on transforme chaque pixel en une expérience immersive et chaque campagne en un phenomene viral",
    "Nous transformons les idees en campagnes qui marquent. Chaque campagne est une oeuvre qui parle. De la production audiovisuelle à la stratégie 360°, nous faconnons des histoires percutantes, des court-metrages captivants, et des moments inoubliables qui marquent les esprits",
    "Nous creons des experiences qui deviennent des souvenirs. Imaginez un evenement ou chaque detail est une experience. De l’exposition au lancement de produit, nous creons des moments de connexion authentiques qui laissent une empreinte memorable et revolutionnent l’engagement",
    "Nous faconnons des visuels qui imposent leur style. L’identite visuelle qui vous definit. Nous creons des visuels qui font rever, des designs qui racontent une histoire et des packagings qui transforment un simple produit en un objet desire",
    "Nous donnons forme à l’imaginaire avec precision et impact. Offrez à votre produit une realite augmentee. De l’architecture d’evenements à la modelisation, chaque render est une oeuvre d’art 3D immersive, concue pour captiver et emerveiller",
    "Nous animons les histoires pour captiver et marquer. L’animation qui prend vie. Grace à la magie du motion design, nous donnons vie à vos idees, pour creer des vidéos qui dansent et racontent des histoires de maniere vibrante et unique",
  ];

  return (
    <div className="  overflow-hidden w-[80vw] md:w-[40vw]  font-gmrkM flex flex-col   bg-white rounded-2xl md:h-full h-[40vh] justify-center">
      <AnimatePresence mode="wait" custom={index}>
        <motion.div
          key={index}
          className={`gap-[3vh] text-[4vw] md:text-[2vw]   overflow-hidden font-gmrkM justify-between flex flex-col  bg-white px-[9%] py-[7%]   `}
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ type: "tween", duration: 0.2 }}
        >
          <p className="opacity-60  font-gmrkB leading-[110%]">
            {index + 1 }/{titre.length} <br /> {titre[index]}
          </p>
          <p className="opacity-[37%] text-[5vw] md:text-[1.2vw] ">
            NOS ARENES STRATEGIQUES{" "}
          </p>
          <p className="leading-none text-[3.3vw] md:text-[1vw] ">
            {texte[index]}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Section2Card;
