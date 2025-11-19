import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkedAlt, FaUsers, FaPlusCircle, FaChartLine } from "react-icons/fa";

const featureData = [
  {
    icon: <FaMapMarkedAlt size={30} />,
    title: "Discover Local Events",
    desc: "Easily find social development events happening around your area.",
    bg: "bg-green-100",
    color: "text-green-600"
  },
  {
    icon: <FaPlusCircle size={30} />,
    title: "Create Your Own Event",
    desc: "Host community-driven events and invite volunteers instantly.",
    bg: "bg-blue-100",
    color: "text-blue-600"
  },
  {
    icon: <FaUsers size={30} />,
    title: "Join & Volunteer",
    desc: "Participate in meaningful activities and contribute to social improvement.",
    bg: "bg-yellow-100",
    color: "text-yellow-600"
  },
  {
    icon: <FaChartLine size={30} />,
    title: "Track Your Impact",
    desc: "View stats on events joined, hours served, and achievements earned.",
    bg: "bg-purple-100",
    color: "text-purple-600"
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-base-100">
      <motion.div
        className="text-center space-y-3 mb-14"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold">Our Features</h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Explore powerful tools that help you create, join, and manage community service events effortlessly.
        </p>
      </motion.div>

      {/* Animated Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 md:px-16">
        {featureData.map((item, index) => (
          <motion.div
            key={index}
            className="text-center space-y-4 p-6 rounded-xl bg-base-200 hover:shadow-xl transition-all"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className={`mx-auto ${item.bg} ${item.color} p-4 rounded-full w-16 h-16 flex items-center justify-center`}
              whileHover={{ rotate: 10 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {item.icon}
            </motion.div>

            <h3 className="font-bold text-lg">{item.title}</h3>
            <p className="text-gray-500 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
