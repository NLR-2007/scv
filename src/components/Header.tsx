"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  const { theme, toggleTheme, mounted } = useTheme();

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
    <header className="fixed top-0 left-0 w-full z-50 glass-panel border-b border-teal-500/10">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2 sm:space-x-3 group">
          <div className="relative flex items-center justify-center w-8.5 h-8.5 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-sky-500 p-0.5 shadow-md shadow-teal-500/15 group-hover:shadow-teal-500/25 transition-shadow">
            <div className="w-full h-full bg-white dark:bg-slate-900 rounded-[10px] flex items-center justify-center transition-colors">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-teal-600 dark:text-teal-400"
              >
                <path
                  d="M12 4v16m-8-8h16"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="12" r="3" className="fill-teal-500/20" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-slate-800 dark:text-slate-100 font-sans leading-none min-[360px]:text-base sm:text-lg lg:text-xl">
              SureCure <span className="text-teal-600 dark:text-teal-400 font-semibold">Visit</span>
            </span>
            <span className="text-[9px] sm:text-xs text-slate-500 dark:text-slate-400 tracking-wider uppercase font-semibold mt-0.5">
              NLR Group
            </span>
          </div>
        </a>

        {/* Right side items */}
        <div className="flex items-center space-x-2 sm:space-x-6">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="relative p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800/80 text-slate-600 dark:text-slate-300 transition-all duration-300 focus:outline-none"
            aria-label="Toggle Theme"
          >
            {mounted && theme === "dark" ? (
              <motion.div
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Sun className="w-5 h-5 text-teal-400" />
              </motion.div>
            ) : (
              <motion.div
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Moon className="w-5 h-5 text-slate-700" />
              </motion.div>
            )}
          </button>

          {/* CTA Button */}
          <a
            href="#notify-me"
            onClick={scrollToSubscribe}
            className="hidden min-[380px]:flex items-center space-x-1.5 px-3 py-2 sm:px-5 sm:py-2.5 bg-gradient-to-r from-teal-600 to-sky-600 hover:from-teal-500 hover:to-sky-500 text-white rounded-xl font-medium text-xs sm:text-sm shadow-lg shadow-teal-600/10 hover:shadow-teal-600/20 active:scale-95 transition-all"
          >
            <span>Notify Me</span>
            <ArrowRight className="w-4 h-4 hidden sm:inline" />
          </a>
        </div>
      </div>
    </header>
  );
}
