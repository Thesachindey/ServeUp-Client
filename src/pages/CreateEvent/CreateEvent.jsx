import React, { useState, useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast, { Toaster } from "react-hot-toast";
import { Calendar, MapPin, ImageIcon, List } from "lucide-react";
import { useNavigate } from "react-router";

const CreateEvent = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [eventDate, setEventDate] = useState(new Date());

    // validation 
    const [title, setTitle] = useState("");
    const [titleError, setTitleError] = useState("");

    const handleTitleChange = (e) => {
        const value = e.target.value;
        setTitle(value);

        const wordCount = value.trim().split(/\s+/).length;

        if (wordCount > 10) {
            setTitleError("Title must be 10 words or less");
        } else {
            setTitleError("");
        }
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
            createdBy: user.email,
            created_at: new Date(),
        };

        const res = await fetch("http://localhost:3000/events", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(newEvent),
        });

        const data = await res.json();

        if (data.insertedId) {
            toast.success("Event Created Successfully!");
            navigate("/upcoming-event");
        }
    };

    return (
        <div className="py-12">
            <Toaster />
            <div className="flex flex-col items-center justify-center text-center my-12 px-4 gap-2.5">
                <h2 className=" text-4xl font-bold">Create Your Own <span className="text-green-500 logo-font">Events</span></h2>
                <p className="text-gray-300 max-w-xl mx-auto">
                    Host community-driven events and invite volunteers instantly.
                </p>
            </div>

            <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl">
                <div className="card-body p-6 relative">
                    <h2 className=" font-bold  mb-6">
                        Fill in event <span className="text-green-400 logo-font">details</span> :
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
                            <div className="relative">
                                <List className="absolute left-4 top-[13px] text-gray-500" size={18} />

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
                               <ImageIcon className="absolute left-4 top-[13px] text-gray-500" size={18} />

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
                               <MapPin className="absolute left-4 top-[13px] text-gray-500" size={18} />

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
                             <Calendar className="absolute left-4 top-[13px] text-gray-500" size={18} />

                                <DatePicker
                                    selected={eventDate}
                                    onChange={(date) => setEventDate(date)}
                                    minDate={new Date()}
                                    placeholderText="Select your event date."
                                    className="input w-full rounded-full pl-10 focus:outline-gray-300"
                                    dateFormat="dd MMMM yyyy"
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
