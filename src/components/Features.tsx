/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { TrendingUp, ShieldCheck, Globe, Cpu, Sparkles } from "lucide-react";
import { FEATURE_CARDS } from "../data";
import ScrollReveal from "./ScrollReveal";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  TrendingUp: TrendingUp,
  ShieldCheck: ShieldCheck,
  Globe: Globe,
  Cpu: Cpu,
  Sparkles: Sparkles,
};

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 bg-[#050511] text-white bg-grid-pattern relative overflow-hidden"
    >
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-20 flex flex-col items-center">
          <ScrollReveal direction="up" delay={0.1}>
            <span className="text-purple-400 font-semibold tracking-wider text-sm uppercase">
              Features I Offer
            </span>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mt-4 tracking-tight leading-none">
              Why Work With Me?
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <div className="w-12 h-1 bg-purple-600 rounded-full mt-4" />
          </ScrollReveal>
        </div>

        {/* 5-COLUMN FEATURE TILES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 lg:divide-x lg:divide-white/10 gap-8 lg:gap-0">
          {FEATURE_CARDS.map((feature, index) => {
            const IconComp = iconMap[feature.iconName] || SparklingIcon;
            return (
              <ScrollReveal
                id={`feature-card-${feature.id}`}
                key={feature.id}
                direction="up"
                delay={0.15 + index * 0.08}
                className="h-full"
              >
                <div className="group h-full p-6 lg:px-6 lg:py-8 flex flex-col justify-start items-center text-center transition-all duration-300 hover:bg-white/[0.02] transform-gpu">
                  {/* Icon framed in glowing circle */}
                  <div className="p-3 bg-purple-600/10 text-purple-400 rounded-full mb-6 group-hover:scale-115 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-lg shadow-purple-500/5">
                    <IconComp className="w-6 h-6" />
                  </div>

                  {/* Feature Title */}
                  <h3 className="font-display font-bold text-base md:text-sm lg:text-base text-white tracking-wide mb-3 min-h-[44px] flex items-center justify-center transition-colors duration-300 group-hover:text-purple-400">
                    {feature.title}
                  </h3>

                  {/* Feature Description */}
                  <p className="text-gray-400 text-xs sm:text-[13px] leading-relaxed group-hover:text-gray-300 transition-colors duration-300 px-2">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}

// Fallback icon for dynamic cases
function SparklingIcon({ className }: { className?: string }) {
  return <Sparkles className={className} />;
}
