import React from 'react';
import BG from '../../component/bg/bg';
import background_image from '../../assets/background_image.jpg';
import { Navbar } from '../../component/navbar';
import { motion } from 'framer-motion';

const Home = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.5 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  const letters = "Resonance 25".split('');
  const tagLine = "tagline over here".split('');

  return (
    <>
      {/* Background Overlay */}
      <div className="absolute inset-0">
        <BG />
      </div>

      <div className="relative min-h-screen flex flex-col">
        <Navbar />

        {/* Hero Section */}
        <div className="relative flex-1 flex flex-col justify-end">
          <img
            src={background_image}
            alt="Hero"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <div className="relative z-10 text-center pb-10 -mb-10 lg:-mb-24">
            <motion.div className='lg:pl-20 pl-6 text-left'
              variants={container}
              initial="hidden"
              animate="visible">
              {tagLine.map((letter, index) => (
                <motion.span
                  key={index}
                  variants={child}
                  className="text-white font-bazingaItalic mb-4 text-left text-[20px] md:text-[40px] "
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
            <motion.h1
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  variants={child}
                  className="text-[clamp(3rem,15vw,20rem)] tracking-wide font-bold text-white drop-shadow-[5px_5px_25px_rgba(255,255,255,0.3)] font-bazingaItalic"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;