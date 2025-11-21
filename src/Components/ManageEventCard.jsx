import React from "react";
import { motion } from "framer-motion";
import { MapPin, CalendarDays, User2, MoveRight } from "lucide-react";
import { Link } from "react-router";


const ManageEventCard = ({ event }) => {
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
      whileHover={{ scale: 1.03 }}
      className="cursor-pointer"
    >
      <Link to={`/manage-event-details/${_id}`} className="card bg-base-100 w-full h-full shadow-md hover:shadow-xl border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 relative">

        {/* Thumbnail */}
        <figure className="h-48 w-full overflow-hidden">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
          />
        </figure>

        <div className="card-body space-y-3">

          {/* Title */}
          <h2 className="card-title text-xl font-bold">
            {title} <span className="badge bg-green-400 text-white">new</span>
          </h2>

          {/* Description */}
          {/* <p className="text-sm text-gray-600">{description}</p> */}

          {/* Event Info */}
          <div className="flex flex-col gap-2 text-sm mt-3 mb-8 ">

            <div className="flex items-center gap-2 text-green-500 font-medium">
              <MapPin size={18} />
              <span>{location}</span>
            </div>

            {eventDate && (
              <div className="flex items-center gap-2 text-blue-500">
                <CalendarDays size={18} />
                <span>{eventDate}</span>
              </div>
            )}

            <div className="flex items-center gap-2 text-gray-500">
              {/* <User2 size={18} /> */}
              {/* <span>By {createdBy || "Unknown"}</span> */}
            </div>
          </div>

          {/* Categories / Tags */}
          <div className="card-actions justify-between absolute bottom-5 left-3 right-3 ">
            <div className="badge badge-success badge-outline py-3 px-4">
              {eventType}
            </div>
            <Link to={`/manage-event-details/${_id}`}>
              <h1 className="text-blue-500 hover:text-blue-400 flex justify-center items-center">Manage event...</h1>
            </Link>
          </div>
        </div>
      </Link>
    </motion.div>

  );
};

export default ManageEventCard;
