import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaBroom, FaHandHoldingHeart, FaImages } from "react-icons/fa";

const galleryData = [
  {
    category: "Plantation",
    src: "https://i.pinimg.com/736x/f7/7d/11/f77d1130ed826e2039563b203c42209f.jpg",
  },
  {
    category: "Plantation",
    src: "https://i.pinimg.com/736x/cc/eb/77/cceb77091f4a35c28214c9feee04101d.jpg",
  },
  {
    category: "Cleaning",
    src: "https://i.pinimg.com/1200x/bd/43/70/bd4370cf891aa213d538038a568dbfbe.jpg",
  },
  {
    category: "Cleaning",
    src: "https://i.pinimg.com/736x/05/f7/a3/05f7a35f8df6c37e545206aa236d666f.jpg",
  },
  {
    category: "Donation",
    src: "https://i.pinimg.com/736x/ad/ff/61/adff61a9c69eca3760995813f25b7d2a.jpg",
  },
  {
    category: "Donation",
    src: "https://i.pinimg.com/736x/c7/35/35/c73535f60235ccdfe4abca2f475edbc8.jpg",
  },
  {
    category: "Donation",
    src: "https://i.pinimg.com/736x/5a/45/b6/5a45b63c8e1bca340f60ff9bd26bc3a4.jpg",
  },
];

const categories = [
  { label: "All", value: "All", icon: <FaImages /> },
  { label: "Plantation", value: "Plantation", icon: <FaLeaf /> },
  { label: "Cleaning", value: "Cleaning", icon: <FaBroom /> },
  { label: "Donation", value: "Donation", icon: <FaHandHoldingHeart /> },
];

const Gallery = () => {
  const [active, setActive] = useState("All");

  const filteredImages =
    active === "All"
      ? galleryData
      : galleryData.filter((img) => img.category === active);

  return (
    <section className="py-20">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">
          View Our <span className="text-green-500 logo-font">Gallery</span>
        </h2>
        <p className="text-gray-500 mt-2 max-w-xl mx-auto">
          Explore moments from our community service events — plantation, cleaning, donations & more.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.value}
            className={`btn btn-sm rounded-full px-5 ${
              active === cat.value
                ? "bg-green-500 text-white"
                : "btn-outline border-gray-300"
            }`}
            onClick={() => setActive(cat.value)}
          >
            <span className="mr-2">{cat.icon}</span>
            {cat.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-16">
        {filteredImages.map((img, idx) => (
          <motion.div
            key={idx}
            className="overflow-hidden rounded-xl shadow-md"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={img.src}
              alt={img.category}
              className="w-full h-64 object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
