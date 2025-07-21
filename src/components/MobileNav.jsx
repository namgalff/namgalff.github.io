import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { div } from "framer-motion/client";

const navItems = ["HOME", "QUI SOMME NOUS", "CODES", "CREATIONS", "CONTACT"];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        className="absolute top-[7vw] left-[10vw] z-[110] md:hidden text-white/80 text-[10vw] focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <motion.div
            key="close-icon"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-white/80 text-[15vw] font-bold"
          >
            &times;{" "}
            {/* This is a cleaner “×” (HTML entity) instead of letter x */}
          </motion.div>
        ) : (
          <motion.div
            key="hamburger-icon"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-[2vw] translate-y-[5vw]"
          >
            <span className="block w-[8vw] h-[1vw] bg-white/80 rounded-sm" />
            <span className="block w-[8vw] h-[1vw] bg-white/80 rounded-sm" />
            <span className="block w-[8vw] h-[1vw] bg-white/80 rounded-sm" />
          </motion.div>
        )}
      </button>

      {/* Overlay Menu with animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex flex-col items-center justify-center gap-6 md:hidden"
          >
            {navItems.map((item, index) => (
              <div
                key={index}
                className="border border-transparent hover:border-white px-6 py-3 rounded-full transition cursor-pointer"
              >
                <ScrollLink
                  to={item}
                  smooth={true}
                  duration={600}
                  className="text-white text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item.toUpperCase()}
                </ScrollLink>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
