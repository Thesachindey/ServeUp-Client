import React, { useContext, useEffect, useState } from 'react';
import { 
    BarChart, 
    Bar, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Legend
} from 'recharts';
import { Calendar, Users, TrendingUp, Activity } from 'lucide-react';
import { AuthContext } from '../provider/AuthProvider';

const DashboardOverview = () => {
    const { user } = useContext(AuthContext);
    const [createdEvents, setCreatedEvents] = useState([]);
    const [joinedEvents, setJoinedEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch Data
    useEffect(() => {
        if (user?.email) {
            const fetchData = async () => {
                try {
                    // 1. Fetch Events Created by User
                    const createdRes = await fetch(`https://serveup-server.vercel.app/my-events?email=${user.email}`);
                    const createdData = await createdRes.json();

                    // 2. Fetch Events Joined by User
                    const joinedRes = await fetch(`https://serveup-server.vercel.app/my-joined-events?email=${user.email}`);
                    const joinedData = await joinedRes.json();

                    setCreatedEvents(createdData);
                    setJoinedEvents(joinedData);
                    setLoading(false);
                } catch (error) {
                    console.error("Error fetching dashboard data:", error);
                    setLoading(false);
                }
            };
            fetchData();
        }
    }, [user?.email]);

    
    // Chart 1: Simple Comparison (Pie)
    const pieData = [
        { name: 'Organized', value: createdEvents.length },
        { name: 'Joined', value: joinedEvents.length },
    ];
    const COLORS = ['#10B981', '#3B82F6']; // Green (Primary) & Blue (Secondary)

    // Chart 2: Activity Breakdown (Bar Chart)
    const typeCount = joinedEvents.reduce((acc, curr) => {
        const type = curr.eventType || 'Other';
        acc[type] = (acc[type] || 0) + 1;
        return acc;
    }, {});

    const barData = Object.keys(typeCount).map(key => ({
        name: key,
        count: typeCount[key]
    }));

    // If no data, show placeholder
    const finalBarData = barData.length > 0 ? barData : [{name: 'No Data', count: 0}];


    if (loading) {
        return (
            <div className="flex justify-center items-center h-[50vh]">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }

    return (
        <div className="space-y-6 md:space-y-8 animate-in fade-in duration-500 pb-10">
            
            {/* 1. Header Section */}
            <div className="px-1">
                <h1 className="text-2xl md:text-3xl font-bold text-base-content">
                    Dashboard Overview
                </h1>
                <p className="text-sm md:text-base text-base-content/60 mt-1">
                    Welcome back, {user?.displayName}! Here's what's happening with your account.
                </p>
            </div>

            {/* 2. Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                
                {/* Stat 1 */}
                <div className="stat bg-base-100 shadow-sm border border-base-200 rounded-2xl p-4 md:p-6">
                    <div className="stat-figure text-primary">
                        <Users size={28} className="md:w-8 md:h-8" />
                    </div>
                    <div className="stat-title text-xs md:text-sm">Total Organized</div>
                    <div className="stat-value text-primary text-2xl md:text-4xl">{createdEvents.length}</div>
                    <div className="stat-desc text-xs">Events you created</div>
                </div>

                {/* Stat 2 */}
                <div className="stat bg-base-100 shadow-sm border border-base-200 rounded-2xl p-4 md:p-6">
                    <div className="stat-figure text-secondary">
                        <Calendar size={28} className="md:w-8 md:h-8" />
                    </div>
                    <div className="stat-title text-xs md:text-sm">Total Joined</div>
                    <div className="stat-value text-secondary text-2xl md:text-4xl">{joinedEvents.length}</div>
                    <div className="stat-desc text-xs">Events you volunteered for</div>
                </div>

                {/* Stat 3 (Calculated Impact) */}
                <div className="stat bg-base-100 shadow-sm border border-base-200 rounded-2xl p-4 md:p-6">
                    <div className="stat-figure text-accent">
                        <Activity size={28} className="md:w-8 md:h-8" />
                    </div>
                    <div className="stat-title text-xs md:text-sm">Impact Score</div>
                    <div className="stat-value text-accent text-2xl md:text-4xl">
                        {(createdEvents.length * 10) + (joinedEvents.length * 5)}
                    </div>
                    <div className="stat-desc text-xs">Based on activity</div>
                </div>

                 {/* Stat 4 */}
                 <div className="stat bg-base-100 shadow-sm border border-base-200 rounded-2xl p-4 md:p-6">
                    <div className="stat-figure text-warning">
                        <TrendingUp size={28} className="md:w-8 md:h-8" />
                    </div>
                    <div className="stat-title text-xs md:text-sm">Success Rate</div>
                    <div className="stat-value text-warning text-2xl md:text-4xl">98%</div>
                    <div className="stat-desc text-xs">Community Feedback</div>
                </div>

            </div>

            {/* 3. Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                
                {/* Left: Bar Chart (Joined by Category) */}
                <div className="bg-base-100 p-4 md:p-6 rounded-3xl shadow-sm border border-base-200 min-w-0">
                    <h3 className="text-lg font-bold mb-4 md:mb-6">Volunteering Preferences</h3>
                    {/* min-w-0 fixes grid overflow issues */}
                    <div className="h-72 w-full min-w-0">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={finalBarData} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12}} />
                                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12}} />
                                <Tooltip 
                                    contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                    cursor={{fill: 'transparent'}}
                                />
                                <Bar dataKey="count" fill="#10B981" radius={[4, 4, 0, 0]} barSize={40} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Right: Pie Chart (Created vs Joined) */}
                <div className="bg-base-100 p-4 md:p-6 rounded-3xl shadow-sm border border-base-200 min-w-0">
                    <h3 className="text-lg font-bold mb-4 md:mb-6">Participation Split</h3>
                    <div className="h-72 w-full flex items-center justify-center min-w-0">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={pieData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend verticalAlign="bottom" height={36} iconType="circle"/>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* 4. Recent Activity List */}
            <div className="bg-base-100 p-4 md:p-6 rounded-3xl shadow-sm border border-base-200 overflow-hidden">
                <div className="flex justify-between items-center mb-4 md:mb-6">
                    <h3 className="text-lg font-bold">Recent Joined Events</h3>
                    <button className="btn btn-sm btn-ghost text-xs md:text-sm">View All</button>
                </div>
                
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full text-sm md:text-base">
                        {/* head */}
                        <thead className="bg-base-200/50">
                            <tr>
                                <th className="rounded-l-lg">Event Title</th>
                                <th>Category</th>
                                <th>Date</th>
                                <th className="rounded-r-lg">Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            {joinedEvents.slice(0, 5).map((event) => (
                                <tr key={event._id}>
                                    <td className="font-semibold min-w-[150px]">{event.title}</td>
                                    <td>
                                        <span className="badge badge-ghost badge-sm whitespace-nowrap">{event.eventType}</span>
                                    </td>
                                    <td className="whitespace-nowrap">{new Date(event.eventDate).toLocaleDateString()}</td>
                                    <td className="min-w-[120px]">{event.location}</td>
                                </tr>
                            ))}
                            {joinedEvents.length === 0 && (
                                <tr>
                                    <td colSpan="4" className="text-center py-8 text-base-content/50">
                                        No recent activity found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default DashboardOverview;