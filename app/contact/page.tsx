"use client";

import { useState } from "react";
import AnimatedText from "@/components/ui/AnimatedText";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import dynamic from "next/dynamic";

const ContactOrb = dynamic(() => import("@/components/three/ContactOrb"), { ssr: false });

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  return (
    <div className="pt-32 pb-20 bg-spaceBlack min-h-screen relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-electricBlue/10 blur-[150px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        
        {/* Left Side - Form & Info */}
        <div>
          <AnimatedText
            text="Let's Build the Future Together"
            el="h1"
            className="text-4xl md:text-6xl font-syne font-bold mb-6 text-white"
          />
          <p className="text-white/60 font-dmsans text-lg mb-12">
            Have a project in mind? Fill out the form below and our team will get back to you within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-8 glass p-8 md:p-10 rounded-3xl border border-white/10 mb-12 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative group">
                <input type="text" id="name" required className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-cyanGlow peer" placeholder=" " />
                <label htmlFor="name" className="absolute left-0 top-3 text-white/40 font-dmsans transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-cyanGlow peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">Full Name *</label>
              </div>
              <div className="relative group">
                <input type="email" id="email" required className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-cyanGlow peer" placeholder=" " />
                <label htmlFor="email" className="absolute left-0 top-3 text-white/40 font-dmsans transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-cyanGlow peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">Email Address *</label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative group">
                <input type="text" id="company" className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-cyanGlow peer" placeholder=" " />
                <label htmlFor="company" className="absolute left-0 top-3 text-white/40 font-dmsans transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-cyanGlow peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">Company Name</label>
              </div>
              <div className="relative group">
                <select id="service" className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-cyanGlow appearance-none peer">
                  <option value="" className="bg-spaceBlack text-white">Select Service Needed</option>
                  <option value="web" className="bg-spaceBlack text-white">Web Development</option>
                  <option value="mobile" className="bg-spaceBlack text-white">Mobile Apps</option>
                  <option value="cloud" className="bg-spaceBlack text-white">Cloud Solutions</option>
                  <option value="ai" className="bg-spaceBlack text-white">AI & ML</option>
                  <option value="security" className="bg-spaceBlack text-white">Cybersecurity</option>
                  <option value="other" className="bg-spaceBlack text-white">Other</option>
                </select>
                <div className="absolute right-0 top-4 pointer-events-none text-white/40 group-focus-within:text-cyanGlow">▼</div>
              </div>
            </div>

            <div className="relative group">
              <textarea id="message" required rows={4} className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-cyanGlow peer resize-none" placeholder=" "></textarea>
              <label htmlFor="message" className="absolute left-0 top-3 text-white/40 font-dmsans transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-cyanGlow peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">Project Details *</label>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting || isSubmitted}
              className="w-full py-4 rounded-xl bg-electricBlue hover:bg-cyanGlow focus:bg-cyanGlow hover:text-spaceBlack text-white font-syne font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-3 group relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : isSubmitted ? (
                <span>Message Sent!</span>
              ) : (
                <>
                  <span className="relative z-10">Send Message</span>
                  <Send className="w-4 h-4 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-2">
              <Mail className="w-6 h-6 text-cyanGlow mb-2" />
              <h4 className="font-syne font-bold text-lg">Email Us</h4>
              <a href="mailto:hello@nexcore.tech" className="text-white/60 font-dmsans hover:text-cyanGlow transition-colors">hello@nexcore.tech</a>
            </div>
            <div className="flex flex-col gap-2">
              <Phone className="w-6 h-6 text-cyanGlow mb-2" />
              <h4 className="font-syne font-bold text-lg">Call Us</h4>
              <a href="tel:+919876543210" className="text-white/60 font-dmsans hover:text-cyanGlow transition-colors">+91 98765 43210</a>
            </div>
            <div className="flex flex-col gap-2">
              <MapPin className="w-6 h-6 text-cyanGlow mb-2" />
              <h4 className="font-syne font-bold text-lg">Visit Us</h4>
              <p className="text-white/60 font-dmsans">Jaipur, Rajasthan, India</p>
            </div>
          </div>
        </div>

        {/* Right Side - 3D Orb */}
        <div className="hidden lg:block relative h-full min-h-[600px]">
          <ContactOrb />
        </div>
      </div>
    </div>
  );
}
