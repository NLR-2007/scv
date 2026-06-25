"use client";

import React from "react";
import { 
  BadgeCheck, 
  Home, 
  Map, 
  FileCheck, 
  ShieldCheck, 
  Zap, 
  HeartHandshake, 
  Smartphone 
} from "lucide-react";
import { motion } from "framer-motion";

export default function Features() {
  const featureList = [
    {
      icon: <BadgeCheck className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
      title: "Verified Doctors",
      desc: "All physicians are vetted for clinical qualifications, licenses, and verified patient ratings."
    },
    {
      icon: <Home className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
      title: "Doorstep Consultation",
      desc: "Get diagnosed and treated by professional doctors in the safety and comfort of your living room."
    },
    {
      icon: <Map className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
      title: "Live Doctor Tracking",
      desc: "Track your scheduled physician's travel route and arrival time in real-time within the application."
    },
    {
      icon: <FileCheck className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
      title: "Digital Prescriptions",
      desc: "Receive encrypted, printable digital prescriptions signed by your doctor immediately after the visit."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
      title: "Secure Payments",
      desc: "Hassle-free UPI, credit card, and digital wallet integrations with encrypted payment processing."
    },
    {
      icon: <Zap className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
      title: "Fast Booking",
      desc: "Schedule consultations immediately or pre-book slots for routine checkups in a few taps."
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
      title: "Trusted Healthcare",
      desc: "NLR Group backed standards of clinical quality, sanitization, and care management."
    },
    {
      icon: <Smartphone className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
      title: "Easy-to-Use Mobile App",
      desc: "An intuitive UI designed for all age groups to book consultations without confusion."
    }
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const }
    }
  };

  return (
    <section id="features" className="py-20 relative overflow-hidden bg-dot-grid">
      {/* Background glow blobs */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-teal-500/5 rounded-full glow-blob pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-500/5 rounded-full glow-blob pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 px-3 py-1 rounded-full bg-teal-500/5 border border-teal-500/10">
            Platform Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-50">
            Features Tailored for Home Health
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base">
            SureCure Visit simplifies the doorstep consultation process with clinical safety and convenience as our core foundations.
          </p>
        </div>

        {/* Features Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {featureList.map((feat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col text-left space-y-4 relative overflow-hidden"
            >
              {/* Highlight background lines */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-teal-500/20 to-sky-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/40 flex items-center justify-center shrink-0">
                {feat.icon}
              </div>
              
              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-slate-800 dark:text-slate-100">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
