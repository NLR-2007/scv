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
              Founder: <span className="font-semibold text-slate-700 dark:text-slate-300">PVKR</span>
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
              <div className="flex items-start space-x-2.5">
                <Phone className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                <div className="flex flex-col space-y-1">
                  <a href="tel:8341494604" className="hover:text-teal-500 transition-colors">
                    +91 8341494604
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-2.5">
                <svg className="w-4 h-4 text-emerald-500 fill-emerald-500/10 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <div className="flex flex-col space-y-1">
                  <a 
                    href="https://wa.me/916302245307" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                  >
                    +91 6302245307
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                <span>Hyd Bachupally Bowrmpet</span>
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
