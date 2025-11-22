import React from "react";
import { motion } from "framer-motion";
import { MapPin, CalendarDays, User2, MoveRight } from "lucide-react"; // react-icons alternative
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
// If you want react-icons instead, tell me — I’ll switch.

const JoinedEventCard = ({ event }) => {

  const navigate = useNavigate();

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://serveup-server.vercel.app/joined-events/${event._id}`, {
          method: "DELETE"
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            Swal.fire({
              title: "Cancelled!",
              text: "Your event has been cancelled.",
              icon: "success",
            });

            navigate("/upcoming-event");
          })
          .catch((err) => console.log(err));
      }
    });
  };




  const {
    _id,
    title,
    description,
    eventType,
    thumbnail,
    location,
    eventDate,
    createdBy,
    userName,
  } = event;

  return (

    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
      className="cursor-pointer"
    >
      <div className="card bg-base-100 w-full h-full shadow-md hover:shadow-xl border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 relative">

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
            {title} <span className="badge bg-green-400 text-white">Joined</span>
          </h2>

          {/* Description */}

          <div className="text-sm text-gray-600 relative">
            <p className="line-clamp-4">
              {description}
            </p>

            {description?.length > 130 && (
              <span className="absolute bottom-0 right-0">
                ...
              </span>
            )}
          </div>

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
              <User2 size={18} />
              <span>Created By: {createdBy || "Unknown"}</span>
            </div>
          </div>

          {/* Categories / Tags */}
          <div className="card-actions justify-between absolute bottom-5 left-3 right-3 ">
            <div className="badge badge-success  badge-outline py-3 px-4">
              {eventType}
            </div>
            <button onClick={handleDelete} className="btn btn-sm bg-green-400 hover:bg-green-500 text-white border-0 flex items-center gap-2">
              Cancel Event
            </button>
          </div>
        </div>
      </div>
    </motion.div>

  );
};

export default JoinedEventCard;
