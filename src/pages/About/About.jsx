import React from "react";
import { motion } from "framer-motion";

export default function About() {
    const tabs = ["Story", "Mission", "Impact", "Team & System"];
    const [active, setActive] = React.useState("Story");

    const content = {
        Story: (
            <div className="space-y-4">
                <p>
                    ServeUp was born from a simple realization: while there are countless people willing to help 
                    and make a difference, finding organized opportunities to do so is often difficult.
                    Social initiatives are frequently scattered across social media or lost in word-of-mouth.
                </p>
                <p>
                    We wanted to build a centralized hub where anyone can become an organizer or a volunteer. 
                    Whether it's a beach cleanup, a food drive, or an educational workshop, ServeUp simplifies the process.
                </p>
                <p>
                    By combining community spirit with modern technology, we are making volunteering accessible, 
                    organized, and efficient for everyone.
                </p>
            </div>
        ),

        Mission: (
            <p className="text-base md:text-lg leading-relaxed">
                Our mission is to democratize community service. We aim to bridge the gap between 
                individuals who want to help and the local causes that need them. We focus on fostering 
                a culture of active citizenship by providing a platform that is transparent, 
                easy to use, and encourages meaningful connections within the community.
            </p>
        ),

        Impact: (
            <p className="text-base md:text-lg leading-relaxed">
                Every event created on ServeUp represents a step towards a better society. 
                By allowing users to create, track, and join activities, we ensure that volunteer efforts 
                are not just moments in time, but part of a larger movement. Better organization leads 
                to higher turnout, and higher turnout creates tangible, lasting change in our neighborhoods.
            </p>
        ),

        "Team & System": (
            <p className="text-base md:text-lg leading-relaxed">
                ServeUp is built with performance and user experience in mind, utilizing React 19, 
                Firebase Authentication, and Tailwind CSS. The system ensures secure access, smooth animations, 
                and reliable event tracking. Developed by <strong>The Sachin Dey</strong>, the platform is designed 
                to be scalable and community-focused, ensuring technology serves humanity.
            </p>
        ),
    };

    return (
        <div className="p-6 lg:p-12 bg-base-200 text-base-content rounded-3xl shadow mt-10">
            <title>About Us</title>
            <h1 className="text-4xl font-bold mb-3">About Us</h1>
            <p className="text-sm mb-8 text-gray-600">
                A community-driven platform connecting volunteers with impactful social service events 
                in their local areas.
            </p>

            <div className="border-t-2 border-dashed border-secondary/40 mb-8"></div>

            <div className="tabs tabs-bordered mb-6">
                {tabs.map((tab) => (
                    <a
                        key={tab}
                        className={`tab ${active === tab ? "tab-active" : ""} text-xl transition-all duration-300`}
                        onClick={() => setActive(tab)}
                    >
                        {tab}
                    </a>
                ))}
            </div>

            <motion.div
                key={active}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="min-h-[150px]"
            >
                {content[active]}
            </motion.div>
        </div>
    );
}