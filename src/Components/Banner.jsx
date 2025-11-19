import { motion } from "framer-motion";
import { Link } from "react-router";
import { FaArrowRight, FaUsers } from "react-icons/fa";

const images = [
  "https://i.pinimg.com/736x/f7/7d/11/f77d1130ed826e2039563b203c42209f.jpg", // Tree plantation
  "https://i.pinimg.com/736x/cc/eb/77/cceb77091f4a35c28214c9feee04101d.jpg", // Tree plantation 2
  "https://i.pinimg.com/1200x/bd/43/70/bd4370cf891aa213d538038a568dbfbe.jpg", // Cleaning
  "https://i.pinimg.com/736x/05/f7/a3/05f7a35f8df6c37e545206aa236d666f.jpg", // Cleaning 2
  "https://i.pinimg.com/736x/ad/ff/61/adff61a9c69eca3760995813f25b7d2a.jpg", // Food donation
  "https://i.pinimg.com/736x/c7/35/35/c73535f60235ccdfe4abca2f475edbc8.jpg", // Donation kit
];

const Banner = () => {
  return (
    <div className="bg-base-200 from-base-100 to-base-200 min-h-screen rounded-3xl my-10 p-6">

      {/* Floating Background Shapes */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute top-20 right-40 w-52 h-52 rounded-full bg-green-200/40 blur-2xl"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 7 }}
        className="absolute bottom-16 left-20 w-40 h-40 rounded-full bg-green-300/30 blur-3xl"
      />

      <div className="hero-content flex-col lg:flex-row-reverse gap-16 relative z-10">

        {/* ======================
              RIGHT SIDE PREMIUM GRID
        ======================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-3 gap-4"
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="rounded-2xl overflow-hidden shadow-xl border border-white/30 backdrop-blur-sm"
              whileHover={{ scale: 1.06 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img
                src={img}
                className="w-32 h-32 md:w-40 md:h-40 object-cover"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* ======================
              LEFT SIDE PREMIUM TEXT
        ======================= */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 max-w-xl lg:text-left text-center"
        >
          <h1 className=" text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Make an Impact.  
            <span className="logo-font text-green-500"> Serve </span>  
            Your Community.
          </h1>

          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Together, we can create meaningful change — from tree plantation
            drives, child education sessions, food donation, cleaning
            campaigns, and community marathons.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-4">

            <Link to="/upcoming-event">
              <motion.button
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
                className="btn bg-green-500 border-none text-white px-7 shadow-md flex items-center gap-2 rounded-lg"
              >
                Explore Events <FaArrowRight />
              </motion.button>
            </Link>

            <Link to="/create-event">
              <motion.button
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-outline border-green-500 text-green-600 dark:text-green-400 px-7 flex items-center gap-2 rounded-lg"
              >
                Create Event <FaUsers />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
