"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 bg-spaceBlack" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-[10%] w-[500px] h-[500px] rounded-full bg-electricBlue mix-blend-screen filter blur-[150px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-0 left-[10%] w-[600px] h-[600px] rounded-full bg-cyanGlow mix-blend-screen filter blur-[150px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel p-12 md:p-20 rounded-[3rem] border border-white/10"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-7xl font-syne font-bold mb-8 leading-tight"
          >
            Ready to Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-electricBlue to-cyanGlow">Business?</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-white/70 font-dmsans max-w-2xl mx-auto mb-12"
          >
            Let&apos;s discuss how our cutting-edge IT services and digital solutions can accelerate your growth and secure your custom future.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/contact">
              <MagneticButton variant="primary" className="text-lg px-12 py-5 shadow-[0_0_30px_rgba(0,102,255,0.4)] hover:shadow-[0_0_50px_rgba(0,240,255,0.6)]">
                Start a Project
              </MagneticButton>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
