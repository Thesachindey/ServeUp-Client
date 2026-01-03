import React from 'react';
import { motion } from 'framer-motion';
import { Map, UserPlus, Heart } from 'lucide-react';
// import { Link } from 'react-router-dom'; // keeping your import style below

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Discover",
      description: "Browse through hundreds of local events. Filter by category, location, or date to find a cause that sparks your passion.",
      icon: Map,
      color: "bg-blue-500/10 text-blue-600 dark:text-blue-400", 
    },
    {
      id: 2,
      title: "Join",
      description: "Sign up as a volunteer with a single click. Connect with team leaders and get all the details you need to participate.",
      icon: UserPlus,
      color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
    },
    {
      id: 3,
      title: "Impact",
      description: "Show up, help out, and make a real difference. Track your volunteer hours and see the collective impact of your community.",
      icon: Heart,
      color: "bg-green-500/10 text-green-600 dark:text-green-400",
    },
  ];

  return (
    <section className="py-24 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-base-content">
            How It <span className="text-primary logo-font">Works</span>
          </h2>
          <p className="mt-4 text-lg text-base-content/70 max-w-2xl mx-auto">
            Making a difference shouldn't be complicated. We've streamlined the process so you can focus on what matters.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative ">
          
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-base-300 -z-10 -translate-y-1/2 rounded-full" />

          {steps.map((step, index) => (
            <StepCard key={step.id} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};


// Step Card Component
const StepCard = ({ step, index }) => {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered delay
      className="relative bg-base-100 p-8 rounded-3xl border border-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group"
    >
      {/* Icon Circle */}
      {/* bg-base-100 ensures the line behind it is hidden */}
      <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 text-3xl shadow-sm ${step.color} bg-base-100 border-4 border-base-100 z-10`}>
        <Icon size={32} strokeWidth={2} />
      </div>

      {/* Step Number Badge */}
      <div className="absolute top-6 right-6 text-6xl font-black text-base-content/5 -z-0 select-none group-hover:text-primary/10 transition-colors">
        0{step.id}
      </div>

      {/* Content */}
      <h3 className="text-2xl font-bold text-base-content mb-3 z-10">
        {step.title}
      </h3>
      <p className="text-base-content/60 leading-relaxed z-10">
        {step.description}
      </p>
    </motion.div>
  );
};

export default HowItWorks;