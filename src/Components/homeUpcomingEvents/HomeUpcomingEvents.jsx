import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import Card from './Card';

const HomeUpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://serveup-server.vercel.app/events')
      .then((res) => res.json())
      .then((data) => {
        const upcomingEvents = data
          .filter(event => new Date(event.eventDate) > new Date())
          .sort((a, b) => new Date(a.eventDate) - new Date(b.eventDate))
          .slice(0, 3);

        setEvents(upcomingEvents);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching events:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-20 px-4 bg-base-100">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Upcoming <span className="text-primary logo-font">Events</span>
            </h2>
            <p className="text-neutral/70 max-w-xl">
              Stay tuned for upcoming social development events in your community. 
              Join a team today and make a difference!
            </p>
          </div>
          
          <Link to="/upcoming-event" className="btn btn-outline border-neutral/20 hover:bg-primary hover:text-white transition-all group rounded-full px-6">
            See All Events
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Loading Spinner */}
        {loading && (
          <div className="flex justify-center w-full py-20">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        )}

        {/* Events Grid */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.length > 0 ? (
              events.map((event, index) => (
                <Card key={event._id} event={event} index={index} />
              ))
            ) : (
              // Empty State (Styled like your request)
              <div className="col-span-full flex flex-col items-center justify-center text-center py-16 bg-base-200 rounded-3xl border-2 border-dashed border-base-300">
                <h2 className="logo-font text-2xl font-bold text-neutral/50 mb-4">
                   No <span className="text-primary">events</span> found right now.
                </h2>
                <Link to="/dashboard/create-event" className="btn btn-primary btn-sm rounded-full">
                  Create Your Own Event
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};




export default HomeUpcomingEvents;