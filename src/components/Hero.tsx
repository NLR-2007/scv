"use client";

import React from "react";
import { ArrowRight, Play, CheckCircle, ShieldAlert, Sparkles, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToSubscribe = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("notify-me");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      const input = document.getElementById("email-input");
      if (input) {
        setTimeout(() => input.focus(), 800);
      }
    }
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-dot-grid bg-grid-lines">
      {/* Background glow blobs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-teal-500/10 rounded-full glow-blob pointer-events-none" />
      <div className="absolute top-1/3 right-1/10 w-96 h-96 bg-sky-500/10 rounded-full glow-blob pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Branding and Text Content */}
          <div className="lg:col-span-7 text-left space-y-6 sm:space-y-8">
            
            {/* Launch Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-panel border border-teal-500/20 shadow-sm"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              <span className="text-xs font-semibold text-slate-700 dark:text-teal-300 tracking-wide font-sans">
                🚀 Coming Soon
              </span>
              <span className="text-[10px] text-slate-400 dark:text-slate-500 px-1 border-l border-slate-200 dark:border-slate-800">
                NLR GROUP Product
              </span>
            </motion.div>

            {/* Heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 leading-[1.1] font-sans"
              >
                Healthcare is <br />
                <span className="bg-gradient-to-r from-teal-600 via-teal-500 to-sky-600 dark:from-teal-400 dark:via-teal-300 dark:to-sky-400 bg-clip-text text-transparent">
                  Coming Home.
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed"
              >
                Soon you'll be able to book <strong className="font-semibold text-teal-600 dark:text-teal-400">verified doctors</strong> who visit your home for professional medical consultations. Fast, convenient, trusted healthcare—right at your doorstep.
              </motion.p>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <a
                href="#notify-me"
                onClick={scrollToSubscribe}
                className="flex items-center justify-center space-x-2 px-6 py-3.5 bg-gradient-to-r from-teal-600 to-sky-600 hover:from-teal-500 hover:to-sky-500 text-white rounded-2xl font-medium shadow-xl shadow-teal-500/10 hover:shadow-teal-500/25 active:scale-[0.98] transition-all cursor-pointer text-sm sm:text-base text-center"
              >
                <span>Notify Me on Launch</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <div className="flex items-center justify-center px-5 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-medium">
                <span className="flex h-1.5 w-1.5 rounded-full bg-slate-400 mr-2.5"></span>
                <span>Coming Soon on iOS & Android</span>
              </div>
            </motion.div>

            {/* Quick App Badges (Sleek UI lines instead of images) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center space-x-6 pt-2"
            >
              <div className="flex items-center space-x-2 opacity-50 dark:opacity-40">
                <svg className="w-5 h-5 text-slate-800 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.22.67-2.94 1.51-.64.74-1.2 1.88-1.05 3 .12.83 1.23.96 2.15.22" />
                </svg>
                <div className="text-left leading-none">
                  <p className="text-[9px] uppercase tracking-wider text-slate-500 font-sans">App Store</p>
                  <p className="text-xs font-bold text-slate-800 dark:text-white font-sans mt-0.5">iOS App</p>
                </div>
              </div>
              <div className="h-6 w-px bg-slate-200 dark:bg-slate-800" />
              <div className="flex items-center space-x-2 opacity-50 dark:opacity-40">
                <Play className="w-5 h-5 text-slate-800 dark:text-white fill-current" />
                <div className="text-left leading-none">
                  <p className="text-[9px] uppercase tracking-wider text-slate-500 font-sans">Google Play</p>
                  <p className="text-xs font-bold text-slate-800 dark:text-white font-sans mt-0.5">Android App</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Premium CSS Mobile App Mockup */}
          <div className="lg:col-span-5 flex justify-center items-center relative w-full overflow-hidden py-4">
            {/* Phone Backdrop glow */}
            <div className="absolute w-72 h-96 bg-gradient-to-tr from-teal-500 to-sky-500 opacity-20 dark:opacity-30 rounded-full blur-3xl -z-10" />

            <div className="scale-90 min-[360px]:scale-95 sm:scale-100 origin-center transition-transform">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="w-[280px] h-[560px] sm:w-[300px] sm:h-[600px] rounded-[48px] bg-slate-950 p-3.5 shadow-2xl border-4 border-slate-800 relative overflow-hidden"
              >
              {/* Internal Bezels */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-950 rounded-b-2xl z-40 flex items-center justify-center">
                {/* Speaker Grill */}
                <div className="w-12 h-1 bg-slate-800 rounded-full mb-1" />
                {/* Camera dot */}
                <div className="w-2.5 h-2.5 bg-slate-900 rounded-full absolute right-6 mb-1 border border-slate-800/40" />
              </div>

              {/* Screen Contents */}
              <div className="w-full h-full bg-slate-50 dark:bg-slate-900 rounded-[36px] overflow-hidden flex flex-col relative text-slate-800 dark:text-slate-100 font-sans select-none border border-slate-850">
                {/* Status Bar */}
                <div className="h-10 pt-4 px-6 flex justify-between items-center text-[10px] text-slate-500 font-medium z-30">
                  <span>9:41 AM</span>
                  <div className="flex items-center space-x-1.5">
                    <svg className="w-3.5 h-3.5 text-slate-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.9-1.9C9.17 19.58 10.53 20 12 20c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
                    </svg>
                    <div className="w-5 h-2.5 border border-slate-500 rounded-[3px] p-0.5 flex items-center">
                      <div className="w-3.5 h-full bg-slate-500 rounded-[1px]" />
                    </div>
                  </div>
                </div>

                {/* App Main Header */}
                <div className="px-4 py-2 border-b border-slate-100 dark:border-slate-800/60 bg-white/85 dark:bg-slate-900/85 backdrop-blur-md flex items-center justify-between z-30">
                  <div className="flex items-center space-x-2">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-teal-500 to-sky-500 p-0.5">
                      <div className="w-full h-full bg-white dark:bg-slate-900 rounded-[6px] flex items-center justify-center">
                        <span className="text-[10px] font-bold text-teal-600 dark:text-teal-400">+</span>
                      </div>
                    </div>
                    <div className="leading-none">
                      <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100">SureCure</h4>
                      <p className="text-[8px] text-slate-500">Visit Platform</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1.5 px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[8px] text-slate-600 dark:text-slate-300">
                    <MapPin className="w-2.5 h-2.5 text-teal-500" />
                    <span className="font-medium">Hyderabad</span>
                  </div>
                </div>

                {/* Screen Scrollable Body (Mock App Screen) */}
                <div className="flex-1 overflow-y-auto scrollbar-none px-4 py-3 space-y-4 bg-slate-50 dark:bg-slate-950/40 relative z-20">
                  
                  {/* Dynamic Simulation: Tracking Map */}
                  <div className="relative h-44 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 overflow-hidden flex flex-col justify-end p-2.5 shadow-sm">
                    {/* SVG map background */}
                    <div className="absolute inset-0 opacity-15 dark:opacity-20 pointer-events-none">
                      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="1" />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                        {/* Simulation Route path */}
                        <motion.path
                          d="M 30,120 Q 100,60 170,90 T 240,40"
                          fill="none"
                          stroke="rgb(13, 148, 136)"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          strokeDasharray="6, 6"
                          initial={{ strokeDashoffset: 100 }}
                          animate={{ strokeDashoffset: 0 }}
                          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                        />
                      </svg>
                    </div>

                    {/* Patient Pin (Home) */}
                    <div className="absolute left-[20px] top-[105px] flex flex-col items-center">
                      <div className="w-5 h-5 rounded-full bg-slate-900 dark:bg-white border-2 border-teal-500 flex items-center justify-center shadow-lg">
                        <span className="text-[7px] font-bold text-teal-600">🏠</span>
                      </div>
                      <span className="text-[6px] font-bold text-slate-500 bg-white/95 dark:bg-slate-900 px-1 py-0.5 rounded shadow-sm border border-slate-100 dark:border-slate-800 mt-0.5">Your Home</span>
                    </div>

                    {/* Doctor Pin moving */}
                    <motion.div
                      animate={{
                        x: [30, 85, 140, 195, 235],
                        y: [100, 60, 75, 55, 30]
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 8,
                        ease: "easeInOut"
                      }}
                      className="absolute left-0 top-0 flex flex-col items-center"
                    >
                      <div className="w-6 h-6 rounded-full bg-teal-500 border-2 border-white dark:border-slate-900 flex items-center justify-center shadow-lg relative">
                        <span className="text-[8px] font-bold text-white">🩺</span>
                        <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-300"></span>
                        </span>
                      </div>
                      <span className="text-[6px] font-bold text-white bg-teal-600 px-1 py-0.5 rounded shadow-sm mt-0.5 whitespace-nowrap">Dr. Ananya</span>
                    </motion.div>

                    {/* Overlay info box inside map */}
                    <div className="relative glass-panel border border-teal-500/10 p-2 rounded-xl flex items-center justify-between w-full shadow-md z-10">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                        <span className="text-[9px] font-bold text-slate-700 dark:text-slate-200">Doctor en route</span>
                      </div>
                      <span className="text-[9px] font-extrabold text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/40 px-1.5 py-0.5 rounded-md">Arriving: 12m</span>
                    </div>
                  </div>

                  {/* Doctor Profile card */}
                  <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-3 rounded-2xl shadow-sm space-y-2.5">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-xs text-teal-600 border border-slate-200/40 dark:border-slate-700/40">
                        👩‍⚕️
                      </div>
                      <div className="flex-1 min-w-0 text-left">
                        <h5 className="text-[12px] font-bold text-slate-900 dark:text-slate-100 leading-normal">
                          Dr. Ananya Sharma
                        </h5>
                        <div className="flex items-center space-x-1.5 mt-0.5">
                          <span className="text-[7px] font-bold bg-emerald-50 dark:bg-emerald-950/45 text-emerald-600 dark:text-emerald-400 px-1.5 py-0.5 rounded-full border border-emerald-500/10">
                            Verified
                          </span>
                          <span className="text-[8px] text-slate-500 truncate">MD General • 8 yrs exp</span>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-center text-[9px]">
                      <div className="bg-slate-50 dark:bg-slate-850 p-1.5 rounded-lg border border-slate-100/50 dark:border-slate-800/50">
                        <span className="text-slate-400 block text-[7px] uppercase tracking-wider">Fee Rate</span>
                        <span className="font-bold text-slate-800 dark:text-slate-250">₹899 Fixed</span>
                      </div>
                      <div className="bg-slate-50 dark:bg-slate-850 p-1.5 rounded-lg border border-slate-100/50 dark:border-slate-800/50">
                        <span className="text-slate-400 block text-[7px] uppercase tracking-wider">Rating</span>
                        <span className="font-bold text-slate-800 dark:text-slate-250">⭐ 4.9 (180+)</span>
                      </div>
                    </div>
                  </div>

                  {/* Flow Simulation Widgets */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/50 text-[9px] shadow-sm">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                        <span className="text-slate-600 dark:text-slate-300 font-medium">OTP Verified Consultation</span>
                      </div>
                      <span className="text-[8px] text-slate-400">Secure</span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/50 text-[9px] shadow-sm">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                        <span className="text-slate-600 dark:text-slate-300 font-medium">Digital Rx immediately active</span>
                      </div>
                      <span className="text-[8px] text-slate-400">Encrypted</span>
                    </div>
                  </div>

                </div>

                {/* Simulated Bottom Navigation */}
                <div className="h-14 border-t border-slate-100 dark:border-slate-800/60 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-6 flex justify-between items-center text-[8px] text-slate-400 font-bold z-30 rounded-b-[34px]">
                  <div className="flex flex-col items-center space-y-0.5 text-teal-500">
                    <span className="text-xs">🏠</span>
                    <span>Home</span>
                  </div>
                  <div className="flex flex-col items-center space-y-0.5">
                    <span className="text-xs opacity-50">📋</span>
                    <span>Visits</span>
                  </div>
                  <div className="flex flex-col items-center space-y-0.5">
                    <span className="text-xs opacity-50">💬</span>
                    <span>Chat</span>
                  </div>
                  <div className="flex flex-col items-center space-y-0.5">
                    <span className="text-xs opacity-50">👤</span>
                    <span>Profile</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
          
        </div>
      </div>
    </section>
  );
}
