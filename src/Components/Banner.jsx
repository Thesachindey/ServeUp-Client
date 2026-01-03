import { motion } from "framer-motion";
import { Link } from "react-router"; 
import { FaArrowRight, FaUsers } from "react-icons/fa";

const images = [
  "https://i.pinimg.com/736x/f7/7d/11/f77d1130ed826e2039563b203c42209f.jpg", 
  "https://i.pinimg.com/736x/cc/eb/77/cceb77091f4a35c28214c9feee04101d.jpg", 
  "https://i.pinimg.com/1200x/bd/43/70/bd4370cf891aa213d538038a568dbfbe.jpg", 
  "https://i.pinimg.com/736x/05/f7/a3/05f7a35f8df6c37e545206aa236d666f.jpg", 
  "https://i.pinimg.com/736x/ad/ff/61/adff61a9c69eca3760995813f25b7d2a.jpg", 
  "https://i.pinimg.com/736x/c7/35/35/c73535f60235ccdfe4abca2f475edbc8.jpg", 
];

const Banner = () => {
  return (
    <div className="bg-base-200 min-h-screen rounded-3xl my-4 md:my-10 p-4 md:p-8 relative overflow-hidden flex items-center">

      {/* Floating Background Shapes (Hidden on very small screens to save performance/visual noise) */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute top-20 right-40 w-52 h-52 rounded-full bg-primary/30 blur-3xl hidden sm:block"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 7 }}
        className="absolute bottom-16 left-20 w-40 h-40 rounded-full bg-primary/30 blur-3xl hidden sm:block"
      />

      <div className="hero-content flex-col lg:flex-row-reverse gap-8 lg:gap-16 relative z-10 w-full max-w-7xl mx-auto px-0">

        {/* ======================
              RIGHT SIDE GRID (Images)
        ======================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          // RESPONSIVE FIX: 2 columns on mobile, 3 on larger screens
          className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4"
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="rounded-2xl overflow-hidden shadow-xl border border-base-100/30 backdrop-blur-sm"
              whileHover={{ scale: 1.06 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {/* RESPONSIVE FIX: Smaller images on mobile (w-28) to fit screen */}
              <img
                src={img}
                alt={`Impact ${index}`}
                className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 object-cover"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* ======================
              LEFT SIDE TEXT
        ======================= */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 max-w-xl lg:text-left text-center w-full"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-base-content">
            Make an Impact. <br className="hidden md:block" />
            <span className="logo-font text-primary"> Serve </span> 
            Your Community.
          </h1>

          <p className="text-base-content/70 text-base md:text-lg leading-relaxed px-2 lg:px-0">
            Together, we can create meaningful change — from tree plantation
            drives, child education sessions, food donation, cleaning
            campaigns, and community marathons.
          </p>

          {/* Buttons - Stack vertically on very small screens, row on others */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4 w-full sm:w-auto">

            <Link to="/events" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary w-full sm:w-auto px-8 shadow-lg shadow-primary/30 flex items-center justify-center gap-2 rounded-xl"
              >
                Explore Events <FaArrowRight />
              </motion.button>
            </Link>

            <Link to="/create-event" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-outline btn-primary w-full sm:w-auto px-8 flex items-center justify-center gap-2 rounded-xl"
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