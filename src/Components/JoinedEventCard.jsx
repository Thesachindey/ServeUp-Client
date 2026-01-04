import React from "react";
import { motion } from "framer-motion";
import { MapPin, CalendarDays, User, Trash2 } from "lucide-react"; 
import { useNavigate } from "react-router"; 
import Swal from "sweetalert2";

const JoinedEventCard = ({ event, setEvents }) => {

  const navigate = useNavigate();

  const handleDelete = () => {
    Swal.fire({
      title: "Cancel Registration?",
      text: "You are about to leave this event. This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, Cancel Registration",
      cancelButtonText: "Keep Spot"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://serveup-server.vercel.app/joined-events/${event._id}`, {
          method: "DELETE"
        })
          .then((res) => res.json())
          .then((data) => {
            if(data.deletedCount > 0) {
                Swal.fire({
                    title: "Cancelled!",
                    text: "You have successfully left the event.",
                    icon: "success",
                    timer: 1500,
                    showConfirmButton: false
                });
                navigate("/upcoming-event"); 
            }
          })
          .catch((err) => {
              console.error(err);
              Swal.fire("Error", "Failed to cancel event", "error");
          });
      }
    });
  };

  const {
    title,
    eventType,
    thumbnail,
    location,
    eventDate,
    createdBy,
  } = event;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      className="h-full w-full"
    >
      <div className="card bg-base-100 w-full h-full shadow-md hover:shadow-xl border border-base-200 dark:border-base-content/10 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col">

        {/* Thumbnail Section */}
        <figure className="h-40 sm:h-48 w-full overflow-hidden relative">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
          />
          {/* Status Badge */}
          <div className="absolute top-3 right-3">
             <span className="badge badge-success text-white font-bold shadow-sm flex items-center gap-1">
                ✓ JOINED
             </span>
          </div>
        </figure>

        {/* Content Body */}
        <div className="card-body p-4 flex flex-col flex-grow">

          {/* Title */}
          <div className="mb-2">
             <h2 className="card-title text-base md:text-lg font-bold text-base-content line-clamp-1">
               {title}
             </h2>
          </div>

          {/* Metadata Info */}
          <div className="flex flex-col gap-2 text-xs sm:text-sm mt-1 mb-6 text-base-content/70">
            
            <div className="flex items-start gap-2">
              <MapPin size={16} className="text-success shrink-0 mt-0.5" />
              <span className="truncate w-full">{location || "Location TBD"}</span>
            </div>

            {eventDate && (
              <div className="flex items-center gap-2">
                <CalendarDays size={16} className="text-primary shrink-0" />
                <span>{new Date(eventDate).toLocaleDateString()}</span>
              </div>
            )}

            <div className="flex items-center gap-2">
              <User size={16} className="text-secondary shrink-0" />
              <span className="truncate">Org: {createdBy || "Community"}</span>
            </div>

          </div>

          {/* Footer Actions (Pushed to bottom) */}
          <div className="card-actions justify-between items-center mt-auto pt-3 border-t border-base-200 dark:border-base-content/10">
            
            {/* Category Badge */}
            <div className="badge badge-ghost badge-sm opacity-80">
              {eventType}
            </div>
            
            {/* Cancel Button */}
            <button 
                onClick={handleDelete}
                className="btn btn-sm btn-outline btn-error hover:text-white flex items-center gap-1 transition-all rounded-lg"
            >
              <Trash2 size={14} />
              <span className="text-xs">Cancel</span>
            </button>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default JoinedEventCard;