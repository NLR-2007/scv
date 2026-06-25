"use client";

import React, { useState } from "react";
import { 
  Users, 
  Apple, 
  Droplet, 
  Clock, 
  FileText, 
  Building,
  Plus,
  Search,
  CheckCircle,
  Upload,
  Star,
  MapPin,
  Share2,
  Calendar,
  AlertCircle
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type ModuleType = "family" | "nutrition" | "blood" | "medication" | "medicine_labs" | "finder";

export default function ModuleExplorer() {
  const [activeModule, setActiveModule] = useState<ModuleType>("family");

  // Tab definitions
  const modules = [
    {
      id: "family" as ModuleType,
      icon: <Users className="w-5 h-5" />,
      title: "Family Health Dashboard",
      subtitle: "Manage multiple family profiles",
      color: "from-teal-500 to-emerald-500"
    },
    {
      id: "nutrition" as ModuleType,
      icon: <Apple className="w-5 h-5" />,
      title: "Diet & Nutrition Planner",
      subtitle: "Hydration and meal logs",
      color: "from-emerald-500 to-teal-500"
    },
    {
      id: "blood" as ModuleType,
      icon: <Droplet className="w-5 h-5" />,
      title: "Blood Bank Locator",
      subtitle: "Find local donors & request blood",
      color: "from-red-500 to-rose-500"
    },
    {
      id: "medication" as ModuleType,
      icon: <Clock className="w-5 h-5" />,
      title: "Medication Reminders",
      subtitle: "Pill schedules and refill alerts",
      color: "from-sky-500 to-blue-500"
    },
    {
      id: "medicine_labs" as ModuleType,
      icon: <FileText className="w-5 h-5" />,
      title: "Medicine & Lab Booking",
      subtitle: "Prescriptions and home samples",
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: "finder" as ModuleType,
      icon: <Building className="w-5 h-5" />,
      title: "Hospital & Clinic Finder",
      subtitle: "Find nearby clinical consultation centers",
      color: "from-teal-600 to-sky-600"
    }
  ];

  // 1. Family Dashboard State & Simulation
  const [activeProfile, setActiveProfile] = useState<"self" | "father" | "daughter">("self");
  const [isShared, setIsShared] = useState(false);
  const profiles = {
    self: {
      name: "Aravind Nair (You)",
      age: 29,
      blood: "O+",
      lastCheckup: "12 Jan 2026",
      activeRx: 1,
      allergies: "Penicillin"
    },
    father: {
      name: "Ramesh Nair (Father)",
      age: 63,
      blood: "A+",
      lastCheckup: "18 Jun 2026",
      activeRx: 3,
      allergies: "Dust, Pollen"
    },
    daughter: {
      name: "Diya Nair (Daughter)",
      age: 5,
      blood: "O+",
      lastCheckup: "04 May 2026",
      activeRx: 0,
      allergies: "Lactose"
    }
  };

  const handleShare = () => {
    setIsShared(true);
    setTimeout(() => setIsShared(false), 2500);
  };

  // 2. Nutrition State & Simulation
  const [waterGlasses, setWaterGlasses] = useState(5);
  const maxWater = 10;
  const mealPlan = [
    { type: "Breakfast", food: "Oatmeal with chia seeds, banana slices & almonds" },
    { type: "Lunch", food: "Brown rice, dal fry, grilled paneer & cucumber salad" },
    { type: "Dinner", food: "Mixed vegetable stew, whole wheat chapati & herbal tea" }
  ];

  // 3. Blood Locator State & Simulation
  const [selectedBlood, setSelectedBlood] = useState("O-");
  const [bloodSearchLoading, setBloodSearchLoading] = useState(false);
  const [bloodResults, setBloodResults] = useState<Array<{ name: string; distance: string; contact: string; checked: boolean }>>([]);

  const handleBloodSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setBloodSearchLoading(true);
    setTimeout(() => {
      setBloodResults([
        { name: "Dr. Sandeep Kumar", distance: "0.8 km", contact: "9845******", checked: false },
        { name: "Meera Deshmukh", distance: "1.4 km", contact: "9901******", checked: false },
        { name: "Amit Sharma", distance: "2.5 km", contact: "8892******", checked: false }
      ]);
      setBloodSearchLoading(false);
    }, 600);
  };

  const handleRequestDonor = (idx: number) => {
    const list = [...bloodResults];
    list[idx].checked = true;
    setBloodResults(list);
  };

  // 4. Medication Reminders State & Simulation
  const [meds, setMeds] = useState([
    { id: 1, name: "Metformin (500mg)", schedule: "Post Breakfast", taken: true },
    { id: 2, name: "Vitamin D3 (60K)", schedule: "Post Lunch", taken: false },
    { id: 3, name: "Aspirin (75mg)", schedule: "Post Dinner", taken: false }
  ]);

  const toggleMed = (id: number) => {
    setMeds(meds.map(m => m.id === id ? { ...m, taken: !m.taken } : m));
  };

  // 5. Medicine & Labs State & Simulation
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadState, setUploadState] = useState<"idle" | "uploading" | "done">("idle");
  const [selectedLabPkg, setSelectedLabPkg] = useState<string | null>(null);

  const simulateUpload = () => {
    setUploadState("uploading");
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploadState("done");
          return 100;
        }
        return prev + 25;
      });
    }, 150);
  };

  // 6. Hospital Locator State & Simulation
  const hospitals = [
    { name: "City Care Multi-Specialty", rating: 4.8, dist: "0.9 km", open: "24 Hours" },
    { name: "Fortis Primary Health Center", rating: 4.6, dist: "2.3 km", open: "8 AM - 8 PM" },
    { name: "NLR Diagnostics & Clinic", rating: 4.9, dist: "1.1 km", open: "24 Hours" }
  ];
  const [bookedClinic, setBookedClinic] = useState<string | null>(null);

  return (
    <section id="module-explorer" className="py-20 relative bg-white dark:bg-slate-950 overflow-hidden border-t border-slate-100 dark:border-slate-900/60 transition-colors">
      <div className="absolute top-10 right-1/4 w-80 h-80 bg-teal-500/5 rounded-full glow-blob pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-sky-500/5 rounded-full glow-blob pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 px-3 py-1 rounded-full bg-teal-500/5 border border-teal-500/10">
            Interactive Product Preview
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-55">
            Explore the SureCure Visit Mobile Experience
          </h2>
          <p className="text-slate-550 dark:text-slate-400 text-sm sm:text-base">
            Click on any module below to interact with a live preview of the mobile application features currently under development.
          </p>
        </div>

        {/* Explorer Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Navigation - Horizontal Scroll on Mobile, Vertical List on Desktop */}
          <div className="lg:col-span-5 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 gap-3 scrollbar-none snap-x snap-mandatory justify-start">
            {modules.map((mod) => (
              <button
                key={mod.id}
                onClick={() => setActiveModule(mod.id)}
                className={`p-3 sm:p-4 rounded-2xl border text-left flex items-center lg:items-start space-x-3 sm:space-x-4 cursor-pointer transition-all duration-300 shrink-0 snap-align-start ${
                  activeModule === mod.id
                    ? "bg-teal-500/5 border-teal-500 dark:border-teal-500/50 shadow-md shadow-teal-500/5"
                    : "border-slate-100 dark:border-slate-900/60 bg-white/50 dark:bg-slate-900/30 hover:border-slate-200 dark:hover:border-slate-800"
                }`}
              >
                <div className={`p-2.5 sm:p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shrink-0 ${
                  activeModule === mod.id ? "text-teal-600 dark:text-teal-400" : "text-slate-400"
                }`}>
                  {mod.icon}
                </div>
                <div className="space-y-0.5 leading-tight">
                  <h4 className={`text-xs sm:text-sm lg:text-base font-bold whitespace-nowrap ${
                    activeModule === mod.id ? "text-slate-900 dark:text-slate-100" : "text-slate-600 dark:text-slate-400"
                  }`}>
                    {mod.title}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-slate-400 dark:text-slate-500 hidden lg:block">
                    {mod.subtitle}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Right Column: Dynamic Simulation View */}
          <div className="lg:col-span-7 flex justify-center items-center">
            <div className="w-full glass-panel rounded-3xl border border-teal-500/10 p-5 sm:p-8 min-h-[460px] flex flex-col justify-between shadow-xl relative overflow-hidden text-slate-800 dark:text-slate-250 bg-gradient-to-b from-white/95 to-white/90 dark:from-slate-900/95 dark:to-slate-900/90 transition-all">
              
              {/* Simulator Screen Header */}
              <div className="border-b border-slate-100 dark:border-slate-800 pb-4 mb-5 flex justify-between items-center text-xs text-slate-400 font-bold tracking-wide">
                <span className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                  <span>SureCure Active Simulator</span>
                </span>
                <span className="bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full text-[10px] text-slate-500">
                  {modules.find(m => m.id === activeModule)?.title}
                </span>
              </div>

              {/* Simulation Content Body */}
              <div className="flex-1 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  
                  {/* Family Health Dashboard Simulation */}
                  {activeModule === "family" && (
                    <motion.div
                      key="family"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-5 text-left"
                    >
                      <p className="text-xs text-slate-400 leading-normal">
                        Verify multiple relative cards within the profile portal, allowing clinical reports to sync. Select a profile:
                      </p>
                      
                      {/* Profile selectors */}
                      <div className="flex flex-wrap gap-2">
                        {Object.keys(profiles).map((pKey) => (
                          <button
                            key={pKey}
                            onClick={() => setActiveProfile(pKey as any)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                              activeProfile === pKey
                                ? "bg-teal-600 text-white shadow-sm"
                                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-450 hover:bg-slate-200 dark:hover:bg-slate-700"
                            }`}
                          >
                            {profiles[pKey as keyof typeof profiles].name.split(" ")[0]}
                          </button>
                        ))}
                      </div>

                      {/* Active health card */}
                      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 space-y-3 relative overflow-hidden">
                        <div className="absolute right-4 top-4 text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/40 px-2 py-0.5 rounded-md">
                          Age: {profiles[activeProfile].age}
                        </div>
                        
                        <div className="space-y-1">
                          <h5 className="font-bold text-sm text-slate-800 dark:text-slate-150">
                            {profiles[activeProfile].name}
                          </h5>
                          <p className="text-[11px] text-slate-400">Linked Account • Co-Patient Profile</p>
                        </div>

                        <div className="grid grid-cols-3 gap-2 text-center text-xs">
                          <div className="bg-white dark:bg-slate-900 border border-slate-100/50 dark:border-slate-850 p-2 rounded-xl">
                            <span className="text-[9px] text-slate-400 block">Blood Group</span>
                            <span className="font-bold text-slate-800 dark:text-slate-200">{profiles[activeProfile].blood}</span>
                          </div>
                          <div className="bg-white dark:bg-slate-900 border border-slate-100/50 dark:border-slate-850 p-2 rounded-xl">
                            <span className="text-[9px] text-slate-400 block">Active Rx</span>
                            <span className="font-bold text-slate-800 dark:text-slate-200">{profiles[activeProfile].activeRx}</span>
                          </div>
                          <div className="bg-white dark:bg-slate-900 border border-slate-100/50 dark:border-slate-850 p-2 rounded-xl">
                            <span className="text-[9px] text-slate-400 block">Last Visit</span>
                            <span className="font-bold text-slate-800 dark:text-slate-200 whitespace-nowrap">{profiles[activeProfile].lastCheckup.split(" ").slice(0,2).join(" ")}</span>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2 text-xs text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/20 px-3 py-2 rounded-xl">
                          <AlertCircle className="w-4 h-4 shrink-0" />
                          <span>Allergies: <strong>{profiles[activeProfile].allergies}</strong></span>
                        </div>
                      </div>

                      {/* Record sharing CTA */}
                      <button
                        onClick={handleShare}
                        className="w-full py-2.5 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white rounded-xl font-semibold text-xs transition-colors flex items-center justify-center space-x-1.5 cursor-pointer"
                      >
                        {isShared ? (
                          <>
                            <CheckCircle className="w-4 h-4 text-emerald-400" />
                            <span>Encrypted Link Sent to Doctor</span>
                          </>
                        ) : (
                          <>
                            <Share2 className="w-4 h-4" />
                            <span>Share Records with Attending Doctor</span>
                          </>
                        )}
                      </button>
                    </motion.div>
                  )}

                  {/* Nutrition Simulator */}
                  {activeModule === "nutrition" && (
                    <motion.div
                      key="nutrition"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
                    >
                      {/* Water Tracker Widget */}
                      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 flex flex-col items-center justify-between text-center space-y-4">
                        <div className="space-y-0.5">
                          <h5 className="font-bold text-xs text-slate-700 dark:text-slate-350 uppercase tracking-wider">Hydration Tracker</h5>
                          <p className="text-[10px] text-slate-400">Daily target: 2.5 Liters</p>
                        </div>

                        {/* Progress visual */}
                        <div className="relative w-24 h-24 flex items-center justify-center">
                          {/* Inner level hydration mock */}
                          <svg className="w-24 h-24 transform -rotate-90">
                            <circle cx="48" cy="48" r="40" stroke="rgba(14, 165, 233, 0.1)" strokeWidth="6" fill="transparent" />
                            <motion.circle
                              cx="48" cy="48" r="40"
                              stroke="rgb(14, 165, 233)"
                              strokeWidth="6"
                              fill="transparent"
                              strokeDasharray="251.2"
                              strokeDashoffset={251.2 - (251.2 * Math.min(waterGlasses, maxWater)) / maxWater}
                              transition={{ type: "spring", stiffness: 60 }}
                            />
                          </svg>
                          <div className="absolute flex flex-col items-center">
                            <span className="text-xl font-extrabold text-slate-800 dark:text-slate-100 leading-none">{waterGlasses}</span>
                            <span className="text-[9px] text-slate-450 mt-1">/ {maxWater} glasses</span>
                          </div>
                        </div>

                        <button
                          onClick={() => setWaterGlasses(prev => prev < 12 ? prev + 1 : 0)}
                          className="px-4 py-1.5 bg-sky-600 hover:bg-sky-500 text-white rounded-xl font-bold text-xs flex items-center space-x-1 cursor-pointer transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add Glass</span>
                        </button>
                      </div>

                      {/* Daily Meal Recommendation */}
                      <div className="space-y-3">
                        <h5 className="font-bold text-xs text-slate-700 dark:text-slate-350 uppercase tracking-wider">Today's Meal Planner</h5>
                        <div className="space-y-2">
                          {mealPlan.map((meal, idx) => (
                            <div key={idx} className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100/50 dark:border-slate-850 text-xs">
                              <span className="font-bold text-teal-600 dark:text-teal-400 block text-[10px] uppercase tracking-wider mb-0.5">{meal.type}</span>
                              <span className="text-slate-600 dark:text-slate-350">{meal.food}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Blood bank Locator Simulator */}
                  {activeModule === "blood" && (
                    <motion.div
                      key="blood"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4 text-left"
                    >
                      <p className="text-xs text-slate-400">
                        Check live local blood inventories and search verified donor groups nearby for urgent needs.
                      </p>

                      <form onSubmit={handleBloodSearch} className="flex gap-2 items-center">
                        <div className="relative flex-1">
                          <select
                            value={selectedBlood}
                            onChange={(e) => setSelectedBlood(e.target.value)}
                            className="w-full pl-3 pr-8 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs text-slate-750 dark:text-slate-250 focus:outline-none focus:border-red-500"
                          >
                            <option value="O-">O- (Emergency Universal)</option>
                            <option value="O+">O+</option>
                            <option value="A+">A+</option>
                            <option value="B+">B+</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                          </select>
                        </div>
                        
                        <button
                          type="submit"
                          disabled={bloodSearchLoading}
                          className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-xl text-xs font-bold flex items-center space-x-1.5 cursor-pointer disabled:opacity-50 transition-colors"
                        >
                          <Search className="w-3.5 h-3.5" />
                          <span>Search Donors</span>
                        </button>
                      </form>

                      {/* Donor search output lists */}
                      <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                        {bloodSearchLoading ? (
                          <div className="text-center py-6 text-xs text-slate-400">Finding matches in your district...</div>
                        ) : bloodResults.length > 0 ? (
                          bloodResults.map((donor, idx) => (
                            <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-850 flex items-center justify-between text-xs">
                              <div>
                                <h6 className="font-bold text-slate-800 dark:text-slate-150">{donor.name}</h6>
                                <p className="text-[10px] text-slate-400 mt-0.5">Verified Donor • {donor.distance} away</p>
                              </div>
                              <button
                                onClick={() => handleRequestDonor(idx)}
                                disabled={donor.checked}
                                className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
                                  donor.checked
                                    ? "bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20"
                                    : "bg-red-500 text-white hover:bg-red-650"
                                }`}
                              >
                                {donor.checked ? "Alert Sent" : "Request Blood"}
                              </button>
                            </div>
                          ))
                        ) : (
                          <div className="text-center py-6 text-xs text-slate-400 border border-dashed border-slate-200 dark:border-slate-800 rounded-xl">
                            Select a blood group above to query active emergency donors.
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {/* Medication Reminders Simulator */}
                  {activeModule === "medication" && (
                    <motion.div
                      key="medication"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4 text-left"
                    >
                      <p className="text-xs text-slate-400">
                        Check off daily pill reminders to sync your EHR record and alert guardians.
                      </p>

                      <div className="space-y-2.5">
                        {meds.map((med) => (
                          <div
                            key={med.id}
                            onClick={() => toggleMed(med.id)}
                            className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                              med.taken
                                ? "bg-teal-500/5 border-teal-500/30 text-slate-400 dark:text-slate-500"
                                : "bg-slate-50 dark:bg-slate-900 border-slate-100 dark:border-slate-850 hover:border-slate-200"
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <input
                                type="checkbox"
                                checked={med.taken}
                                readOnly
                                className="w-4.5 h-4.5 rounded border-slate-350 text-teal-600 focus:ring-teal-500/20 cursor-pointer"
                              />
                              <div className="leading-tight">
                                <span className={`text-xs font-bold block ${med.taken ? "line-through" : "text-slate-800 dark:text-slate-150"}`}>
                                  {med.name}
                                </span>
                                <span className="text-[10px] text-slate-450">{med.schedule}</span>
                              </div>
                            </div>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                              med.taken 
                                ? "bg-teal-50 dark:bg-teal-950/20 text-teal-600 dark:text-teal-400" 
                                : "bg-amber-50 dark:bg-amber-950/20 text-amber-600 dark:text-amber-400"
                            }`}>
                              {med.taken ? "Taken" : "Scheduled"}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Medicine & Labs Simulator */}
                  {activeModule === "medicine_labs" && (
                    <motion.div
                      key="medicine_labs"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4 text-left"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        
                        {/* Prescription uploader */}
                        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 flex flex-col items-center justify-center text-center space-y-3">
                          <Upload className="w-7 h-7 text-indigo-500" />
                          <div className="space-y-0.5">
                            <h6 className="font-bold text-xs text-slate-700 dark:text-slate-350">Upload Prescription</h6>
                            <p className="text-[9px] text-slate-400">Order medicines directly</p>
                          </div>
                          
                          {uploadState === "idle" && (
                            <button
                              onClick={simulateUpload}
                              className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-[10px] font-bold cursor-pointer"
                            >
                              Select File
                            </button>
                          )}

                          {uploadState === "uploading" && (
                            <div className="w-full space-y-1">
                              <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${uploadProgress}%` }}
                                  className="h-full bg-indigo-600"
                                />
                              </div>
                              <span className="text-[8px] text-slate-400">{uploadProgress}% Uploading...</span>
                            </div>
                          )}

                          {uploadState === "done" && (
                            <div className="space-y-1">
                              <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold block flex items-center justify-center gap-1">
                                <CheckCircle className="w-3.5 h-3.5" /> Upload Completed
                              </span>
                              <button
                                onClick={() => setUploadState("idle")}
                                className="text-[9px] text-slate-400 hover:underline"
                              >
                                Clear
                              </button>
                            </div>
                          )}
                        </div>

                        {/* Lab Test booking */}
                        <div className="space-y-2">
                          <h6 className="font-bold text-xs text-slate-700 dark:text-slate-350 uppercase tracking-wider">Lab Sample Bookings</h6>
                          <div className="space-y-2">
                            {["Complete Hemogram (CBC)", "Diabetes Screening (HbA1c)", "Full Health Panel (64 tests)"].map((pkg) => (
                              <button
                                key={pkg}
                                onClick={() => setSelectedLabPkg(pkg)}
                                className={`w-full p-2.5 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer ${
                                  selectedLabPkg === pkg
                                    ? "bg-indigo-500/5 border-indigo-500 text-indigo-600 dark:text-indigo-400"
                                    : "bg-slate-50 dark:bg-slate-900 border-slate-100 dark:border-slate-850 hover:border-slate-250 text-slate-600 dark:text-slate-400"
                                }`}
                              >
                                {pkg}
                              </button>
                            ))}
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  )}

                  {/* Hospital Finder Simulator */}
                  {activeModule === "finder" && (
                    <motion.div
                      key="finder"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4 text-left"
                    >
                      <p className="text-xs text-slate-400">
                        Locate verified emergency clinics and hospital departments around Hyderabad.
                      </p>

                      <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                        {hospitals.map((hosp, idx) => (
                          <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-850 flex items-center justify-between text-xs">
                            <div className="space-y-0.5">
                              <h6 className="font-bold text-slate-800 dark:text-slate-150">{hosp.name}</h6>
                              <div className="flex items-center space-x-2 text-[10px] text-slate-400">
                                <span className="flex items-center text-amber-500"><Star className="w-3 h-3 fill-current mr-0.5" />{hosp.rating}</span>
                                <span>•</span>
                                <span>{hosp.dist}</span>
                                <span>•</span>
                                <span className="text-teal-600 dark:text-teal-400">{hosp.open}</span>
                              </div>
                            </div>
                            <button
                              onClick={() => setBookedClinic(hosp.name)}
                              className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
                                bookedClinic === hosp.name
                                  ? "bg-teal-500/10 text-teal-650 dark:text-teal-400 border border-teal-500/20"
                                  : "bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700"
                              }`}
                            >
                              {bookedClinic === hosp.name ? "Appointment Booked" : "Book Clinic Visit"}
                            </button>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>

              {/* Simulator Screen Footer */}
              <div className="border-t border-slate-100 dark:border-slate-800 pt-4 mt-5 flex justify-between items-center text-[10px] text-slate-400 font-medium">
                <span>Secure SSL Encryption</span>
                <span className="flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5 text-teal-500" />
                  <span>Hyderabad Hub</span>
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
