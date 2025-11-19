import React, { useState, useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast, { Toaster } from "react-hot-toast";
import { FaCalendarAlt, FaMapMarkerAlt, FaImage, FaListUl } from "react-icons/fa";
import { useNavigate } from "react-router";

const CreateEvent = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [eventDate, setEventDate] = useState(null);

    const handleCreateEvent = async (e) => {
        e.preventDefault();

        if (!eventDate || eventDate <= new Date()) {
            toast.error("Please select a future date!", { id: "date-error" });
            return;
        }

        const form = e.target;

        const newEvent = {
            title: form.title.value,
            description: form.description.value,
            type: form.type.value,
            thumbnail: form.thumbnail.value,
            location: form.location.value,
            date: eventDate,
            created_by: user.email,
            created_at: new Date(),
        };

        const res = await fetch("https://your-server-url/events", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(newEvent),
        });

        const data = await res.json();

        if (data.insertedId) {
            toast.success("Event Created Successfully!");
            setTimeout(() => navigate("/events"), 1500);
        }
    };

    return (
        <div className="py-12">
            <Toaster />

            <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl">
                <div className="card-body p-6 relative">
                    <h2 className="  text-3xl font-bold text-center mb-6">
                        Create New <span className="text-green-500 logo-font">Event</span>
                    </h2>

                    <form onSubmit={handleCreateEvent} className="space-y-4">
                        {/* Title */}
                        <div>
                            <label className="label font-medium">Event Title</label>
                            <input
                                type="text"
                                name="title"
                                required
                                className="input w-full rounded-full focus:outline-gray-300"
                                placeholder="Enter event title"
                            />
                        </div>

                        {/* Event Type */}
                        <div>
                            <label className="label font-medium">Event Type</label>
                            <div className="relative">
                                <FaListUl className="absolute left-4 top-[13px] text-gray-500" />
                                <select
                                    defaultValue=""
                                    name="type"
                                    required
                                    className="select w-full rounded-full pl-10 focus:outline-gray-300"
                                >
                                    <option value="" disabled>
                                        Select event type
                                    </option>
                                    <option value="Cleanup">Cleanup</option>
                                    <option value="Plantation">Tree Plantation</option>
                                    <option value="Donation">Food Donation</option>
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
                        </div>

                        {/* Description */}
                        <div>
                            <label className="label font-medium">Description</label>
                            <textarea
                                name="description"
                                required
                                rows="3"
                                className="textarea w-full rounded-2xl focus:outline-gray-300 h-[200px]"
                                placeholder="Write about the event..."
                            ></textarea>
                        </div>

                        {/* Thumbnail */}
                        <div>
                            <label className="label font-medium">Thumbnail URL</label>
                            <div className="relative">
                                <FaImage className="absolute left-4 top-[13px] text-gray-500" />
                                <input
                                    type="url"
                                    name="thumbnail"
                                    required
                                    className="input w-full rounded-full pl-10 focus:outline-gray-300"
                                    placeholder="https://example.com/image.jpg"
                                />
                            </div>
                        </div>

                        {/* Location */}
                        <div>
                            <label className="label font-medium">Location</label>
                            <div className="relative">
                                <FaMapMarkerAlt className="absolute left-4 top-[13px] text-gray-500" />
                                <input
                                    type="text"
                                    name="location"
                                    required
                                    className="input w-full rounded-full pl-10 focus:outline-gray-300"
                                    placeholder="Mirpur 10, Dhaka"
                                />
                            </div>
                        </div>

                        {/* Event Date */}
                        <div>
                            <label className="label font-medium">Event Date</label>
                            <div className="relative">
                                <FaCalendarAlt className="absolute left-4 top-[13px] text-gray-500" />

                                <DatePicker
                                    selected={eventDate}
                                    onChange={(date) => setEventDate(date)}
                                    minDate={new Date()}
                                    placeholderText="Select your event date."
                                    className="input w-full rounded-full pl-10 focus:outline-gray-300"
                                    dateFormat="dd MMM yyyy"
                                    required
                                />
                            </div>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="btn w-full text-white mt-6 rounded-md bg-green-400 hover:bg-green-500 btn-outline border-black transition-colors cursor-pointer"
                        >
                            Create Event
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateEvent;
