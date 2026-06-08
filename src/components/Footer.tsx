/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Linkedin, Mail, ArrowUp, Send, Heart } from "lucide-react";
import { NAV_LINKS, PERSONAL_DETAILS } from "../data";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.slice(1);
    const element = document.getElementById(id);
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
    <footer
      id="main-applet-footer"
      className="relative bg-[#050511] border-t border-white/5 pt-16 pb-8 text-gray-400 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        
        {/* TOP LAYOUT SHIELD */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* LEFT PANEL - BRANDING (5 cols) */}
          <div className="md:col-span-12 lg:col-span-5 flex flex-col items-start text-left">
            <a
              id="footer-logo"
              href="#home"
              onClick={handleScrollToTop}
              className="font-display font-extrabold text-2xl tracking-tight text-white mb-4"
            >
              Sakshi
            </a>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed mb-6">
              Building modern, secure and fast websites that help businesses grow online. Focused on performance, responsive layout, and robust security standards.
            </p>
          </div>

          {/* MIDDLE PANEL - RESOURCE LINKS (3 cols) */}
          <div className="md:col-span-6 lg:col-span-3 flex flex-col items-start text-left">
            <h4 className="font-display font-bold text-xs uppercase tracking-[0.2em] text-white mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {NAV_LINKS.filter(l => l.label !== "Testimonials" && l.label !== "Features").map((link) => (
                <li key={link.href}>
                  <a
                    id={`footerlink-${link.href.slice(1)}`}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-purple-400 transition-all duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT PANEL - NEWSLETTER / CONTACT CHANNELS (4 cols) */}
          <div className="md:col-span-6 lg:col-span-4 flex flex-col items-start text-left">
            <h4 className="font-display font-bold text-xs uppercase tracking-[0.2em] text-white mb-5">
              Connect With Me
            </h4>
            <p className="text-xs text-gray-400 mb-4">
              Feel free to connect or drop in an email. Response will be given within a business day.
            </p>
            
            <div className="flex items-center gap-3 mb-6">
              {/* LinkedIn icon */}
              <a
                id="footer-ico-linkedin"
                href={PERSONAL_DETAILS.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-purple-600 text-gray-300 hover:text-white flex items-center justify-center border border-white/5 hover:border-purple-600/20 transition-all duration-300"
                aria-label="LinkedIn Profile Reference"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              {/* Email icon */}
              <a
                id="footer-ico-email"
                href={`mailto:${PERSONAL_DETAILS.email}`}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-purple-600 text-gray-300 hover:text-white flex items-center justify-center border border-white/5 hover:border-purple-600/20 transition-all duration-300"
                aria-label="Email Address Direct link"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT SUMMARY */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-gray-500 tracking-wide">
            © 2026 Sakship_Freelance_Service. All Rights Reserved.
          </p>
          <p className="text-gray-500 flex items-center gap-1">
            Engineered with <Heart className="w-3 h-3 text-purple-500 fill-current" /> in React & TailwindCSS.
          </p>
        </div>

      </div>

      {/* FLOATING SCROLL TO TOP CHEVRON (BOTTOM RIGHT) */}
      <button
        id="btn-scroll-to-top"
        onClick={handleScrollToTop}
        className={`fixed bottom-6 right-6 z-40 p-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-xl shadow-purple-600/15 hover:shadow-purple-600/35 border border-purple-500/10 hover:scale-110 active:scale-95 transition-all duration-300 pointer-events-auto flex items-center justify-center ${
          showScrollTop ? "opacity-100 scale-100" : "opacity-0 scale-50 pointer-events-none"
        }`}
        aria-label="Scroll back to top of page"
      >
        <ArrowUp className="w-5 h-5 text-white" />
      </button>
    </footer>
  );
}
