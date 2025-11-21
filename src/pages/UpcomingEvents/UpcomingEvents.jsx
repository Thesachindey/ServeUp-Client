import React from 'react';
import { useLoaderData } from 'react-router';
import EventCard from '../../Components/EventCard';

const UpcomingEvents = () => {

    const eventsData = useLoaderData();
    console.log(eventsData);

    return (
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
                    eventsData.map((event) => <EventCard event={event} key={event._id} />)
                }
            </div>
        </div>
    );
};

export default UpcomingEvents;