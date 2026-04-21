"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    title: "Discovery",
    description: "We analyze your business needs, target audience, and project goals to create a comprehensive roadmap.",
    number: "01"
  },
  {
    title: "Design",
    description: "Our UI/UX team crafts intuitive, beautiful, and engaging interfaces that align with your brand identity.",
    number: "02"
  },
  {
    title: "Development",
    description: "We build robust, scalable architecture using cutting-edge technologies to bring the design to life.",
    number: "03"
  },
  {
    title: "Testing",
    description: "Rigorous quality assurance, performance testing, and security audits ensure a flawless product.",
    number: "04"
  },
  {
    title: "Launch & Support",
    description: "We deploy your solution to production and provide ongoing maintenance and performance optimization.",
    number: "05"
  }
];

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-32 bg-spaceBlack relative overflow-hidden" ref={containerRef}>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-electricBlue/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-syne font-bold mb-6">Our <span className="text-cyanGlow">Process</span></h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg font-dmsans">
            A proven methodology that guarantees results, from initial concept to final deployment.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-white/10 -translate-x-1/2" />
          
          {/* Animated Line Fill */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-6 md:left-1/2 top-0 w-1 bg-gradient-to-b from-electricBlue to-cyanGlow -translate-x-1/2 origin-top"
          />

          <div className="space-y-16">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex flex-col md:flex-row items-center md:justify-between">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 top-8 md:top-1/2 w-4 h-4 bg-spaceBlack border-2 border-cyanGlow rounded-full -translate-x-1/2 md:-translate-y-1/2 z-10 shadow-[0_0_15px_rgba(0,240,255,0.5)]" />
                  
                  {/* Content Left (Empty for odd on desktop) */}
                  <div className={`hidden md:block w-[45%] ${!isEven ? "md:order-2" : ""}`} />
                  
                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={`w-full md:w-[45%] pl-20 md:pl-0 ${!isEven ? "md:pr-12 md:text-right" : "md:pl-12"}`}
                  >
                    <div className={`glass-panel p-8 rounded-2xl border-l-[3px] ${isEven || true ? "border-l-cyanGlow" : "md:border-l-0 md:border-r-[3px] md:border-r-cyanGlow"}`}>
                      <span className="text-6xl font-syne font-black text-white/5 absolute -top-6 -right-4 pointer-events-none">{step.number}</span>
                      <h3 className="text-2xl font-syne font-bold mb-4 text-white relative z-10">{step.title}</h3>
                      <p className="text-white/60 font-dmsans relative z-10">{step.description}</p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
