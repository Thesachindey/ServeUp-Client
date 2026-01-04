import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { ArrowRight, Sparkles } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Container with Primary Gradient/Color */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden bg-primary text-primary-content rounded-3xl p-12 md:p-20 text-center"
        >
          
          {/* Decorative Background Elements (Circles) */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-black/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            
            {/* Icon badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-sm font-bold border border-white/10 mb-4">
              <Sparkles size={16} />
              <span>Join 500+ Active Volunteers</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Ready to Make a Real <br />
              <span className="opacity-90">Difference Today?</span>
            </h2>

            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
              Whether you want to lead your own initiative or join an existing team, your journey starts here. No experience required—just a heart to help.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/upcoming-event" className="btn btn-lg bg-white text-primary hover:bg-base-100 border-none rounded-full px-8 shadow-lg">
                Find an Event
              </Link>
              <Link to="/dashboard/create-event" className="btn btn-lg btn-outline text-white border-white hover:bg-white/20 hover:border-white rounded-full px-8 group">
                Organize Event
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;