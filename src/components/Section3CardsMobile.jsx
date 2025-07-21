import React,{useRef,useState,useEffect

} from 'react'
import { motion  } from 'framer-motion';

const cards = [
  { id: 1, title: "3U", c1:"LES 3U",c2: "Pour créer des marques captivantes",c3:'Nous accompagnons les marques pour aller au-delà de leur fonction de base. Notre module valeur 3U repose sur une méthodologie unique qui transforme vos produits ou services en une valeur forte et essentielle, centrée sur vos consommateurs. ' },
  { id: 2, title: "4C",c1:"LES 4C",c2:"Pour briller sur le digital",c3:"Nous ne publions jamais pour publier. Chaque action suit une réflexion stratégique en plusieurs étapes : d’abord la cible, ensuite le canal, puis le contenu, et enfin le cycle. Une approche réfléchie, structurée et pleine de sens : pas de hasard, que de l’impact. " },
  { id: 3, title: "iQ",c1:"iQ Engagement Quality",c2:"Pour des KPIs plus exigeants",c3:'Nous optons pour une lecture plus fine des contenus qui performent vraiment et captent l’attention. Pour affiner la stratégie digitale, on mise sur des KPI intelligents, capables de distinguer un like, un commentaire ou un partage, car tous n’ont pas la même valeur. '},
  { id: 3, title: "WY",c1:"WYSIWYG",c2:"Pour des evenements percutants",c3:'Nous concevons vos événements en 3D, jusque dans les moindres détails. Ce que vous voyez à l’écran, c’est exactement ce que vous retrouverez sur le terrain. Pas de surprises, que du concret.'},

];
const Section3CardsMobile = () => {
          const [containerWidth, setContainerWidth] = useState("100vw");
  const [maxDrag, setMaxDrag] = useState(0);
  const wrapperRef  = useRef(null);
     useEffect(() => {
    const cardWidthVW = 60;
    const gapRem = 1.5; // from gap-6
    const numCards = cards.length;


    // Convert rem to vw
    const gapVW = (gapRem * (numCards - 1)) / 16 * 100 / window.innerWidth * 100;
    const totalWidthVW = cardWidthVW * numCards;
    const totalGapVW = gapVW;

    const totalWidth = totalWidthVW + totalGapVW;

    setContainerWidth(`${totalWidth}vw`);

    // Now compute drag constraint
    const visibleWidth = window.innerWidth*0.3; // because of pl-[20vw]
    const scrollableWidth = (totalWidth / 100) * window.innerWidth;
    const diff = scrollableWidth - visibleWidth;
    console.log(diff)

    setMaxDrag(-diff);
  }, []);

 const containerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onTouchStart = (e) => {
      isDragging.current = true;
      startX.current = e.touches[0].clientX;
      scrollStart.current = container.scrollLeft;
    };

    const onTouchMove = (e) => {
      if (!isDragging.current) return;
      const delta = e.touches[0].clientX - startX.current;
      container.scrollLeft = scrollStart.current - delta;
    };

    const onTouchEnd = () => {
      isDragging.current = false;
    };

  

    container.addEventListener("touchstart", onTouchStart, { passive: true });
    container.addEventListener("touchmove", onTouchMove, { passive: false });
    container.addEventListener("touchend", onTouchEnd);
   

    return () => {
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchmove", onTouchMove);
      container.removeEventListener("touchend", onTouchEnd);
      
    };
  }, []);

    return (
  

    <div
      className="w-screen  flex items-center overflow-hidden  pl-[12vw]"
      ref={wrapperRef}
    >
      <motion.div
        drag="x"
        dragConstraints={{ left: maxDrag, right: 0 }}
        dragElastic={0.2}
      className=' text-[15vw]  font-gmrkB   text-center flex gap-6 mr-[-1%]'
        style={{
          width: containerWidth,
          touchAction: "pan-y",
        }}
      >
        {cards.map((c) => (
          <div
            key={c.id}
            className="shrink-0 w-[70vw]  pb-[5%] pt-[2%] h-[60vh]  bg-white/25 rounded-2xl shadow-lg flex flex-col items-center justify-around"
          >
                        
                        <div
            className={`opacity-25  font-gmrkB h-[20vh] w-[80%] text-left mr-[-1%] flex items-center ${
                c.title.length > 2 ? 'text-[10vw]  mt-[23%]' : 'text-[30vw]'
            }`}
        >{c.title}</div>
        <div className='flex flex-col items-center  justify-around h-[50vh]'>
             <p className='text-[5vw] font-gmrkB   text-left  opacity-100 w-[80%] '>{c.c1}</p>
                            <p className='text-[4vw] leading-none opacity-55 text-left  mb-[3%] w-[80%]'>{c.c2}</p>
                            <p className='justify-last w-[80%] text-left  text-[4vw] leading-[100%] '>{c.c3} </p>
        </div>
            
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Section3CardsMobile