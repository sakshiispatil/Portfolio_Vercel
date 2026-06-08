/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Briefcase, GraduationCap, Code2, Heart, ArrowRight } from "lucide-react";
import { ABOUT_CARDS, PERSONAL_DETAILS } from "../data";
import ScrollReveal from "./ScrollReveal";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Briefcase: Briefcase,
  GraduationCap: GraduationCap,
  Code2: Code2,
  Heart: Heart,
};

export default function About() {
  const handleScrollToServices = () => {
    const element = document.getElementById("services");
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
      id="about"
      className="relative py-24 bg-white bg-grid-pattern-light overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        {/* About Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN - INTRODUCTION TEXT (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <ScrollReveal direction="up" delay={0.1}>
              {/* Little Badge tag from design */}
              <div className="inline-flex items-center mb-4">
                <span className="text-purple-600 font-bold uppercase text-xs tracking-widest">
                  About Me
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-950 tracking-tight leading-tight mb-6">
                Let me introduce myself
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
                I’m Sakshi, a passionate web developer with experience in building static and dynamic websites. 
                I have worked in the IT-Tech Domain, delivered live projects in corporate environments, 
                and am available to work on freelance projects. I love turning ideas into real, impactful digital experiences.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4}>
              {/* Know More About Me Button with professional polish rounded-lg styling */}
              <button
                id="about-btn-know-more"
                onClick={handleScrollToServices}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-sm font-bold uppercase tracking-wider text-white bg-purple-600 hover:bg-purple-700 shadow-xl shadow-purple-900/10 hover:shadow-purple-600/35 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
              >
                Know More About Me
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </ScrollReveal>
          </div>

          {/* RIGHT COLUMN - GRID CARDS (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {ABOUT_CARDS.map((card, index) => {
              const IconComp = iconMap[card.iconName] || Code2;
              return (
                <ScrollReveal
                  id={`about-card-${card.id}`}
                  key={card.id}
                  direction="up"
                  delay={0.15 + index * 0.1}
                >
                  <div className="group h-full p-6 bg-[#fafafd] hover:bg-white border border-brand-purple/5 hover:border-brand-purple/20 shadow-md hover:shadow-xl rounded-2xl transition-all duration-300 flex flex-col items-start transform-gpu hover:-translate-y-1">
                    {/* Icon frame */}
                    <div className="p-3 bg-brand-purple/10 text-brand-purple rounded-xl mb-5 group-hover:bg-brand-purple group-hover:text-white transition-all duration-300">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <h3 className="font-display font-bold text-lg text-gray-950 mb-3 group-hover:text-brand-purple transition-colors duration-300">
                      {card.title}
                    </h3>

                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
