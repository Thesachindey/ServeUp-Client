import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "Volunteer",
      image: "https://i.pravatar.cc/150?img=1", // Random avatar placeholder
      text: "I wanted to give back to my community but didn't know where to start. ServeUp made it so easy to find a beach cleanup near me. The team was welcoming and I made great friends!",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Event Organizer",
      image: "https://i.pravatar.cc/150?img=11",
      text: "Organizing a food drive used to be a logistical nightmare. With this platform, managing volunteers and tracking donations is effortless. Highly recommended for NGOs.",
      rating: 5,
    },
    {
      id: 3,
      name: "Priya Patel",
      role: "Student Volunteer",
      image: "https://i.pravatar.cc/150?img=5",
      text: "The 'Impact Tracking' feature is amazing. I can actually see how many hours I've contributed and add it to my CV. It feels good to see the numbers go up!",
      rating: 4,
    },
  ];

  return (
    <section className="py-24 bg-base-200 rounded-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-base-content">
            Voices of the <span className="text-primary logo-font">Community</span>
          </h2>
          <p className="mt-4 text-lg text-base-content/70 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from the people making a difference every day.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ReviewCard key={review.id} review={review} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ReviewCard = ({ review, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative p-8 bg-base-100 rounded-3xl border border-base-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      {/* Quote Icon (Decoration) */}
      <div className="absolute top-8 right-8 text-primary/10">
        <Quote size={48} fill="currentColor" />
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-6 text-orange-400">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={18} 
            fill={i < review.rating ? "currentColor" : "none"} 
            className={i < review.rating ? "" : "text-base-300"}
          />
        ))}
      </div>

      {/* Content */}
      <p className="text-base-content/80 leading-relaxed mb-6 italic relative z-10 flex-grow">
        "{review.text}"
      </p>

      {/* Author Info */}
      <div className="flex items-center gap-4 mt-auto">
        <div className="avatar">
          <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={review.image} alt={review.name} />
          </div>
        </div>
        <div>
          <h4 className="font-bold text-base-content">{review.name}</h4>
          <p className="text-xs text-base-content/60 uppercase tracking-wide font-semibold">{review.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;