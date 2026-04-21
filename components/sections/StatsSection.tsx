"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  const springValue = useSpring(0, { stiffness: 50, damping: 20 });
  const displayValue = useTransform(springValue, (current) => Math.round(current));
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (inView) {
      springValue.set(value);
    }
  }, [inView, value, springValue]);

  useEffect(() => {
    return displayValue.on("change", (latest) => {
      setDisplay(latest.toString());
    });
  }, [displayValue]);

  return <span ref={ref}>{display}{suffix}</span>;
}

export default function StatsSection() {
  const stats = [
    { label: "Projects Delivered", value: 200, suffix: "+" },
    { label: "Global Clients", value: 50, suffix: "+" },
    { label: "Years Experience", value: 12, suffix: "+" },
    { label: "Client Satisfaction", value: 98, suffix: "%" },
  ];

  const technologies = [
    "AWS", "React", "Next.js", "Docker", "Kubernetes", "Node.js", "Python", "TensorFlow", "Azure", "GCP", "GraphQL"
  ];

  return (
    <section className="py-20 relative bg-spaceBlack">
      <div className="max-w-7xl mx-auto px-6 mb-20 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-6xl font-syne font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-white/50 text-sm md:text-base font-dmsans uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative flex overflow-x-hidden border-y border-white/5 py-6 bg-white/5 backdrop-blur-sm">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 px-8">
          {[...technologies, ...technologies, ...technologies].map((tech, i) => (
            <span key={i} className="text-xl md:text-2xl font-syne font-bold text-white/30 hover:text-cyanGlow transition-colors duration-300">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
