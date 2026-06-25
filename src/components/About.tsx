"use client";

import React from "react";
import { ShieldCheck, HeartHandshake, Compass, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const pillars = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
      title: "Credential Verification",
      desc: "Every physician undergoes strict registration checkups, background screening, and license validity verifications with the Medical Council."
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
      title: "Patient-First Delivery",
      desc: "By bringing clinical consultations to your home, we eliminate risky clinic waits, travel anxiety, and standard scheduling delays."
    },
    {
      icon: <Compass className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
      title: "Continuum of Care",
      desc: "Connected tracking tools link consultation details, digital prescriptions, recommended diagnostic labs, and follow-ups in one view."
    }
  ];

  return (
    <section id="about" className="py-20 relative bg-slate-50/50 dark:bg-slate-900/10 border-y border-slate-100 dark:border-slate-800/40">
      {/* Background glow blobs */}
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-teal-500/5 rounded-full glow-blob pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Heading and Context */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/5 border border-teal-500/10"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                Welcome to SureCure Visit
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-55"
            >
              India's Next-Generation <br />
              <span className="bg-gradient-to-r from-teal-600 to-sky-600 dark:from-teal-400 dark:to-sky-400 bg-clip-text text-transparent">
                Home Healthcare Platform.
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base"
            >
              <p>
                SureCure Visit is building a unified, patient-centric home healthcare ecosystem. We connect families directly with certified, verified medical professionals for in-person consultations inside the safety and comfort of their own homes.
              </p>
              <p>
                Founded by <strong className="font-semibold text-slate-800 dark:text-slate-200">PVKR</strong> and backed by the strategic guidance of the <strong className="font-semibold text-slate-800 dark:text-slate-200">NLR GROUP OF COMPANIES</strong>, we are leveraging advanced routing algorithms, encrypted EHR storage, and verified doctor matching systems to deliver professional healthcare right to your doorstep.
              </p>
            </motion.div>

            {/* Quick stats grid */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-4 pt-4"
            >
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-350">100% Verified MDs</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-350">NLR Group Quality Check</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Key Pillars */}
          <div className="lg:col-span-6 space-y-4">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-5 sm:p-6 rounded-2xl flex items-start space-x-4 border border-teal-500/5 hover:border-teal-500/15 transition-all"
              >
                <div className="p-3 rounded-xl bg-teal-50 dark:bg-teal-950/40 shrink-0">
                  {pillar.icon}
                </div>
                <div className="text-left space-y-1">
                  <h3 className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
