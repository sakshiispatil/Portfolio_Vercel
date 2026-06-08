/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Features from "./components/Features";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-white text-gray-905 overflow-x-hidden selection:bg-brand-purple/30 selection:text-white">
      {/* Dynamic Navigation Bar */}
      <Navbar />

      {/* Hero Section with Bottom Fade Transition Mask */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Features offering deep-dive */}
      <Features />

      {/* Roadmap Process sequence */}
      <Process />

      {/* Interactive Contact block */}
      <Contact />

      {/* Dynamic footer + Sticky scroll-to-top component */}
      <Footer />
    </div>
  );
}

