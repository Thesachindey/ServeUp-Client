import React from "react";
import { motion } from "framer-motion";
import { MapPin, CalendarDays, ArrowRight } from "lucide-react";
import { Link } from "react-router"; 

const EventCard = ({ event }) => {
  const {
    _id,
    title,
    eventType,
    thumbnail,
    location,
    eventDate,
  } = event;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      className="h-full w-full"
    >
      <Link
        to={`/event-details/${_id}`}
        className="card bg-base-100 w-full h-full shadow-md hover:shadow-xl border border-base-200 dark:border-base-content/10 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col"
      >
        <figure className="h-40 sm:h-48 w-full overflow-hidden relative">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
          />
          <div className="absolute top-3 right-3">
            <span className="badge badge-success text-white text-xs font-bold shadow-sm">NEW</span>
          </div>
        </figure>

        <div className="card-body p-4 flex flex-col flex-grow">
          
          <div className="mb-2">
            <h2 className="card-title text-base md:text-lg font-bold text-base-content line-clamp-2 leading-snug min-h-[2.5rem]">
              {title}
            </h2>
          </div>

          <div className="flex flex-col gap-2 text-xs sm:text-sm mt-1 mb-4 text-base-content/70">
            <div className="flex items-start gap-2">
              <MapPin size={16} className="text-success shrink-0 mt-0.5" />
              <span className="truncate w-full">{location || "Location TBD"}</span>
            </div>

            {eventDate && (
              <div className="flex items-center gap-2">
                <CalendarDays size={16} className="text-primary shrink-0" />
                <span>{eventDate}</span>
              </div>
            )}
          </div>

          <div className="card-actions justify-between items-center mt-auto pt-3 border-t border-base-200 dark:border-base-content/10">
            <div className="badge badge-ghost badge-sm opacity-80">
              {eventType}
            </div>

            <div className="flex items-center gap-1 text-primary text-sm font-semibold group">
              <span className="group-hover:underline">Details</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>
      </Link>
    </motion.div>
  );
};

export default EventCard;