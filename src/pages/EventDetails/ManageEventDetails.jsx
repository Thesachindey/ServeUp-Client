import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { motion } from "framer-motion";
import { MapPin, CalendarDays, User2, Trash2, Pencil } from "lucide-react";
import toast from "react-hot-toast";

const ManageEventDetails = () => {
    const eventData = useLoaderData();
    const [event, setEvent] = useState(eventData);



    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="container mx-auto px-4 py-10"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                {/* Image */}
                <div className="rounded-2xl overflow-hidden shadow-lg w-full h-[400px]">
                    <motion.img
                        src={event.thumbnail}
                        alt={event.title}
                        className="w-full h-full object-cover"
                        initial={{ scale: 1.05 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.8 }}
                    />
                </div>

                {/* Details */}
                <div className="space-y-5">
                    <h1 className="text-4xl font-bold">{event.title}</h1>

                    <p className="text-gray-600 leading-relaxed">{event.description}</p>

                    <div className="space-y-2 pt-4">
                        <div className="flex items-center gap-2 text-green-500 text-lg">
                            <MapPin /> {event.location}
                        </div>

                        <div className="flex items-center gap-2 text-blue-500 text-lg">
                            <CalendarDays /> Event date: {event.eventDate}
                        </div>

                        <div className="flex items-center gap-2 text-gray-500 text-lg">
                            <User2 /> Organized by: {event.createdBy || "Unknown"}
                        </div>
                    </div>

                    <div>
                        <span className="badge badge-success badge-lg badge-outline px-4 py-3 text-base">
                            {event.eventType}
                        </span>
                    </div>

                    {/*Join Button  */}
                    <div className="flex flex-row gap-4">
                        <button className="btn btn-outline border border-black bg-green-400 hover:bg-green-500 text-white flex items-center gap-2">
                            <Pencil size={18} />
                            Update Event
                        </button>

                        <button className="btn btn-outline border border-black bg-green-400 hover:bg-green-500 text-white flex items-center gap-2">
                            <Trash2 size={18} />
                            Remove Event
                        </button>

                    </div>

                </div>
            </div>
        </motion.div>
    );
};

export default ManageEventDetails;
