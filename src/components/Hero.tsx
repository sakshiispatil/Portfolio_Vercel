/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ArrowDown, Linkedin, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { PERSONAL_DETAILS } from "../data";

export default function Hero() {
  const { scrollY } = useScroll();

  // Scroll interactive transformations for the bottom reveal overlay
  const overlayOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const overlayBlur = useTransform(scrollY, [0, 400], ["32px", "0px"]);
  const overlayY = useTransform(scrollY, [0, 400], ["0%", "20%"]);
  const displayTrigger = useTransform(scrollY, (y) => (y > 380 ? "none" : "block"));

  const handleScrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      const navbarOffset = 76;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-brand-bg-dark bg-grid-pattern pt-24 pb-16 overflow-hidden select-none"
    >
      {/* BACKGROUND GRAPHIC ORBS & FLOATING HALOS */}
      <div id="hero-orbs" className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 right-40 w-72 h-72 bg-purple-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-indigo-600/10 rounded-full blur-[80px]" />
        {/* Particle circles */}
        <div className="absolute top-1/3 left-10 w-2 h-2 rounded-full bg-brand-purple/40 animate-bounce" />
        <div className="absolute bottom-1/3 right-12 w-2.5 h-2.5 rounded-full bg-brand-purple-light/20 animate-float" />
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 rounded-full bg-brand-purple/50" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full z-10 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* LEFT COLUMN - TEXT CONTENT */}
        <motion.div
          id="hero-text-block"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="col-span-1 md:col-span-12 lg:col-span-7 flex flex-col justify-center text-left space-y-6"
        >
          {/* Accent Label */}
          <div className="space-y-2">
            <span className="text-purple-400 font-semibold tracking-wider text-sm uppercase">
              {PERSONAL_DETAILS.heroSubtitle}
            </span>
            <h1 className="font-display font-bold text-7xl text-white tracking-tight leading-none mb-2">
              Sakshi
            </h1>
            <h2 className="text-2xl text-purple-300 font-medium">
              {PERSONAL_DETAILS.tagline}
            </h2>
          </div>

          <p className="text-gray-400 text-lg leading-relaxed max-w-lg mb-8">
            {PERSONAL_DETAILS.heroDescription}
          </p>

          {/* TWO SPECIFIED BUTTONS ONLY WITH PROFESSIONAL POLISH STYLING */}
          <div className="flex items-center space-x-4 pt-4">
            {/* BUTTON 1 - Know More About Me */}
            <button
              id="hero-btn-know-more"
              onClick={handleScrollToAbout}
              className="px-8 py-3.5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-bold flex items-center space-x-2 shadow-xl shadow-purple-900/20 active:scale-95 transition-all group cursor-pointer"
            >
              <span>Know More About Me</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </button>

            {/* BUTTON 2 - LinkedIn Profile */}
            <a
              id="hero-btn-linkedin"
              href={PERSONAL_DETAILS.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 border border-white/20 text-white rounded-lg font-bold hover:bg-white/5 transition-all"
            >
              LinkedIn Profile
            </a>
          </div>
        </motion.div>

        {/* RIGHT COLUMN - PREMIUM CIRCULAR FRAME HERO PHOTO */}
        <motion.div
          id="hero-avatar-block"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="col-span-1 md:col-span-12 lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[26rem] md:h-[26rem] flex items-center justify-center">
            {/* Outer Glow Rings matches design HTML */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[400px] h-[400px] border border-white/5 rounded-full animate-pulse" />
              <div className="absolute w-[340px] h-[340px] border border-purple-500/20 rounded-full" />
              <div className="absolute w-[460px] h-[460px] border border-purple-900/10 rounded-full" />
            </div>

            {/* Profile Picture Envelope Container */}
            <div className="relative w-[320px] h-[320px] rounded-full p-2 bg-gradient-to-tr from-purple-600 to-indigo-500 shadow-2xl shadow-purple-500/40">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#1a1a2e] relative flex items-center justify-center">
                <img
                  id="hero-profile-avatar"
                  src={PERSONAL_DETAILS.profileImagePath}
                  alt={PERSONAL_DETAILS.fullName}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center scale-[1.02] hover:scale-[1.08] transition-transform duration-700 select-none pb-4"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* GRADUAL BLUR OVERLAY MASK AT THE BOTTOM (HIDES LOWER SECTIONS INITIALLY) */}
      <motion.div
        id="hero-reveal-mask"
        style={{
          opacity: overlayOpacity,
          backdropFilter: `blur(${overlayBlur})`,
          y: overlayY,
          display: displayTrigger,
        }}
        className="absolute bottom-0 left-0 w-full h-[18vh] bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-30"
      >
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center pointer-events-auto">
          <div className="flex flex-col items-center">
            <div className="text-gray-450 text-xs font-bold uppercase tracking-[0.2em] mb-2 text-gray-500">Scroll to Discover</div>
            <div className="w-1 h-12 bg-gray-200 rounded-full relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-purple-500 animate-bounce"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
