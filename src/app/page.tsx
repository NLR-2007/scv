import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InteractiveWidget from "@/components/InteractiveWidget";
import About from "@/components/About";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import Launch from "@/components/Launch";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
        
        {/* Hero Section */}
        <Hero />
        
        {/* Coverage Checker Banner */}
        <section className="py-10 relative bg-white/60 dark:bg-slate-900/20 border-y border-slate-100 dark:border-slate-900/60 z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <InteractiveWidget />
          </div>
        </section>

        {/* About Section */}
        <About />

        {/* Features Section */}
        <Features />

        {/* FAQ Section */}
        <FAQ />

        {/* Launch Announcement / Subscription Form */}
        <Launch />

      </main>
      <Footer />
    </>
  );
}
