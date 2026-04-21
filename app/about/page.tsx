"use client";

import { motion } from "framer-motion";
import AnimatedText from "@/components/ui/AnimatedText";
import GlassCard from "@/components/ui/GlassCard";
import CTASection from "@/components/sections/CTASection";
import Image from "next/image";

const teamKeys = [
  { name: "Elena Rostova", role: "Founder & CEO", img: "https://picsum.photos/seed/elena/400/500" },
  { name: "Marcus Webb", role: "Chief Technology Officer", img: "https://picsum.photos/seed/marcus/400/500" },
  { name: "Aisha Patel", role: "VP of Engineering", img: "https://picsum.photos/seed/aisha/400/500" },
  { name: "James Holden", role: "Lead Product Designer", img: "https://picsum.photos/seed/james/400/500" },
];

const awards = ["Best IT Service Provider 2025", "AWS Premier Partner", "Top 100 Tech Companies", "Cybersecurity Excellence Award", "Innovation in AI 2024"];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-0 bg-spaceBlack min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 mb-32 text-center">
        <AnimatedText
          text="We Build the Future of Tech"
          el="h1"
          className="text-5xl md:text-7xl font-syne font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-electricBlue to-cyanGlow"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-white/60 font-dmsans max-w-3xl mx-auto"
        >
          Since 2012, NexCore has been at the forefront of digital transformation, empowering enterprises to innovate faster, scale efficiently, and secure their future.
        </motion.p>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="h-full p-12 !border-electricBlue/30 shadow-[0_0_50px_rgba(0,102,255,0.1)]">
            <h2 className="text-3xl font-syne font-bold mb-6 text-electricBlue">Our Mission</h2>
            <p className="text-white/70 font-dmsans text-lg leading-relaxed">
              To engineer robust, scalable, and secure digital infrastructure that allows businesses of all sizes to harness the true power of technology without compromise.
            </p>
          </GlassCard>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="h-full p-12 !border-cyanGlow/30 shadow-[0_0_50px_rgba(0,240,255,0.1)]">
            <h2 className="text-3xl font-syne font-bold mb-6 text-cyanGlow">Our Vision</h2>
            <p className="text-white/70 font-dmsans text-lg leading-relaxed">
              To be the global catalyst for next-generation digital innovation, where AI, Cloud, and Design converge to solve humanity&apos;s most complex challenges.
            </p>
          </GlassCard>
        </motion.div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-syne font-bold mb-4">Leadership <span className="text-white/50">Team</span></h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamKeys.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-[3/4]"
            >
              <Image 
                src={member.img} 
                alt={member.name} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:blur-sm grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-spaceBlack via-spaceBlack/50 to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-syne font-bold mb-1">{member.name}</h3>
                <p className="text-cyanGlow font-jetbrains text-sm">{member.role}</p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <span className="text-white/50 text-sm">Leading innovation and operational excellence.</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Awards Ticker */}
      <div className="border-y border-white/5 bg-white/[0.02] py-8 mb-32 overflow-hidden flex">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 px-8">
          {[...awards, ...awards, ...awards].map((award, i) => (
            <span key={i} className="text-xl font-syne font-medium text-white/40 hover:text-white transition-colors flex items-center gap-4">
              <span className="text-cyanGlow">★</span> {award}
            </span>
          ))}
        </div>
      </div>

      <CTASection />
    </div>
  );
}
