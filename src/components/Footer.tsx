"use client";

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const socialIcons = [
    {
      name: "Instagram",
      href: "https://instagram.com",
      svg: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      )
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      svg: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      )
    },
    {
      name: "X (Twitter)",
      href: "https://x.com",
      svg: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    },
    {
      name: "Facebook",
      href: "https://facebook.com",
      svg: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      )
    }
  ];

  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 py-12 sm:py-16 text-left relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-slate-200 dark:border-slate-900">
          
          {/* Logo / Tagline */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-sky-500 p-0.5">
                <div className="w-full h-full bg-white dark:bg-slate-900 rounded-[10px] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-teal-600 dark:text-teal-400">
                    <path d="M12 4v16m-8-8h16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="3" className="fill-teal-500/20" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-slate-800 dark:text-slate-100 leading-none">
                  SureCure <span className="text-teal-600 dark:text-teal-400">Visit</span>
                </span>
                <span className="text-[10px] text-slate-400 tracking-wider uppercase font-bold mt-0.5">
                  NLR Group
                </span>
              </div>
            </div>
            
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
              Healthcare at Your Doorstep.
            </p>
            <p className="text-xs text-slate-450 dark:text-slate-500 max-w-sm leading-relaxed">
              SureCure Visit is building India's next-generation home healthcare platform to connect you with verified clinical practitioners.
            </p>
            <p className="text-xs text-slate-450 dark:text-slate-500">
              Founder: <span className="font-semibold text-slate-700 dark:text-slate-300">Vamsi Krishna Reddy</span>
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 font-bold">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#about" onClick={(e) => handleLinkClick(e, "about")} className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 font-medium transition-colors cursor-pointer">
                  About Us
                </a>
              </li>
              <li>
                <a href="#features" onClick={(e) => handleLinkClick(e, "features")} className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 font-medium transition-colors cursor-pointer">
                  Coming Soon Features
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 font-medium transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 font-medium transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details / Corporate info */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 font-bold">
              Contact & Inquiries
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-start space-x-2.5">
                <Mail className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                <div className="flex flex-col space-y-1">
                  <a href="mailto:surecurevist@gmail.com" className="hover:text-teal-500 transition-colors">
                    surecurevist@gmail.com
                  </a>
                  <a href="mailto:nlrgroupofcompany@gmail.com" className="hover:text-teal-500 transition-colors">
                    nlrgroupofcompany@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-teal-500 shrink-0" />
                <a href="tel:8341494604" className="hover:text-teal-500 transition-colors">
                  +91 8341494604
                </a>
              </div>
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                <span>NLR Corporate Towers, Residency Road, Bangalore, KA, India</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-450 dark:text-slate-500 font-medium">
          
          {/* Copyright block */}
          <div className="space-y-1 text-center md:text-left">
            <p>
              © 2026 SureCure Visit. All Rights Reserved.
            </p>
            <p className="text-[10px] text-slate-400 dark:text-slate-600">
              Developed with ❤️ by <span className="font-semibold">NLR GROUP OF COMPANIES</span>.
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center space-x-4">
            {socialIcons.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-200/50 dark:bg-slate-900 border border-slate-350/10 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 hover:border-teal-500/20 hover:bg-slate-50 dark:hover:bg-slate-850 flex items-center justify-center transition-all"
                aria-label={social.name}
              >
                {social.svg}
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}
