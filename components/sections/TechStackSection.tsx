"use client";

import { motion } from "framer-motion";

export default function TechStackSection() {
  const row1 = ["React", "Next.js", "TypeScript", "Node.js", "Python", "GraphQL", "PostgreSQL", "MongoDB"];
  const row2 = ["AWS", "Docker", "Kubernetes", "Azure", "GCP", "Vercel", "TailwindCSS", "Three.js"];

  return (
    <section className="py-24 bg-spaceBlack overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-electricBlue/5 blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-syne font-bold mb-4"
        >
          Powered by <span className="text-electricBlue">Modern Tech</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/60 font-dmsans max-w-2xl mx-auto"
        >
          We use industry-leading tools and frameworks to ensure your products are scalable, secure, and future-proof.
        </motion.p>
      </div>

      {/* Row 1 - Left to Right */}
      <div className="relative flex overflow-x-hidden border-y border-white/5 py-8 mb-4 bg-white/[0.02]">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 px-6">
          {[...row1, ...row1, ...row1, ...row1].map((tech, i) => (
            <div key={`r1-${i}`} className="flex items-center gap-4 group">
              <div className="w-16 h-16 rounded-2xl glass-panel flex items-center justify-center border-white/10 group-hover:border-cyanGlow/50 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all duration-300">
                <span className="font-jetbrains font-bold text-lg text-white/40 group-hover:text-cyanGlow">{tech.slice(0,2)}</span>
              </div>
              <span className="text-xl font-syne font-medium text-white/50 group-hover:text-white transition-colors">{tech}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - Right to Left */}
      <div className="relative flex overflow-x-hidden border-b border-white/5 py-8 bg-white/[0.02]">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 px-6" style={{ animationDirection: "reverse" }}>
          {[...row2, ...row2, ...row2, ...row2].map((tech, i) => (
            <div key={`r2-${i}`} className="flex items-center gap-4 group">
              <div className="w-16 h-16 rounded-2xl glass-panel flex items-center justify-center border-white/10 group-hover:border-electricBlue/50 group-hover:shadow-[0_0_15px_rgba(0,102,255,0.3)] transition-all duration-300">
                <span className="font-jetbrains font-bold text-lg text-white/40 group-hover:text-electricBlue">{tech.slice(0,2)}</span>
              </div>
              <span className="text-xl font-syne font-medium text-white/50 group-hover:text-white transition-colors">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
