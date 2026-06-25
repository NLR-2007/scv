"use client";

import React, { useState } from "react";
import { Mail, CheckCircle, Loader2, Sparkles, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Launch() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim();

    // Regex check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!cleanEmail || !emailRegex.test(cleanEmail)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    // Simulating database write
    setTimeout(() => {
      try {
        // Save to localStorage to simulate subscriber lead database
        const existing = localStorage.getItem("surecure_subscribers");
        const list = existing ? JSON.parse(existing) : [];
        if (!list.includes(cleanEmail)) {
          list.push(cleanEmail);
          localStorage.setItem("surecure_subscribers", JSON.stringify(list));
        }
        setStatus("success");
      } catch (err) {
        setStatus("success"); // fallback if localStorage fails
      }
    }, 1200);
  };

  return (
    <section id="notify-me" className="py-24 relative overflow-hidden bg-dot-grid">
      {/* Background glow blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/5 rounded-full glow-blob pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel p-8 sm:p-14 rounded-[36px] border border-teal-500/10 shadow-2xl relative overflow-hidden text-center space-y-8 bg-gradient-to-b from-white/80 to-white/40 dark:from-slate-900/80 dark:to-slate-900/40">
          
          {/* Subtle floating background icons for depth */}
          <div className="absolute top-8 left-8 text-teal-500/10 dark:text-teal-400/5 select-none pointer-events-none">
            <Mail className="w-16 h-16" />
          </div>
          <div className="absolute bottom-8 right-8 text-sky-500/10 dark:text-sky-400/5 select-none pointer-events-none">
            <Sparkles className="w-16 h-16" />
          </div>

          <AnimatePresence mode="wait">
            {status !== "success" ? (
              <motion.div
                key="form-state"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6 max-w-2xl mx-auto"
              >
                {/* Header */}
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                    Stay Informed
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-50">
                    We're Launching Soon
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                    Our team is working tirelessly to create a better healthcare experience. Be among the first to know when SureCure Visit officially launches and prioritizes your sector.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div className="flex flex-col sm:flex-row gap-3 items-stretch max-w-lg mx-auto">
                    <div className="relative flex-1">
                      <Mail className="w-5 h-5 text-slate-400 absolute left-4.5 top-1/2 -translate-y-1/2" />
                      <input
                        id="email-input"
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (status === "error") setStatus("idle");
                        }}
                        placeholder="Enter your email address"
                        disabled={status === "loading"}
                        className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all font-sans text-sm"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="px-6 py-3.5 bg-gradient-to-r from-teal-600 to-sky-600 hover:from-teal-500 hover:to-sky-500 text-white rounded-2xl font-semibold shadow-lg shadow-teal-500/10 hover:shadow-teal-500/25 active:scale-[0.98] transition-all flex items-center justify-center space-x-2 shrink-0 cursor-pointer text-sm"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Reserving Slot...</span>
                        </>
                      ) : (
                        <>
                          <span>Notify Me</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Error display */}
                  {status === "error" && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 dark:text-red-400 text-xs font-semibold"
                    >
                      {errorMessage}
                    </motion.p>
                  )}
                </form>

                {/* Subtext info */}
                <p className="text-[11px] text-slate-400 dark:text-slate-500">
                  🔒 We respect your privacy. No spam. You can unsubscribe at any time.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="success-state"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="space-y-6 max-w-lg mx-auto py-4"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-600 dark:text-teal-400">
                  <CheckCircle className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50">
                    Welcome to the Waitlist!
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                    Thank you for subscribing. We have successfully registered <strong className="font-semibold text-slate-800 dark:text-slate-200">{email}</strong> for early launch priority and private beta access.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-teal-500/5 border border-teal-500/10 text-xs text-slate-600 dark:text-teal-300">
                  ⚡ We'll notify you as soon as our verified doctor visits become available in your area. Keep an eye on your inbox!
                </div>

                <button
                  onClick={() => {
                    setStatus("idle");
                    setEmail("");
                  }}
                  className="text-xs font-semibold text-teal-600 dark:text-teal-400 hover:underline cursor-pointer"
                >
                  Register another email
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
