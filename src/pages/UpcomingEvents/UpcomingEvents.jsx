import React, { useState, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router';
import { Search, Filter, ChevronLeft, ChevronRight,  XCircleIcon } from 'lucide-react';
import EventCard from '../../Components/EventCard';

const UpcomingEvents = () => {
    const eventsData = useLoaderData();

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const categories = ["All", ...new Set(eventsData.map(event => event.eventType))];

    const filteredEvents = eventsData
        .filter(event => {
            const isFuture = new Date(event.eventDate) > new Date();
            const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategory === "All" || event.eventType === selectedCategory;
            return isFuture && matchesSearch && matchesCategory;
        });

    const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentEvents = filteredEvents.slice(startIndex, startIndex + itemsPerPage);

    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, selectedCategory]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const clearFilters = () => {
        setSearchTerm("");
        setSelectedCategory("All");
    };

    return (
        <div className="min-h-screen bg-base-100 mt-10 rounded-3xl pb-20">
            <title>Upcoming Events || ServeUp</title>

            <div className="flex flex-col items-center justify-center text-center pt-12 pb-8 px-4 gap-3">
                <h2 className="text-3xl md:text-4xl font-bold text-base-content">
                    Upcoming <span className="text-primary logo-font">Events</span>
                </h2>
                <p className="text-base-content/60 max-w-xl mx-auto text-sm md:text-base">
                    Discover opportunities to volunteer. Use the filters below to find events that match your interests.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 mb-12">
                <div className="bg-base-200/50 backdrop-blur-sm p-4 md:p-5 rounded-3xl border border-base-200 shadow-sm flex flex-col md:flex-row gap-4 justify-between items-center">

                    <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto flex-grow">

                        <div className="relative w-full md:max-w-md group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40 group-focus-within:text-primary transition-colors" size={20} />
                            <input
                                type="text"
                                placeholder="Search events..."
                                className="input input-bordered w-full pl-11 rounded-2xl bg-base-100 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            {searchTerm && (
                                <button
                                    onClick={() => setSearchTerm("")}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-base-content/40 hover:text-error transition-colors"
                                >
                                    <XCircleIcon size={18} color='red' />
                                </button>
                            )}
                        </div>

                        <div className="relative w-full md:w-64 group">
                            <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40 group-focus-within:text-primary transition-colors" size={20} />
                            <select
                                className="select select-bordered w-full pl-11 rounded-2xl bg-base-100 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm cursor-pointer"
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                {categories.map((cat, index) => (
                                    <option key={index} value={cat}>{cat === "All" ? "All Categories" : cat}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="text-sm font-medium text-base-content/60 whitespace-nowrap px-2">
                        Found <span className="text-primary font-bold">{filteredEvents.length}</span> events
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6">
                {currentEvents.length === 0 ? (
                    <div className="flex flex-col items-center justify-center text-center py-24 gap-6 border-2 border-dashed border-base-200 rounded-3xl bg-base-50">
                        <div className="p-4 bg-base-200 rounded-full text-base-content/40">
                            <Search size={48} />
                        </div>
                        <div className="max-w-md space-y-2">
                            <h2 className="text-2xl font-bold text-base-content">
                                No events found
                            </h2>
                            <p className="text-base-content/60">
                                We couldn't find any events matching "{searchTerm}" in the {selectedCategory} category.
                            </p>
                        </div>
                        <button
                            onClick={clearFilters}
                            className="btn btn-primary btn-outline rounded-xl px-8"
                        >
                            Clear All Filters
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full h-full">
                        {currentEvents.map((event) => (
                            <EventCard event={event} key={event._id} />
                        ))}
                    </div>
                )}
            </div>

            {filteredEvents.length > itemsPerPage && (
                <div className="flex justify-center mt-16">
                    <div className="join shadow-sm border border-base-200 bg-base-100 rounded-xl p-1">

                        <button
                            className="join-item btn btn-sm md:btn-md bg-transparent border-none hover:bg-base-200 text-base-content disabled:bg-transparent"
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            <ChevronLeft size={20} />
                        </button>

                        {[...Array(totalPages)].map((_, index) => {
                            const pageNumber = index + 1;
                            return (
                                <button
                                    key={pageNumber}
                                    className={`join-item btn btn-sm md:btn-md border-none transition-all ${currentPage === pageNumber
                                        ? 'bg-primary text-primary-content shadow-md hover:bg-primary'
                                        : 'bg-transparent hover:bg-base-200 text-base-content/70'
                                        }`}
                                    onClick={() => handlePageChange(pageNumber)}
                                >
                                    {pageNumber}
                                </button>
                            );
                        })}

                        <button
                            className="join-item btn btn-sm md:btn-md bg-transparent border-none hover:bg-base-200 text-base-content disabled:bg-transparent"
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UpcomingEvents;