/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_LINKS, PERSONAL_DETAILS } from "../data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Manage navbar backdrop blur and shadow state on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Automatically determine active section based on viewport intersection
      const scrollPosition = window.scrollY + 120;
      for (const link of NAV_LINKS) {
        const id = link.href.slice(1);
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const id = href.slice(1);
    const element = document.getElementById(id);
    if (element) {
      // Smooth scroll with space for the sticky navbar
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
    <nav
      id="navbar-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-brand-bg-dark/85 backdrop-blur-md border-b border-white/5 shadow-lg elevated shadow-purple-950/10"
          : "py-5 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* LOGO */}
        <a
          id="nav-logo"
          href="#home"
          onClick={(e) => handleLinkClick(e, "#home")}
          className="font-display font-bold text-2xl tracking-normal text-white flex items-center"
        >
          Sakshi
        </a>

        {/* DESKTOP NAV LINKS */}
        <div id="desktop-links" className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-white/5 p-1 rounded-full border border-white/5">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.slice(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                id={`navlink-${sectionId}`}
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                  isActive
                    ? "bg-purple-600 text-white shadow-md shadow-purple-500/20"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* HIRE ME ACTION BUTTON */}
        <div id="nav-action" className="hidden md:block">
          <a
            id="btn-hire-me-nav"
            href="#contact"
            onClick={(e) => handleLinkClick(e, "#contact")}
            className="px-6 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-full text-sm font-semibold transition-all shadow-lg shadow-purple-500/20 block text-center"
          >
            Hire Me
          </a>
        </div>

        {/* MOBILE TRIGGER */}
        <button
          id="btn-mobile-menu"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-center p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-brand-purple"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE DRAWER */}
      <div
        id="mobile-drawer"
        className={`md:hidden absolute top-full left-0 w-full bg-brand-bg-dark/95 backdrop-blur-xl border-b border-white/5 transition-all duration-300 ease-in-out origin-top ${
          isOpen ? "opacity-100 scale-y-100 py-6 px-6" : "opacity-0 scale-y-0 h-0 pointer-events-none py-0 px-0"
        }`}
      >
        <div className="flex flex-col space-y-3">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.slice(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                id={`mlink-${sectionId}`}
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-brand-purple/20 text-brand-purple-light border-l-4 border-brand-purple pl-3"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </a>
            );
          })}

          <div className="pt-4 border-t border-white/5">
            <a
              id="mbtn-hire-me"
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-brand-purple hover:bg-brand-purple-dark transition-all duration-200"
            >
              Hire Me
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
