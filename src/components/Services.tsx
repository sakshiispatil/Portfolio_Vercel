/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Monitor, FileCode, CloudLightning } from "lucide-react";
import { SERVICE_CARDS } from "../data";
import ScrollReveal from "./ScrollReveal";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Monitor: Monitor,
  FileCode: FileCode,
  CloudLightning: CloudLightning,
};

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-[#faf9fc] bg-grid-pattern-light overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full text-center">
        
        {/* SECTION HEADER */}
        <div className="mb-16 flex flex-col items-center">
          <ScrollReveal direction="up" delay={0.1}>
            <span className="text-purple-600 font-bold uppercase text-xs tracking-widest">
              My Services
            </span>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-gray-950 mt-4 tracking-tight leading-none">
              What I Offer
            </h2>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.3}>
            <div className="w-12 h-1 bg-purple-600 rounded-full mt-4" />
          </ScrollReveal>
        </div>

        {/* 3-COLUMN SERVICES CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICE_CARDS.map((service, index) => {
            const IconComp = iconMap[service.iconName] || Monitor;
            return (
              <ScrollReveal
                id={`service-card-${service.id}`}
                key={service.id}
                direction="up"
                delay={0.15 + index * 0.1}
              >
                <div className="group relative h-full bg-white p-8 rounded-3xl border border-gray-100 hover:border-purple-600/20 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col items-center transform-gpu hover:-translate-y-1.5 overflow-hidden">
                  {/* Absolute subtle background color glow */}
                  <div className="absolute top-0 left-0 w-2 h-0 group-hover:h-full bg-purple-600 transition-all duration-300" />

                  {/* Icon Panel with halo circle */}
                  <div className="w-16 h-16 rounded-2xl bg-purple-50 text-purple-600 hover:bg-purple-600 hover:text-white flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110">
                    <IconComp className="w-8 h-8" />
                  </div>

                  {/* Card Title */}
                  <h3 className="font-display font-bold text-xl text-gray-900 mb-4 transition-colors duration-300 group-hover:text-purple-600">
                    {service.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-gray-500 text-sm leading-relaxed text-center group-hover:text-gray-650 transition-colors duration-300">
                    {service.description}
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
