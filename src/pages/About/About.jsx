import React from "react";
import { motion } from "framer-motion";

export default function AboutUs() {
    const tabs = ["Story", "Mission", "Impact", "Team & System"];
    const [active, setActive] = React.useState("Story");

    const content = {
        Story: (
            <div className="space-y-4 font-[Inter]">
                <p>
                    ServeUp started with a simple observation: our communities are full of people who want to do good—
                    whether it's cleaning up a local park in <span className="text-primary font-semibold">Mirpur</span> or planting trees in <span className="text-primary font-semibold">Kishoreganj</span>.
                </p>
                <p>
                    However, social initiatives often get lost in social media feeds or scattered group chats.
                    We realized that for social development to be effective, it needs to be organized.
                </p>
                <p>
                    ServeUp was built to be that digital bridge, transforming scattered individual intentions
                    into powerful, collective community action.
                </p>
            </div>
        ),

        Mission: (
            <p className="text-base md:text-lg leading-relaxed font-[Inter]">
                Our mission is to <span className="text-primary font-bold">democratize social service</span>.
                We envision a society where organizing a community cleanup or a donation drive is as easy as ordering food online.
                We aim to remove technological barriers so volunteers can focus on <strong>helping people</strong> rather than managing logistics.
            </p>
        ),

        Impact: (
            <p className="text-base md:text-lg leading-relaxed font-[Inter]">
                By connecting enthusiastic volunteers with local needs, ServeUp amplifies the impact of every event.
                Every <span className="badge badge-primary badge-outline mx-1">Join</span> click represents a cleaner street,
                a planted tree, or a helped family. We are tracking not just events, but the tangible improvement of our local surroundings.
            </p>
        ),

        "Team & System": (
            <div className="text-base md:text-lg leading-relaxed font-[Inter]">
                <p className="mb-4">
                    ServeUp is a modern Single Page Application (SPA) built for speed and reliability.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    <span className="badge badge-primary ">React 19</span>
                    <span className="badge badge-primary">Firebase</span>
                    <span className="badge badge-primary">Tailwind v4</span>
                    <span className="badge badge-primary ">Framer Motion</span>
                </div>
                <p>
                    Developed by: <strong className="text-primary text-xl">Thesachindey</strong>
                    <br />
                    This project is a testament to how technology can be leveraged to solve real-world social challenges.
                </p>
            </div>
        ),
    };

    return (
        <div className="w-full  mx-auto mt-10 px-4">
            <div className="bg-base-200 rounded-3xl p-6 lg:p-12 border border-base-300 shadow-sm">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
                    <div>
                        <h1 className="text-5xl font-bold mb-2 text-neutral" >
                            About <span className="text-primary logo-font">ServeUp</span>
                        </h1>
                        <p className="text-sm md:text-base text-neutral/70 font-[Inter] max-w-md">
                            Connecting communities for social good. Create, join, and track local impact events.
                        </p>
                    </div>
                    <div className="hidden md:block w-16 h-1 bg-primary rounded-full mb-2"></div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8 border-b border-base-300 pb-1">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActive(tab)}
                            className={`
                                relative px-4 py-2 text-lg font-medium transition-all duration-300 rounded-t-lg
                                ${active === tab
                                    ? "text-primary border-b-2 border-primary bg-base-100"
                                    : "text-neutral/60 hover:text-neutral hover:bg-base-300/50"
                                }
                            `}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="bg-base-100 p-6 md:p-8 rounded-2xl border border-base-300 shadow-sm min-h-[200px]"
                >
                    {content[active]}
                </motion.div>
            </div>
        </div>
    );
}