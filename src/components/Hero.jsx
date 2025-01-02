import React from 'react';
import { motion } from 'framer-motion';
import { HERO } from '../constants/index';
import muz from '../../public/assets/muz.webp';

const Hero = () => {
  return (
    <section className="flex flex-wrap items-center min-h-screen mt-10">
      {/* Left Section with Framer Motion */}
      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="my-8 p-2 text-4xl font-bold md:text-5xl lg:text-[7rem]">
          {HERO.name}
        </h2>
        <p className="p-2 text-3xl tracking-tighter lg:text-4xl">{HERO.greet}</p>
        <p className="p-2 mb-8 text-xl">{HERO.description}</p>
      </motion.div>

      {/* Right Section with Image */}
      <motion.div
        className="w-full md:w-1/2 lg:p-8"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex justify-center">
          <img
            src={muz}
            alt="Hero Image"
            width={550}
            height={550}
            className="rounded-3xl"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
