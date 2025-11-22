import React, { useEffect, useState, use } from "react";
import { useParams, useNavigate, useLoaderData } from "react-router";
import { motion } from "framer-motion";
import { MapPin, CalendarDays, User2 } from "lucide-react";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";

const EventDetails = () => {
  const eventData = useLoaderData();
  const [event, setEvent] = useState(eventData);
  const [alreadyJoined, setAlreadyJoined] = useState(false);

  const navigate = useNavigate();
  const { user } = use(AuthContext);
  const { id } = useParams();

  //  IF USER ALREADY JOINED
  useEffect(() => {
    if (!user) return;

    fetch(`https://serveup-server.vercel.app/joined-events/check?eventId=${id}&email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.joined) {
          setAlreadyJoined(true);
        }
      })
      .catch((err) => console.log(err));
  }, [user, id]);

  //HANDLE JOIN EVENT
  const handleJoinEvent = () => {
    if (!user) {
      navigate("/auth/login");
      return;
    }

    if (alreadyJoined) {
      toast.error("You have already joined this event!");
      return;
    }

    const joinData = {
      eventId: event._id,
      title: event.title,
      description: event.description,
      eventType: event.eventType,
      thumbnail: event.thumbnail,
      location: event.location,
      eventDate: event.eventDate,
      createdBy: event.createdBy,
      userEmail: user.email,
      userName: user.displayName || user.name || "Unknown User",
      joinedAt: new Date(),
    };

    fetch(`https://serveup-server.vercel.app/joined-events`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(joinData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully joined the event!");
        setAlreadyJoined(true);
        navigate('/joined-events');
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to join.");
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="container mx-auto px-4 py-10"
    >
       <title>Event Details || ServeUp</title>
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
          <motion.button
            whileTap={{ scale: alreadyJoined ? 1 : 0.95 }}
            className={`btn mt-6 px-6 py-3 text-lg 
              ${alreadyJoined ? "btn-disabled bg-gray-400 text-white" : "btn-primary"}
            `}
            onClick={handleJoinEvent}
            disabled={alreadyJoined}
          >
            {alreadyJoined ? "Already Joined" : "Join Event"}
          </motion.button>

        </div>
      </div>
    </motion.div>
  );
};

export default EventDetails;
