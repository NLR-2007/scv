"use client";

import React, { useState } from "react";
import { Search, MapPin, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function InteractiveWidget() {
  const [pincode, setPincode] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [isStage1, setIsStage1] = useState(false);

  const checkServiceability = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPin = pincode.trim();

    if (!/^\d{6}$/.test(cleanPin)) {
      setStatus("error");
      setMessage("Please enter a valid 6-digit Indian pincode.");
      return;
    }

    setStatus("loading");

    // Simulating lookup delay
    setTimeout(() => {
      const firstTwoDigits = cleanPin.substring(0, 2);
      // Main metros in India like Delhi NCR (11, 12, 20), Mumbai (40), Bangalore (56), Chennai (60), Hyd (50), Kolkata (70), etc.
      const stage1Prefixes = ["11", "40", "56", "60", "50", "70", "12", "20", "38", "41"];
      
      const isServiceable = stage1Prefixes.includes(firstTwoDigits);
      
      setStatus("success");
      setIsStage1(isServiceable);
      if (isServiceable) {
        setMessage(`SureCure Visit launches in pincode ${cleanPin} in Stage 1. You'll be able to book verified doctors starting Day 1.`);
      } else {
        setMessage(`Pincode ${cleanPin} is in our Stage 2 schedule. We will expand here soon. Sign up to prioritize your district.`);
      }
    }, 850);
  };

  return (
    <div className="w-full max-w-sm sm:max-w-md mx-auto">
      <div className="glass-panel p-5 sm:p-6 rounded-3xl border border-teal-500/10 shadow-xl relative overflow-hidden">
        {/* Decorative corner ambient light */}
        <div className="absolute -right-12 -bottom-12 w-28 h-28 bg-teal-500/15 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -left-12 -top-12 w-28 h-28 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2.5 rounded-2xl bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100">
              Launch Coverage Checker
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Check if doorstep visits are opening in your area
            </p>
          </div>
        </div>

        <form onSubmit={checkServiceability} className="space-y-3">
          <div className="relative">
            <input
              type="text"
              maxLength={6}
              value={pincode}
              onChange={(e) => {
                setPincode(e.target.value.replace(/\D/g, ""));
                if (status !== "idle") setStatus("idle");
              }}
              placeholder="Enter 6-digit Pincode (e.g. 560001)"
              className="w-full pl-4 pr-12 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-650 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all font-sans text-xs sm:text-sm tracking-wide"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white disabled:opacity-50 transition-colors flex items-center justify-center cursor-pointer"
            >
              {status === "loading" ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Search className="w-4 h-4" />
              )}
            </button>
          </div>

          <AnimatePresence mode="wait">
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-start space-x-2 text-red-600 dark:text-red-400 text-xs mt-2 bg-red-50 dark:bg-red-950/20 p-3 rounded-xl border border-red-200/20"
              >
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{message}</span>
              </motion.div>
            )}

            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`flex items-start space-x-2.5 text-xs p-3.5 rounded-xl border ${
                  isStage1
                    ? "text-teal-800 dark:text-teal-300 bg-teal-500/10 border-teal-500/20"
                    : "text-sky-800 dark:text-sky-300 bg-sky-500/10 border-sky-500/20"
                }`}
              >
                <CheckCircle className={`w-4.5 h-4.5 shrink-0 mt-0.5 ${
                  isStage1 ? "text-teal-600 dark:text-teal-400" : "text-sky-600 dark:text-sky-400"
                }`} />
                <div>
                  <span className="font-bold block mb-0.5">
                    {isStage1 ? "🚀 Day 1 Launch Location" : "📅 Scheduled for Expansion"}
                  </span>
                  <span className="text-slate-600 dark:text-slate-400 leading-relaxed">{message}</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>
    </div>
  );
}
