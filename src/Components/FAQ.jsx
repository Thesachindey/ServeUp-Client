import React from "react";
import { motion } from "framer-motion";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I join an event?",
      answer: "It's simple! First, log in to your account. Browse the 'Upcoming Events' page to find an activity that interests you. Click the 'View Details' button, and then hit 'Join Event'. You will receive a confirmation instantly.",
    },
    {
      question: "Is it free to participate in events?",
      answer: "Yes! ServeUp is a community-driven platform, and the vast majority of events (like cleanups, tree plantations, and blood drives) are completely free for volunteers. Some specific fundraising events might require a ticket, but that will be clearly labeled.",
    },
    {
      question: "Can I organize my own social service event?",
      answer: "Absolutely. We encourage leadership! If you are logged in, navigate to the 'Create Event' page. Fill in the details (Title, Location, Date, Description), upload a thumbnail, and submit. Once validated, your event will be live for others to join.",
    },
    {
      question: "How do I update or delete an event I created?",
      answer: "Go to your profile menu and select 'Manage Events'. Here you will see a list of all events you have organized. You can click the 'Update' button to edit details or 'Delete' to cancel the event.",
    },
    {
      question: "Why can't I select a past date when creating an event?",
      answer: "To ensure the platform remains relevant and actionable, we only allow upcoming events to be scheduled. Our system validates the date picker to ensure only future dates are selectable.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-base-100">
      <div className="container ">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Frequently Asked <span className="logo-font text-primary">Questions</span>
          </h2>
          <p className="text-neutral/70 max-w-lg mx-auto mt-4">
            Explore powerful tools that help you create, join, and manage community service events effortlessly.
          </p>
        </div>

        {/* Accordion Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4" // Adds space between the bubbles
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              // Updated classes: Added rounded-3xl, removed join-item, added margin
              className="collapse collapse-plus border border-base-300 bg-base-200 rounded-2xl"
            >
              {/* Radio input for accordion behavior */}
              <input 
                type="radio" 
                name="my-accordion-4" 
                defaultChecked={index === 0} 
              />

              <div className="collapse-title text-xl font-medium text-neutral hover:text-primary transition-colors">
                {faq.question}
              </div>

              <div className="collapse-content text-neutral/80 leading-relaxed">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;