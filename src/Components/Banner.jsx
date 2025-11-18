import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from "framer-motion";
import React from 'react';
import { Link } from 'react-router'; // FIXED
import Container from './Container';

const Banner = () => {
  return (
   
    <div className='bg-base-100 p-20 rounded-3xl bg-base-200 my-20'>
      <section className="grid grid-cols-1 lg:grid-cols-2 items-center py-10 gap-10">

        {/* LEFT SIDE TEXT */}
        <motion.div
          className="space-y-6 text-center lg:text-left"
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

        {/* RIGHT SIDE ANIMATION */}
        <motion.div
          className="flex justify-center"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <DotLottieReact
              className=" md:w-[520px] lg:w-[650px]"
              src="https://lottie.host/13c3c5f5-eb92-4090-a5fb-2195a7d98193/sKCNdzIDeW.lottie"
              loop
              autoplay
            />
          </motion.div>
        </motion.div>

      </section>
    </div>
    
  );
};

export default Banner;
