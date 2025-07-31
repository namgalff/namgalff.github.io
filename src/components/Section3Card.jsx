import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Section3Card = ({ index }) => {
  const text = ["3U", "4C", "3S", "IQ"];
  const tet = ["LES 3U", "LES 4C", "LES 3 SINGES", "QUALITY "];
  const cards = [
    {
      id: 1,
      title: "3U",
      c1: "LES 3U",
      c2: "Pour creer des marques captivantes",
      c3: "Nous accompagnons les marques pour aller au-dela de leur fonction de base. Notre module valeur 3U repose sur une methodologie unique qui transforme vos produits ou services en une valeur forte et essentielle, centree sur vos consommateurs. ",
    },
    {
      id: 2,
      title: "4C",
      c1: "LES 4C",
      c2: "Pour briller sur le digital",
      c3: "Nous ne publions jamais pour publier. Chaque action suit une réflexion stratégique en plusieurs étapes : d’abord la cible, ensuite le canal, puis le contenu, et enfin le cycle. Une approche refléchie, structurée et pleine de sens : pas de hasard, que de l’impact. ",
    },
    {
      id: 3,
      title: "iQ",
      c1: "iQ Engagement Quality",
      c2: "Pour des KPIs plus exigeants",
      c3: "Nous optons pour une lecture plus fine des contenus qui performent vraiment et captent l’attention. Pour affiner la stratégie digitale, on mise sur des KPI intelligents, capables de distinguer un like, un commentaire ou un partage, car tous n’ont pas la même valeur. ",
    },
    {
      id: 3,
      title: "W",
      c1: "WYSIWYG",
      c2: "Pour des evenements percutants",
      c3: "Nous concevons vos événements en 3D, jusque dans les moindres détails. Ce que vous voyez à l’écran, c’est exactement ce que vous retrouverez sur le terrain. Pas de surprises, que du concret.",
    },
  ];
  return (
    <div className="w-[100%] relative  overflow-hidden   items-start  ">
      <AnimatePresence mode="wait" custom={index}>
        <motion.div
          className="relative flex w-[100%] justify-center items-center gap-8"
          initial={{ x: "100%", opacity: 0 }}
          key={index}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ type: "tween", duration: 0.2 }}
        >
          <div className=" text-[15vw] opacity-25  font-gmrkB  w-[50%] text-center mr-[-1%] ">
            {cards[index].title}
          </div>
          <div className="leading-none flex flex-col justify-center  w-[45%] ">
            <p className="text-[3vw] font-gmrkB mb-[4%] mt-[-9%]">
              {cards[index].c1}
            </p>
            <p className="text-[1.1vw] opacity-55 mb-[3%]">{cards[index].c2}</p>
            <p className="justify-last text-[1.2vw] leading-[100%] ">
              {cards[index].c3}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Section3Card;
