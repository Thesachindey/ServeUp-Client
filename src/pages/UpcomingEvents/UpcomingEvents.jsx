import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import EventCard from '../../Components/EventCard';
import LoadingPage from '../LoadingPage/LoadingPage';

const UpcomingEvents = () => {

    const eventsData = useLoaderData();
    // console.log(eventsData);
    const upcomingEvents = eventsData.filter(event => new Date(event.eventDate) > new Date());
   
    return (
        <div>
            <title>Upcoming Events || ServeUp</title>
            {

                upcomingEvents.length == 0
                    ?
                    <div className="flex flex-col items-center justify-center text-center min-h-screen px-4 gap-5">

                        <h2 className=" logo-font text-4xl font-bold">
                            No <span className="text-green-500 logo-font">events</span> found.
                        </h2>
                        <Link to="/create-event" className='btn btn-outline hover:bg-green-500 hover:text-white' >Create Your Own Events</Link>
                    </div>
                    :


                    <div>
                        <div className="flex flex-col items-center justify-center text-center my-12 px-4 gap-2.5">

                            <h2 className=" text-4xl font-bold">Upcoming <span className="text-green-500 logo-font">Events</span></h2>
                            <p className="text-gray-300 max-w-xl mx-auto">
                                Stay tuned for upcoming social development events in your community. Check back soon for new opportunities to get involved and make a difference!
                            </p>
                        </div>

                        {/* card  */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full h-full">
                            {
                                upcomingEvents.map((event) => <EventCard event={event} key={event._id} />)
                            }
                        </div>
                    </div>}
        </div>
    );
};

export default UpcomingEvents;