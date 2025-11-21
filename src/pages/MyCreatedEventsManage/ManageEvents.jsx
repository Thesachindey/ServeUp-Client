import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import ManageEventCard from '../../Components/ManageEventCard';
import { Link } from 'react-router';

const ManageEvents = () => {
  const { user } = use(AuthContext);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    //   setLoading(true);

    fetch(`http://localhost:3000/my-events?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch(() => setLoading(false)); // optional safety
  }, [user?.email]); // only run when email changes

  if (loading) {
    return <div>Please wait ... Loading...</div>;
  }





  return (
    <div>


      { 
 
                events.length == 0
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

          <h2 className=" text-4xl font-bold">Manage <span className="text-green-500 logo-font">Events</span></h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Here you can view, edit, and manage all your events in one place.
          </p>
        </div>

        {/* card  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full h-full">
          {
            events.map((event) => <ManageEventCard event={event} key={event._id} />)
          }
        </div>
      </div>}
    </div>
  );
};

export default ManageEvents;