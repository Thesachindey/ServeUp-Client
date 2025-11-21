import React from 'react';
import { Link, useLoaderData } from 'react-router';
import JoinedEventCard from '../../Components/JoinedEventCard';

const JoinedEvent = () => {

    const eventsData = useLoaderData();
    console.log(eventsData);



    return (
        <div>



            {
                eventsData.length == 0
                    ?
                    <div className="flex flex-col items-center justify-center text-center min-h-screen px-4 gap-5">

                        <h2 className=" logo-font text-4xl font-bold">
                            No joined <span className="text-green-500 logo-font">events</span> found.
                        </h2>
                        <Link to="/upcoming-event" className='btn btn-outline hover:bg-green-500 hover:text-white' >Explore Events</Link>
                    </div>
                    :



                    <div>
                        <div className="flex flex-col items-center justify-center text-center my-12 px-4 gap-2.5">

                            <h2 className=" text-4xl font-bold">Joined <span className="text-green-500 logo-font">Events</span> by {eventsData[0]?.userName || "Unknown User"}</h2>
                            <p className="text-gray-300 max-w-xl mx-auto">
                                Stay tuned for upcoming social development events in your community. Check back soon for new opportunities to get involved and make a difference!
                            </p>
                        </div>

                        {/* card  */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full h-full">
                            {
                                eventsData.map((event) => <JoinedEventCard event={event} key={event._id} />)
                            }
                        </div>
                    </div>}
        </div>
    );
};

export default JoinedEvent;