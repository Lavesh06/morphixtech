"use client";

import { motion } from "framer-motion";
import AnimatedText from "@/components/ui/AnimatedText";
import MagneticButton from "@/components/ui/MagneticButton";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";

const HeroCanvas = dynamic(() => import("@/components/three/HeroCanvas"), { ssr: false });
const FloatingShapes = dynamic(() => import("@/components/three/FloatingShapes"), { ssr: false });

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden pt-20">
      <HeroCanvas />
      <FloatingShapes />
      
      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-cyanGlow/30 text-cyanGlow text-sm font-jetbrains font-medium tracking-wider uppercase"
        >
          <span className="w-2 h-2 rounded-full bg-cyanGlow animate-pulse" />
          Next-Gen IT Solutions
        </motion.div>
        
        <AnimatedText
          text="Engineering Tomorrow's Digital Infrastructure"
          el="h1"
          className="text-5xl md:text-7xl lg:text-8xl font-syne font-bold leading-tight md:leading-tight lg:leading-tight mb-8 max-w-5xl"
          animation="word"
        />
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-lg md:text-xl text-white/70 max-w-2xl mb-12 font-dmsans"
        >
          We architect, build, and scale enterprise-grade digital solutions that empower your business to thrive in a hyper-connected world.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <Link href="/services">
            <MagneticButton variant="primary">Explore Services</MagneticButton>
          </Link>
          <Link href="/contact">
            <MagneticButton variant="outline">Get a Quote</MagneticButton>
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
      >
        <span className="text-white/50 text-xs tracking-widest uppercase font-jetbrains mb-2">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="text-cyanGlow w-5 h-5" />
        </motion.div>
      </motion.div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-spaceBlack to-transparent z-10" />
    </section>
  );
}
