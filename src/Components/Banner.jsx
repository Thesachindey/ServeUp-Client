import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from "framer-motion";
import React from 'react';
import { Link } from 'react-router'; // FIXED
import Container from './Container';

const Banner = () => {
  return (
   
 <div className="hero bg-base-200 min-h-screen my-10 rounded-3xl">
  <div className="hero-content flex-col lg:flex-row-reverse gap-10">

    {/* RIGHT SIDE ANIMATION */}
    <motion.div
      initial={{ scale: 0.7, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="flex justify-center"
    >
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <DotLottieReact
          className="w-64 sm:w-80 md:w-[520px] lg:w-[650px]"
          src="https://lottie.host/13c3c5f5-eb92-4090-a5fb-2195a7d98193/sKCNdzIDeW.lottie"
          loop
          autoplay
        />
      </motion.div>
    </motion.div>

    {/* LEFT SIDE TEXT */}
    <motion.div
      className="text-center lg:text-left space-y-6"
      initial={{ x: -60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className="logo-font text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
        Create. Join. <br /> Serve Your Community.
      </h1>

      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-md mx-auto lg:mx-0">
        Discover social development events happening around you and make a real impact today.
      </p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Link
          to="/upcoming-event"
          className="btn bg-green-400 text-white hover:bg-green-500 rounded-md px-8 border-black"
        >
          Explore Events
        </Link>
      </motion.div>
    </motion.div>
  </div>
</div>

    
  );
};

export default Banner;
