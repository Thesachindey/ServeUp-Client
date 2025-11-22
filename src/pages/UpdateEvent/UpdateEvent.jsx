
import { nav } from 'framer-motion/client';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import toast, { Toaster } from 'react-hot-toast';
import { Navigate, useLoaderData, useNavigate } from 'react-router';

const UpdateEvent = () => {
    const data = useLoaderData();
    const [event, setEvent] = useState(data);
    const navigate = useNavigate();

    // Title validation
    const [title, setTitle] = useState(event.title);
    const [titleError, setTitleError] = useState("");

    const handleTitleChange = (e) => {
        const value = e.target.value;
        setTitle(value);

        const wordCount = value.trim().split(/\s+/).length;
        setTitleError(wordCount > 10 ? "Title must be 10 words or less" : "");
    };


    const handleCreateEvent = async (e) => {
        e.preventDefault();

        if (titleError) {
            toast.error("Please fix the title before submitting!");
            return;
        }

        if (!eventDate || eventDate <= new Date()) {
            toast.error("Please select a future date!", { id: "date-error" });
            return;
        }

        const form = e.target;

        const newEvent = {
            title: title,
            description: form.description.value,
            eventType: form.type.value,
            thumbnail: form.thumbnail.value,
            location: form.location.value,
            eventDate: eventDate.toISOString().split("T")[0],
        };

        fetch(`https://serveup-server.vercel.app/events/${event._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newEvent),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                toast.success("Successfully updated!");
                navigate(`/manage-event-details/${event._id}`);
            })
            .catch((err) => {
                console.log(err);
            });
    };




    // Event Date
    const [eventDate, setEventDate] = useState(new Date(event.eventDate));

    return (
        <div className="py-12">
             <title>Update Event</title>
            <Toaster />

            {/* Header */}
            <div className="flex flex-col items-center justify-center text-center my-12 px-4 gap-2.5">
                <h2 className="text-4xl font-bold">
                    Update your <span className="text-green-500 logo-font">Events</span>
                </h2>
                <p className="text-gray-300 max-w-xl mx-auto">
                    Make changes to your existing events and keep them up-to-date with ease.
                </p>
            </div>

            {/* Card */}
            <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl">
                <div className="card-body p-6 relative">
                    <h2 className="font-bold mb-6">
                        Edit event <span className="text-green-400 logo-font">details</span> :
                    </h2>

                    <form onSubmit={handleCreateEvent} className="space-y-4">

                        {/* Title */}
                        <div>
                            <label className="label font-medium">Event Title</label>
                            <input
                                type="text"
                                name="title"
                                value={title}
                                onChange={handleTitleChange}
                                required
                                className={`input w-full rounded-full focus:outline-gray-300 
                                    ${titleError ? "border-red-500" : ""}`}
                                placeholder="Enter event title"
                            />

                            {titleError && (
                                <p className="text-red-500 text-sm mt-1">{titleError}</p>
                            )}
                        </div>

                        {/* Event Type */}
                        <div>
                            <label className="label font-medium">Event Type</label>
                            <select
                                name="type"
                                defaultValue={event.eventType}
                                required
                                className="select w-full rounded-full focus:outline-gray-300"
                            >
                                <option disabled value="">Select event type</option>
                                <option value="Cleanup">Cleanup</option>
                                <option value="Plantation">Tree Plantation</option>
                                <option value="Donation">Donation</option>
                                <option value="Child Education">Child Education Session</option>
                                <option value="Senior Care">Senior Care Visit</option>
                                <option value="Health Camp">Free Health Camp</option>
                                <option value="Animal Care">Street Animal Care</option>
                                <option value="Road Safety Campaign">Road Safety Campaign</option>
                                <option value="Mental Health Support">Mental Health Support Event</option>
                                <option value="Volunteer Marathon">Volunteer Marathon</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        {/* Description */}
                        <div>
                            <label className="label font-medium">Description</label>
                            <textarea
                                name="description"
                                required
                                defaultValue={event.description}
                                rows="3"
                                className="textarea w-full rounded-2xl focus:outline-gray-300 h-[200px]"
                                placeholder="Write about the event..."
                            ></textarea>
                        </div>

                        {/* Thumbnail */}
                        <div>
                            <label className="label font-medium">Thumbnail URL</label>
                            <input
                                type="url"
                                name="thumbnail"
                                defaultValue={event.thumbnail}
                                required
                                className="input w-full rounded-full focus:outline-gray-300"
                                placeholder="https://example.com/image.jpg"
                            />
                        </div>

                        {/* Location */}
                        <div>
                            <label className="label font-medium">Location</label>
                            <input
                                type="text"
                                name="location"
                                defaultValue={event.location}
                                required
                                className="input w-full rounded-full focus:outline-gray-300"
                                placeholder="Mirpur 10, Dhaka"
                            />
                        </div>

                        {/* Event Date */}
                        <div>
                            <label className="label font-medium">Event Date</label>
                            <DatePicker
                                selected={eventDate}
                                onChange={(date) => setEventDate(date)}
                                minDate={new Date()}
                                className="input w-full rounded-full focus:outline-gray-300"
                                dateFormat="dd MMMM yyyy"
                                required
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="btn w-full text-white mt-6 rounded-md bg-green-400 hover:bg-green-500 btn-outline border-black transition-colors cursor-pointer"
                        >
                            Update Event
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateEvent;
