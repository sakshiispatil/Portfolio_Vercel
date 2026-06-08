/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Mail, Phone, Linkedin, CheckCircle2, AlertCircle, Send, Check } from "lucide-react";
import { PERSONAL_DETAILS } from "../data";
import { ContactFormInput } from "../types";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const [formValues, setFormValues] = useState<ContactFormInput>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<ContactFormInput>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validate = () => {
    const tempErrors: Partial<ContactFormInput> = {};
    if (!formValues.name.trim()) tempErrors.name = "Full Name is required";
    if (!formValues.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)) {
      tempErrors.email = "Please specify a valid email address";
    }
    if (!formValues.subject.trim()) tempErrors.subject = "Subject is required";
    if (!formValues.message.trim()) {
      tempErrors.message = "Message content is required";
    } else if (formValues.message.trim().length < 10) {
      tempErrors.message = "Please write a slightly longer message (min 10 characters)";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    // Clear error dynamically as the user types
    if (errors[name as keyof ContactFormInput]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Format & dispatch direct mailto to sakshi.sp613@gmail.com
    setTimeout(() => {
      const subjectLine = `Portfolio Inquiry: ${formValues.subject}`;
      const emailBody = `Hi Sakshi,\n\nYou have received a new message from your portfolio website's contact form:\n\n` +
        `----------------------------------------\n` +
        `Name: ${formValues.name}\n` +
        `Email: ${formValues.email}\n` +
        `Subject: ${formValues.subject}\n` +
        `----------------------------------------\n\n` +
        `Message:\n${formValues.message}\n\n` +
        `----------------------------------------\n` +
        `Sent directly from: Portfolio Contact Form`;

      const mailtoUrl = `mailto:sakshi.sp613@gmail.com?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(emailBody)}`;
      
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormValues({ name: "", email: "", subject: "", message: "" });
      
      // Trigger the local mail system redirect
      window.location.href = mailtoUrl;
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-[#0c051a] to-[#04040f] text-white bg-grid-pattern relative overflow-hidden"
    >
      <div className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full bg-brand-purple/10 blur-[130px]" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10 animate-fade-in">
        
        {/* SECTION HEADER */}
        <div className="mb-16 flex flex-col items-start text-left max-w-2xl">
          <ScrollReveal direction="up" delay={0.1}>
            <span className="text-purple-400 font-semibold tracking-wider text-sm uppercase">
              Get In Touch
            </span>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mt-4 tracking-tight leading-tight">
              Have a Project in Mind?
            </h2>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-gray-400 text-sm sm:text-base mt-2">
              Let's build something amazing together! Get in touch using the form or connect via direct channels.
            </p>
          </ScrollReveal>
        </div>

        {/* SECTION CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE - CONTACT DETAILS & FREELANCE SERVICES AVAILABLE CARD (5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-8 w-full">
            
            {/* Quick Contact Cards */}
            <div id="contact-channels" className="flex flex-col space-y-4">
              {/* Email Button-card */}
              <ScrollReveal direction="up" delay={0.15}>
                <a
                  id="btn-contact-email"
                  href={`mailto:${PERSONAL_DETAILS.email}`}
                  className="flex items-center gap-4 p-5 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/5 hover:border-purple-500/30 shadow-md group transition-all duration-300 transform-gpu hover:-translate-y-0.5"
                >
                  <div className="p-3.5 bg-purple-500/10 text-purple-400 rounded-xl group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono tracking-wider text-gray-400 uppercase">Share via Email</span>
                    <span className="block text-sm sm:text-base font-bold text-white tracking-wide mt-1 group-hover:text-purple-400 transition-colors duration-200">
                      {PERSONAL_DETAILS.email}
                    </span>
                  </div>
                </a>
              </ScrollReveal>

              {/* WhatsApp Button-card */}
              <ScrollReveal direction="up" delay={0.2}>
                <a
                  id="btn-contact-phone"
                  href={PERSONAL_DETAILS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/5 hover:border-green-500/30 shadow-md group transition-all duration-300 transform-gpu hover:-translate-y-0.5"
                >
                  <div className="p-3.5 bg-green-500/10 text-green-400 rounded-xl group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono tracking-wider text-gray-400 uppercase">Chat on WhatsApp</span>
                    <span className="block text-sm sm:text-base font-bold text-white tracking-wide mt-1 group-hover:text-green-400 transition-colors duration-200">
                      {PERSONAL_DETAILS.phone}
                    </span>
                  </div>
                </a>
              </ScrollReveal>

              {/* LinkedIn Button-card */}
              <ScrollReveal direction="up" delay={0.25}>
                <a
                  id="btn-contact-linkedin"
                  href={PERSONAL_DETAILS.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/5 hover:border-purple-500/30 shadow-md group transition-all duration-300 transform-gpu hover:-translate-y-0.5"
                >
                  <div className="p-3.5 bg-purple-500/10 text-purple-400 rounded-xl group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono tracking-wider text-gray-400 uppercase">Connect on LinkedIn</span>
                    <span className="block text-sm sm:text-base font-bold text-white tracking-wide mt-1 group-hover:text-purple-400 transition-colors duration-200">
                      Sakshi Patil Developer
                    </span>
                  </div>
                </a>
              </ScrollReveal>
            </div>

            {/* REPLACING THE PRICING CONTAINER WITH THE GOLD DOTTED CARD */}
            <ScrollReveal direction="up" delay={0.3}>
              <div className="p-8 bg-brand-purple/5 hover:bg-brand-purple/[0.08] rounded-3xl border-2 border-dashed border-amber-500/50 shadow-2xl relative overflow-hidden transition-all duration-350">
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-xl pointer-events-none" />
                
                {/* Header Indicator */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold">
                    ★
                  </div>
                  <h4 className="font-display font-extrabold text-base uppercase tracking-wider text-amber-400">
                    Freelance Services Available
                  </h4>
                </div>

                <p className="text-gray-400 text-xs sm:text-[13px] leading-relaxed mb-6 font-medium">
                  Providing full end-to-end bespoke website creation backing secure engineering, stellar SEO rankings, and ongoing administrative support:
                </p>

                {/* List items with checklist ticks */}
                <ul className="space-y-3.5">
                  {[
                    "Website Development (Static/Dynamic)",
                    "Domain connection and cloud hosting",
                    "On-Page SEO Configurations",
                    "SSL integration & Security Hardening",
                    "Monthly Updates & Maintenance Support",
                  ].map((serviceItem) => (
                    <li key={serviceItem} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-400">
                      <Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>{serviceItem}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-gray-500 uppercase">Freelance Hub</span>
                  <span className="text-amber-500 font-bold text-xs tracking-wider uppercase">High Availability</span>
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* RIGHT SIDE - THE MODERN FORM CONTAINER (7 cols) */}
          <div className="lg:col-span-7 w-full">
            <ScrollReveal direction="up" delay={0.2}>
              <div className="bg-white/[0.03] backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative">
                
                {submitStatus === "success" && (
                  <div className="absolute inset-0 bg-[#070715]/95 backdrop-blur-md rounded-3xl flex flex-col items-center justify-center text-center p-8 z-30">
                    <div className="w-16 h-16 bg-purple-500/20 text-purple-300 rounded-full flex items-center justify-center mb-6 border border-purple-500/30 animate-bounce">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-display font-black text-2xl text-white mb-2">Message Dispatched!</h3>
                    <p className="text-gray-450 text-sm max-w-sm text-gray-300 leading-relaxed mb-6">
                      Thank you for reaching out, Sakshi. Your requirements are safely transmitted. Expect a reply in your inbox soon!
                    </p>
                    <button
                      id="btn-form-reset"
                      onClick={() => setSubmitStatus("idle")}
                      className="px-6 py-2.5 bg-purple-600 hover:bg-purple-700 text-xs uppercase tracking-wider font-bold rounded-full transition-all duration-300"
                    >
                      Send Another Message
                    </button>
                  </div>
                )}

                <h3 className="font-display font-bold text-xl mb-6 text-white text-left">
                  Send a Secure Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Row for Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name input */}
                    <div className="text-left">
                      <label htmlFor="name" className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                        Full Name <span className="text-purple-400">*</span>
                      </label>
                      <input
                        id="form-name-input"
                        type="text"
                        name="name"
                        value={formValues.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        style={{ color: "#ffffff", backgroundColor: "#0f0822" }}
                        className={`w-full px-4 py-3.5 rounded-lg border ${
                          errors.name ? "border-red-500 focus:ring-red-500" : "border-white/10 focus:border-purple-500 focus:ring-purple-500"
                        } text-white text-sm placeholder-gray-400 focus:ring-2 focus:outline-none transition-all duration-200`}
                      />
                      {errors.name && (
                        <span className="flex items-center gap-1 text-xs text-red-500 mt-1.5 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Email input */}
                    <div className="text-left">
                      <label htmlFor="email" className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                        Email Address <span className="text-purple-400">*</span>
                      </label>
                      <input
                        id="form-email-input"
                        type="email"
                        name="email"
                        value={formValues.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        style={{ color: "#ffffff", backgroundColor: "#0f0822" }}
                        className={`w-full px-4 py-3.5 rounded-lg border ${
                          errors.email ? "border-red-500 focus:ring-red-500" : "border-white/10 focus:border-purple-500 focus:ring-purple-500"
                        } text-white text-sm placeholder-gray-400 focus:ring-2 focus:outline-none transition-all duration-200`}
                      />
                      {errors.email && (
                        <span className="flex items-center gap-1 text-xs text-red-500 mt-1.5 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div className="text-left">
                    <label htmlFor="subject" className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                      Subject <span className="text-purple-400">*</span>
                    </label>
                    <input
                      id="form-subject-input"
                      type="text"
                      name="subject"
                      value={formValues.subject}
                      onChange={handleInputChange}
                      placeholder="Enter message subject"
                      style={{ color: "#ffffff", backgroundColor: "#0f0822" }}
                      className={`w-full px-4 py-3.5 rounded-lg border ${
                        errors.subject ? "border-red-500 focus:ring-red-500" : "border-white/10 focus:border-purple-500 focus:ring-purple-500"
                      } text-white text-sm placeholder-gray-400 focus:ring-2 focus:outline-none transition-all duration-200`}
                    />
                    {errors.subject && (
                      <span className="flex items-center gap-1 text-xs text-red-500 mt-1.5 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.subject}
                      </span>
                    )}
                  </div>

                  {/* Message Input */}
                  <div className="text-left">
                    <label htmlFor="message" className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                      Your Message <span className="text-purple-400">*</span>
                    </label>
                    <textarea
                      id="form-message-input"
                      name="message"
                      rows={5}
                      value={formValues.message}
                      onChange={handleInputChange}
                      placeholder="Type your message here..."
                      style={{ color: "#ffffff", backgroundColor: "#0f0822" }}
                      className={`w-full px-4 py-3.5 rounded-lg border ${
                        errors.message ? "border-red-500 focus:ring-red-500" : "border-white/10 focus:border-purple-500 focus:ring-purple-500"
                      } text-white text-sm placeholder-gray-400 focus:ring-2 focus:outline-none transition-all duration-200 resize-none`}
                    />
                    {errors.message && (
                      <span className="flex items-center gap-1 text-xs text-red-500 mt-1.5 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    id="btn-form-submit"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg text-sm font-bold uppercase tracking-widest text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-purple-500/20 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        Submit Enquiry
                        <Send className="w-4 h-4 text-white" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
