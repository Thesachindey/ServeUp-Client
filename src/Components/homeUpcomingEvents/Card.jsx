import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router'; // Standard import for web

const Card = ({ event, index }) => {
  // Parsing date from 'eventDate'
  const dateObj = new Date(event.eventDate);
  const month = dateObj.toLocaleString('default', { month: 'short' });
  const day = dateObj.getDate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      // Applied rounded-3xl here for the modern look
      className="card bg-base-100 shadow-xl hover:shadow-2xl  transition-all duration-300 border border-white group overflow-hidden rounded-3xl "
    >
      {/* Image Container */}
      <figure className="relative h-56 overflow-hidden">
        <img
          src={event.thumbnail} 
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* DARK MODE FIX: Changed bg-white/90 to bg-base-100/90 */}
        <div className="absolute top-4 left-4 bg-base-100/90 backdrop-blur-sm rounded-2xl p-3 text-center min-w-[70px] shadow-lg">
          {/* DARK MODE FIX: Changed text-neutral to text-base-content */}
          <span className="block text-sm font-bold text-base-content/60 uppercase tracking-wider">{month}</span>
          <span className="block text-3xl font-black text-primary leading-none">{day}</span>
        </div>
      </figure>

      <div className="card-body p-6">
        {/* Title - DARK MODE FIX: text-base-content adapts to light/dark */}
        <h3 className="card-title text-xl font-bold text-base-content group-hover:text-primary transition-colors h-14 overflow-hidden">
          {event.title}
        </h3>

        {/* Location & Type */}
        <div className="flex items-center gap-4 text-sm text-base-content/70 mt-2 mb-4">
          <div className="flex items-center gap-1">
            <MapPin size={16} className="text-primary" />
            <span className="truncate max-w-[150px]">{event.location || "Remote"}</span>
          </div>
          <div className="badge badge-ghost badge-sm">{event.category || "Volunteer"}</div>
        </div>

        {/* Description Snippet - DARK MODE FIX: text-base-content/60 */}
        <p className="text-base-content/60 text-sm line-clamp-2 mb-6 h-10">
          {event.description}
        </p>

        {/* Action Button */}
        <div className="card-actions justify-end mt-auto">
          <Link to={`/event-details/${event._id}`} className="btn btn-primary btn-sm w-full rounded-xl">
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;