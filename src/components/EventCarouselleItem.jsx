import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EventCarouselleItem = ({ content }) => {
  const containerRef = useRef(null);
  const innerRef = useRef(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });
  const [expandedAsset, setExpandedAsset] = useState(null);

  useEffect(() => {
    if (!containerRef.current || !innerRef.current) return;

    const updateConstraints = () => {
      const containerWidth = containerRef.current.offsetWidth * 0.9;
      const innerWidth = innerRef.current.scrollWidth;
      setConstraints({ left: -(innerWidth - containerWidth), right: 0 });
    };

    updateConstraints();

    const resizeObserver = new ResizeObserver(updateConstraints);
    resizeObserver.observe(innerRef.current);

    return () => resizeObserver.disconnect();
  }, [content]);

  return (
    <div
      ref={containerRef}
      className="w-screen flex items-center font-gmrkM overflow-hidden relative"
    >
      <motion.div
        ref={innerRef}
        drag="x"
        dragConstraints={constraints}
        className="flex items-center h-[30vh]  lg:h-[50vh]    rounded-3xl gap-6 px-6 py-4 cursor-grab active:cursor-grabbing bg-white/25"
      >
        {/* Text block */}
        <div className="flex flex-col  w-[40vw]  lg:h-[50vh] lg:justify-center lg:gap-3 h-[30vh] py-[3%] lg:py-[0] justify-around mr-[0vw]">
          <div>
            <p className="font-gmrkL lg:text-[2vw]">client</p>
            <p className="font-gmrkB text-[5vw] lg:text-[3.5vw]">{content.client}</p>
          </div>

          <div>
            {content.description.map((e, i) => (
              <p key={i} className="text-[3vw] lg:text-[1.5vw]">
                {e}
              </p>
            ))}
          </div>

          <div>
            {content.domaine.map((e, i) => (
              <p className="font-gmrkB text-[3vw] lg:text-[1vw]" key={i}>
                {e}
              </p>
            ))}
          </div>
        </div>

        {/* Assets (image or video preview) */}
        {content.assets.map((e, i) =>
          e.type === "image" ? (
             <motion.img
                       layoutId={`image-${i}`}
                       className="w-[80vw] lg:w-[40vw] h-auto object-contain shrink-0 cursor-pointer"
                       src={e.src}
                       key={i}
                       alt={`${content.client}-${i}`}
                       onClick={() => setExpandedAsset(expandedAsset === i ? null : i)}
                     />
          ) : (
            <motion.div
              layoutId={`asset-${i}`}
              key={i}
              className="w-[30vw]  lg:w-[12vw] shrink-0 cursor-pointer flex items-center justify-center rounded-xl overflow-hidden relative"
              onClick={() => setExpandedAsset(expandedAsset === i ? null : i)}
            >
              {/* Thumbnail-like placeholder */}
              <img
                src={e.thumbnail}
                //title={`video-${i}`}
                className="w-[30vh] cursor-pointer"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white text-3xl font-bold">
                ▶
              </div>
            </motion.div>
          )
        )}
      </motion.div>

         {/* animation  */}
      <AnimatePresence>
        {expandedAsset !== null && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 cursor-pointer"
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
              animate={{
        opacity: 1,
        ...(content.assets[expandedAsset].type === "image"
          ? { width  : '100vw' } 
          : { scale: 1 }) 
      }}
             transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={() => setExpandedAsset(null)}
          >
            {content.assets[expandedAsset].type === "image" ? (
              <motion.img
                layoutId={`asset-${expandedAsset}`}
                src={content.assets[expandedAsset].src}
                className="object-contain rounded-2xl "
                alt="expanded"
              />
            ) : (
              <motion.div
                layoutId={`asset-${expandedAsset}`}
                className="w-screen h-screen flex items-center justify-center"
              >
                <iframe
                  src={`https://www.youtube.com/embed/${content.assets[expandedAsset].src}?autoplay=1&modestbranding=1&rel=0`}
                  title={`video-${expandedAsset}`}
                  className="w-[90vw] h-[90vh]"
                  allow="autoplay; encrypted-media"
                />
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EventCarouselleItem;
