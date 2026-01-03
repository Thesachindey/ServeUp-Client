import React, { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { Users, Calendar, Heart } from 'lucide-react'; 

const CounterItem = ({ icon: Icon, value, label, suffix = "" }) => {
  const ref = useRef(null);
  
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  const displayRef = useRef(null);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (displayRef.current) {
        displayRef.current.textContent = latest.toFixed(0); 
      }
    });
  }, [springValue]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center p-6 bg-base-100 rounded-2xl shadow-sm border border-base-300 hover:shadow-md transition-shadow duration-300">
      
      <div className="mb-4 p-3 bg-primary/10 text-primary rounded-full">
        <Icon size={32} strokeWidth={2} />
      </div>
      
      <h3 className="text-4xl font-extrabold text-base-content mb-2">
        <span ref={displayRef}>0</span>{suffix}
      </h3>
      
      <p className="text-base-content/70 font-medium">{label}</p>
    </div>
  );
};

const ImpactStats = () => {
  const stats = [
    {
      id: 1,
      label: "Volunteers",
      value: 500,
      suffix: "+",
      icon: Users,
    },
    {
      id: 2,
      label: "Events Completed",
      value: 120,
      suffix: "",
      icon: Calendar,
    },
    {
      id: 3,
      label: "Lives Impacted",
      value: 5000,
      suffix: "+",
      icon: Heart,
    },
  ];

  return (
    <section className="py-16 bg-base-200 rounded-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-base-content sm:text-4xl">
            Our <span className="text-primary logo-font">Impact</span> in Numbers
          </h2>
          <p className="text-neutral/70 max-w-lg mx-auto mt-4">
            Transparency is key. Here is what we have achieved together so far.
          </p>
        </div>

        {/* Grid for Counters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <CounterItem 
              key={stat.id}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;