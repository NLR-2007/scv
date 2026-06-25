"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="border-b border-slate-100 dark:border-slate-800/80 py-4 text-left">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center py-2 text-slate-800 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 font-bold text-sm sm:text-base transition-colors focus:outline-none cursor-pointer"
      >
        <span className="pr-4">{question}</span>
        <span className="p-1 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-slate-400 shrink-0">
          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pt-2 pb-4 text-xs sm:text-sm text-slate-550 dark:text-slate-400 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      question: "How are the doctors verified on SureCure Visit?",
      answer: "All doctors on our platform undergo a rigorous multi-stage credential verification process. We verify their registrations with the National Medical Commission (NMC) or State Medical Councils, authenticate their medical qualifications (MBBS, MD, MS), and perform background verifications to ensure high standards of care."
    },
    {
      question: "Is SureCure Visit suitable for emergency medical services?",
      answer: "No. SureCure Visit is strictly for non-emergency, primary outpatient consultations. If you or a loved one is experiencing a medical emergency (such as chest pain, severe shortness of breath, sudden numbness, or heavy bleeding), please immediately contact emergency services (102 or 108) or proceed to the nearest hospital emergency room."
    },
    {
      question: "How long does a home doctor consultation take?",
      answer: "A typical doorstep consultation lasts between 25 to 40 minutes. This gives the doctor adequate time to review patient history, perform a physical examination, discuss symptoms, recommend diagnostic checkups, and write out digital prescriptions without any rush."
    },
    {
      question: "How are fees and billing handled?",
      answer: "All billing is transparent and handled securely inside the mobile app. You will see the fixed consulting fee upfront before booking, which covers the doctor's visit and basic diagnostic checks. You can pay via secure gateways using UPI, credit cards, or net banking."
    },
    {
      question: "Can I get digital prescriptions after the visit?",
      answer: "Yes, immediately after the visit is completed, the doctor will generate an encrypted digital prescription containing their digital signature and GMC/NMC registration number. This prescription will be stored securely in your app for easy access, printing, or ordering medicines."
    }
  ];

  return (
    <section className="py-20 relative bg-slate-50/50 dark:bg-slate-900/10 border-y border-slate-150/40 dark:border-slate-800/40">
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-sky-500/5 rounded-full glow-blob pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/5 border border-teal-500/10">
            <HelpCircle className="w-4 h-4 text-teal-600 dark:text-teal-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
              Questions & Answers
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-50">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Learn more about how home visits work, patient guidelines, and doctor matching.
          </p>
        </div>

        {/* FAQ list */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-teal-500/10 shadow-lg bg-white/60 dark:bg-slate-900/60">
          {faqs.map((faq, idx) => (
            <FAQItem
              key={idx}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIdx === idx}
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
