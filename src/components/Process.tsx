/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Lightbulb, FileText, Terminal, Rocket, LifeBuoy, ArrowRight } from "lucide-react";
import { PROCESS_STEPS } from "../data";
import ScrollReveal from "./ScrollReveal";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Lightbulb: Lightbulb,
  FileText: FileText,
  Terminal: Terminal,
  Rocket: Rocket,
  LifeBuoy: LifeBuoy,
};

export default function Process() {
  return (
    <section
      id="process"
      className="py-24 bg-white bg-grid-pattern-light overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-20 flex flex-col items-center">
          <ScrollReveal direction="up" delay={0.1}>
            <span className="text-purple-600 font-bold uppercase text-xs tracking-widest">
              My Process
            </span>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-950 mt-4 tracking-tight leading-none">
              How I Work
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <div className="w-12 h-1 bg-purple-600 rounded-full mt-4" />
          </ScrollReveal>
        </div>

        {/* WORKFLOW ROADMAP */}
        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[68px] left-[10%] right-[10%] h-[2px] bg-dashed border-b-2 border-dashed border-purple-500/15 -z-10" />

          {/* Staggered process grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10 w-full">
            {PROCESS_STEPS.map((step, index) => {
              const IconComp = iconMap[step.iconName] || Terminal;
              const isLast = index === PROCESS_STEPS.length - 1;

              return (
                <ScrollReveal
                  id={`process-step-${step.stepNumber}`}
                  key={step.stepNumber}
                  direction="up"
                  delay={0.15 + index * 0.08}
                  className="flex flex-col items-center h-full relative"
                >
                  {/* Step bubble with index indicator */}
                  <div className="relative mb-6 flex flex-col items-center">
                    {/* Index bubble */}
                    <div className="absolute -top-3 -right-3 w-7 h-7 bg-purple-600 text-white text-xs font-black rounded-full flex items-center justify-center border-2 border-white shadow-md z-20">
                      {step.stepNumber}
                    </div>

                    {/* Circle Frame */}
                    <div className="w-[110px] h-[110px] sm:w-[136px] sm:h-[136px] rounded-full bg-[#f8f7fa] group-hover:bg-purple-50 border border-purple-100 group-hover:border-purple-200 flex items-center justify-center p-4 transition-all duration-350 hover:scale-105 shadow-md">
                      <div className="w-16 h-16 rounded-full bg-purple-50 text-purple-600 font-medium flex items-center justify-center p-3 animate-float duration-300">
                        <IconComp className="w-8 h-8" />
                      </div>
                    </div>
                  </div>

                  {/* Desktop connecting arrow absolute container */}
                  {!isLast && (
                    <div className="hidden lg:flex absolute top-[58px] -right-[15%] w-10 text-purple-500/25 items-center justify-center z-20 animate-pulse">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}

                  {/* Info block */}
                  <div className="text-center px-4">
                    <h3 className="font-display font-black text-base text-gray-950 mb-2 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-[12.5px] leading-relaxed max-w-[190px] mx-auto">
                      {step.description}
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
